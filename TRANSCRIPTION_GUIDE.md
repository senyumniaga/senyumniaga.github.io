# Transcription Feature Guide

## Overview

The BotForge chat now includes comprehensive transcription functionality that allows you to:
- Automatically save all conversations
- Export transcripts in multiple formats
- Use voice-to-text input

## Features

### 1. Automatic Transcript Saving
All messages in the chat are automatically saved to a transcript. The transcript is stored in the browser's localStorage and persists across sessions.

### 2. Voice Input
Click the microphone button (🎤) in the chat input to start voice transcription:
- **Supported Browsers**: Chrome, Edge, Safari (WebKit-based)
- **How to use**: 
  1. Click the mic button
  2. Speak your message
  3. The text will appear in the input field
  4. Click send or press Enter

**Note**: You'll need to grant microphone permissions when prompted.

### 3. Export Transcripts
Export your conversation in three formats:

- **TXT** - Plain text format, easy to read
- **JSON** - Structured data format for developers
- **Markdown** - Formatted text with headers and structure

**How to export**:
1. Click the download icon (⬇️) in the chat header
2. Select your preferred format
3. The file will download automatically

## API Usage

### Using the Transcription Service

```typescript
import { transcriptionService, voiceTranscriptionService } from './services/transcriptionService';

// Add a message to transcript
transcriptionService.addMessage('user', 'Hello!');
transcriptionService.addMessage('bot', 'Hi there!');

// Get current transcript
const messages = transcriptionService.getCurrentTranscript();

// Export as text
const text = transcriptionService.exportAsText(messages);

// Export as JSON
const json = transcriptionService.exportAsJSON(messages);

// Export as Markdown
const markdown = transcriptionService.exportAsMarkdown(messages);

// Download transcript
transcriptionService.downloadTranscript(messages, 'txt');

// Save transcript to localStorage
const transcriptId = transcriptionService.saveTranscript('My Chat Session');

// Get all saved transcripts
const allTranscripts = transcriptionService.getSavedTranscripts();

// Get specific transcript
const transcript = transcriptionService.getTranscript(transcriptId);

// Delete transcript
transcriptionService.deleteTranscript(transcriptId);
```

### Using Voice Transcription

```typescript
import { voiceTranscriptionService } from './services/transcriptionService';

// Check if voice is supported
if (voiceTranscriptionService.isVoiceSupported()) {
  // Start transcription
  voiceTranscriptionService.startTranscription(
    (text, isFinal) => {
      if (isFinal) {
        console.log('Final text:', text);
      } else {
        console.log('Interim text:', text);
      }
    },
    (error) => {
      console.error('Error:', error);
    }
  );
  
  // Stop transcription
  voiceTranscriptionService.stopTranscription();
  
  // Set language
  voiceTranscriptionService.setLanguage('en-US');
}
```

## Storage

Transcripts are stored in browser localStorage under the key `botforge_transcripts`. The service automatically keeps the last 50 transcripts to prevent storage overflow.

## Browser Compatibility

- **Voice Input**: Chrome, Edge, Safari (WebKit)
- **Export Features**: All modern browsers
- **Storage**: All browsers with localStorage support

## Notes

- Transcripts are stored locally in your browser
- Voice transcription requires microphone permissions
- The service automatically handles errors and provides user feedback
- All timestamps are stored in ISO 8601 format

