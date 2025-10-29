
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key not found. AI features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const getCareerAdvice = async (courseName: string): Promise<string> => {
  if (!API_KEY) {
    return Promise.resolve("AI Career Counselor is currently unavailable. Please check the API key configuration.");
  }

  try {
    const prompt = `I am a student from Bangladesh interested in the '${courseName}' program at Sharda University. Please provide a brief, encouraging overview of the career prospects after completing this degree. Mention 2-3 key skills I will learn and 3-4 potential job roles available in Bangladesh and internationally. Format the response in simple markdown.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error fetching career advice from Gemini:", error);
    return "Sorry, I couldn't fetch career advice at the moment. Please try again later.";
  }
};
