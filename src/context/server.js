

const express = require("express");
const fs = require("fs").promises;
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
//app.use(cors());
const PORT = process.env.PORT || 5500; // Live hosts assign their own port

app.use(cors({
  origin: "https://project-server-j1ix.onrender.com" // In production, replace "*" with your live Netlify/Vercel link for safety
}));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});

const FILE = path.join(__dirname, "data", "books.json");

// Ensure folder and file exist
const initializeFile = async () => {
  try {
    await fs.mkdir(path.dirname(FILE), { recursive: true });
    try {
      await fs.access(FILE);
    } catch {
      await fs.writeFile(FILE, JSON.stringify([]));
    }
  } catch (err) { console.error("Init error:", err); }
};
initializeFile();


// READ ALL
app.get("/books", async (req, res) => {
  try {
    const data = await fs.readFile(FILE, "utf8");
    res.json(JSON.parse(data || "[]"));
  } catch (err) { res.status(500).json({ error: "Read failed" }); }
});



// CREATE (Add Book)
app.post("/update-json", async (req, res) => {
  try {
    const data = await fs.readFile(FILE, "utf8");
    const books = JSON.parse(data || "[]");
    books.push(req.body);
    await fs.writeFile(FILE, JSON.stringify(books, null, 2));
    res.status(201).json({ message: "Book saved successfully!" });
  } catch (err) { res.status(500).json({ error: "Save failed" }); }
});

// UPDATE (Put Book)
app.put("/books/:id", async (req, res) => {
  try {
    const data = await fs.readFile(FILE, "utf8");
    let books = JSON.parse(data || "[]");
    
    // DEBUG: See what is happening in your terminal
    console.log("--- Update Attempt ---");
    console.log("ID sent from React:", req.params.id);
    console.log("Available IDs in JSON:", books.map(b => b.id));

    const index = books.findIndex((b) => String(b.id) === String(req.params.id));

    if (index !== -1) {
      books[index] = { ...books[index], ...req.body };
      await fs.writeFile(FILE, JSON.stringify(books, null, 2));
      res.json({ message: "Update successful" });
    } else {
      res.status(404).json({ error: "ID mismatch" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});



// DELETE
app.delete("/books/:id", async (req, res) => {
  try {
    const data = await fs.readFile(FILE, "utf8");
    let books = JSON.parse(data || "[]");
    books = books.filter((b) => String(b.id) !== String(req.params.id));
    await fs.writeFile(FILE, JSON.stringify(books, null, 2));
    res.json({ message: "Deleted" });
  } catch (err) { res.status(500).json({ error: "Delete failed" }); }
});

app.listen(PORT, "0.0.0.0", () => console.log(`🚀 Server on http://localhost:${PORT}`));