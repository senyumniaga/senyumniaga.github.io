/**
 * Transcription Service
 * Handles saving, exporting, and managing chat conversation transcripts
 */

// Web Speech API Type Definitions
interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
}

interface SpeechRecognitionEvent {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message?: string;
}

declare global {
  interface Window {
    SpeechRecognition: {
      new (): SpeechRecognition;
    };
    webkitSpeechRecognition: {
      new (): SpeechRecognition;
    };
  }
}

export interface TranscriptMessage {
  role: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export interface Transcript {
  id: string;
  title: string;
  messages: TranscriptMessage[];
  createdAt: string;
  updatedAt: string;
}

class TranscriptionService {
  private storageKey = 'botforge_transcripts';
  private currentTranscript: TranscriptMessage[] = [];

  /**
   * Add a message to the current transcript
   */
  addMessage(role: 'user' | 'bot', text: string): void {
    this.currentTranscript.push({
      role,
      text,
      timestamp: new Date().toISOString()
    });
  }

  /**
   * Get the current transcript
   */
  getCurrentTranscript(): TranscriptMessage[] {
    return [...this.currentTranscript];
  }

  /**
   * Clear the current transcript
   */
  clearCurrentTranscript(): void {
    this.currentTranscript = [];
  }

  /**
   * Save current transcript to localStorage
   */
  saveTranscript(title?: string): string {
    if (this.currentTranscript.length === 0) {
      throw new Error('No messages to save');
    }

    const transcript: Transcript = {
      id: `transcript_${Date.now()}`,
      title: title || `Chat Transcript ${new Date().toLocaleString()}`,
      messages: [...this.currentTranscript],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const saved = this.getSavedTranscripts();
    saved.push(transcript);
    
    // Keep only last 50 transcripts
    const trimmed = saved.slice(-50);
    
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(trimmed));
      return transcript.id;
    } catch (error) {
      console.error('Failed to save transcript:', error);
      throw new Error('Failed to save transcript to storage');
    }
  }

  /**
   * Get all saved transcripts
   */
  getSavedTranscripts(): Transcript[] {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Failed to load transcripts:', error);
      return [];
    }
  }

  /**
   * Get a specific transcript by ID
   */
  getTranscript(id: string): Transcript | null {
    const transcripts = this.getSavedTranscripts();
    return transcripts.find(t => t.id === id) || null;
  }

  /**
   * Delete a transcript
   */
  deleteTranscript(id: string): boolean {
    const transcripts = this.getSavedTranscripts();
    const filtered = transcripts.filter(t => t.id !== id);
    
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error('Failed to delete transcript:', error);
      return false;
    }
  }

  /**
   * Export transcript as text
   */
  exportAsText(messages: TranscriptMessage[]): string {
    return messages.map(msg => {
      const time = new Date(msg.timestamp).toLocaleTimeString();
      const role = msg.role === 'user' ? 'You' : 'BotForge AI';
      return `[${time}] ${role}: ${msg.text}`;
    }).join('\n\n');
  }

  /**
   * Export transcript as JSON
   */
  exportAsJSON(messages: TranscriptMessage[]): string {
    return JSON.stringify(messages, null, 2);
  }

  /**
   * Export transcript as Markdown
   */
  exportAsMarkdown(messages: TranscriptMessage[]): string {
    const header = `# Chat Transcript\n\n*Generated on ${new Date().toLocaleString()}*\n\n---\n\n`;
    const content = messages.map(msg => {
      const time = new Date(msg.timestamp).toLocaleTimeString();
      const role = msg.role === 'user' ? '**You**' : '**BotForge AI**';
      return `## ${role} (${time})\n\n${msg.text}\n\n`;
    }).join('---\n\n');
    
    return header + content;
  }

  /**
   * Download transcript as file
   */
  downloadTranscript(messages: TranscriptMessage[], format: 'txt' | 'json' | 'md' = 'txt', filename?: string): void {
    let content: string;
    let mimeType: string;
    let extension: string;

    switch (format) {
      case 'json':
        content = this.exportAsJSON(messages);
        mimeType = 'application/json';
        extension = 'json';
        break;
      case 'md':
        content = this.exportAsMarkdown(messages);
        mimeType = 'text/markdown';
        extension = 'md';
        break;
      default:
        content = this.exportAsText(messages);
        mimeType = 'text/plain';
        extension = 'txt';
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || `botforge-transcript-${Date.now()}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}

// Voice-to-Text transcription using Web Speech API
export class VoiceTranscriptionService {
  private recognition: SpeechRecognition | null = null;
  private isSupported: boolean;

  constructor() {
    // Check for browser support
    const SpeechRecognition = 
      (window as any).SpeechRecognition || 
      (window as any).webkitSpeechRecognition;
    
    this.isSupported = !!SpeechRecognition;
    
    if (this.isSupported) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';
    }
  }

  /**
   * Check if voice transcription is supported
   */
  isVoiceSupported(): boolean {
    return this.isSupported;
  }

  /**
   * Start voice transcription
   */
  startTranscription(
    onResult: (text: string, isFinal: boolean) => void,
    onError?: (error: string) => void
  ): void {
    if (!this.recognition) {
      onError?.('Speech recognition is not supported in this browser');
      return;
    }

    this.recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        } else {
          interimTranscript += transcript;
        }
      }

      if (finalTranscript) {
        onResult(finalTranscript.trim(), true);
      } else if (interimTranscript) {
        onResult(interimTranscript, false);
      }
    };

    this.recognition.onerror = (event) => {
      const error = (event as any).error;
      let errorMessage = 'Speech recognition error occurred';
      
      switch (error) {
        case 'no-speech':
          errorMessage = 'No speech detected';
          break;
        case 'audio-capture':
          errorMessage = 'No microphone found';
          break;
        case 'not-allowed':
          errorMessage = 'Microphone permission denied';
          break;
        default:
          errorMessage = `Error: ${error}`;
      }
      
      onError?.(errorMessage);
    };

    this.recognition.onend = () => {
      // Auto-restart if needed (optional)
    };

    try {
      this.recognition.start();
    } catch (error) {
      onError?.('Failed to start speech recognition');
    }
  }

  /**
   * Stop voice transcription
   */
  stopTranscription(): void {
    if (this.recognition) {
      this.recognition.stop();
    }
  }

  /**
   * Set language for transcription
   */
  setLanguage(lang: string): void {
    if (this.recognition) {
      this.recognition.lang = lang;
    }
  }
}

// Export singleton instance
export const transcriptionService = new TranscriptionService();
export const voiceTranscriptionService = new VoiceTranscriptionService();

