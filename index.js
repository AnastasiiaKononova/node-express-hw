const fs = require("fs/promises");

async function getRandomQuote() {
  try {
    const data = await fs.readFile("./citadelle.txt", "utf-8");
    const paragraphs = data.split("\n");
    
    const specialSymbols = ["\n", "\r"];
    const cleanParagraphs = paragraphs
      .map((p) => p.trim())
      .filter((p) => !specialSymbols.includes(p) && p.length > 0);

    if (cleanParagraphs.length === 0) {
      console.log("This is empty file");
      return;
    }

    const randomIndex = Math.floor(Math.random() * cleanParagraphs.length);
    const randomQuote = cleanParagraphs[randomIndex];
    console.log("Random quote:", randomQuote);
  } catch (err) {
    console.log("Failed to read the file:", err.message);
  }
}

getRandomQuote();
