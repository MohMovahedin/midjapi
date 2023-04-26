import midjourney from "midjourney-client";

export async function generateImage(prompt) {
    const result = await midjourney(prompt, { width: 768,height:768});
    return result;
}
