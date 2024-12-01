import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCFMHUwB5ec5R2QtG15d7JgodKonmBOhxA");
const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

export async function generateRoutes(prompt){
    const result = await model.generateContent(prompt);
    return result;
}