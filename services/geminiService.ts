import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
// In a real production app, you might proxy this through a backend to hide the key,
// but for a demo/MVP, client-side with env var is acceptable.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// System instruction to make the bot behave like a sales rep for the landing page itself
const SYSTEM_INSTRUCTION = `
You are "ForgeBot", a friendly and professional AI sales assistant for "BotForge".
BotForge is a company that builds custom AI chatbots for businesses.

Your goals:
1. Explain that BotForge creates tailored AI chatbots that understand business specific data.
2. Emphasize speed: "Deployed in days, not months."
3. Mention 24/7 customer service capabilities.
4. If asked about pricing, say "We offer flexible tiers starting from $499/mo. Would you like to schedule a consultation?"
5. Keep responses concise (under 50 words usually) and conversational.
6. Do not make up technical details, stick to the value proposition: Custom Data, Brand Voice, 24/7 Availability.
`;

let chatSession: Chat | null = null;

export const initializeChat = () => {
  if (!apiKey) {
    console.warn("API Key is missing. Chat functionality will be limited.");
    return;
  }
  
  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
  } catch (error) {
    console.error("Failed to initialize chat:", error);
  }
};

export const sendMessageToGemini = async function* (message: string) {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    yield "I'm sorry, I'm currently offline (API Key missing). Please check the configuration.";
    return;
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Error sending message:", error);
    yield "I'm having a little trouble connecting to the mainframe right now. Please try again in a moment.";
  }
};