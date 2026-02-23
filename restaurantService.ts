
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export interface RestaurantData {
  name: string;
  address: string;
  phone: string;
  hours: { day: string; hours: string }[];
  menu: { category: string; items: { name: string; description: string; price: string }[] }[];
  description: string;
}

export async function getRestaurantData(): Promise<RestaurantData> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Extract information about 'Restaurant L'Oeuforie Matinale' in Montreal from these links: https://www.facebook.com/restaurantloeuforiematinale/ and https://www.google.com/maps/place/Restaurant+L'Oeuforie+Matinale/@45.5447491,-73.6746284,16s%2Fg%2F1tgxt4l3. Provide name, address, phone, hours, a sample menu (at least 3 categories with 3 items each), and a professional description.",
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          address: { type: Type.STRING },
          phone: { type: Type.STRING },
          hours: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                day: { type: Type.STRING },
                hours: { type: Type.STRING }
              },
              required: ["day", "hours"]
            }
          },
          menu: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                category: { type: Type.STRING },
                items: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      name: { type: Type.STRING },
                      description: { type: Type.STRING },
                      price: { type: Type.STRING }
                    },
                    required: ["name", "description", "price"]
                  }
                }
              },
              required: ["category", "items"]
            }
          },
          description: { type: Type.STRING }
        },
        required: ["name", "address", "phone", "hours", "menu", "description"]
      }
    }
  });

  return JSON.parse(response.text);
}
