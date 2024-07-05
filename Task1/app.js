const express = require("express");

const app = express();

const { getBookById } = require("./db");

const PORT = 9000;

app.get("/", (_, res) => res.status(200).send("Hey there!"));

app.get("/books/:id", async (req, res) => {
  const id = req.params.id;

  const [fetchedBooks] = await getBookById(id);
  console.log(fetchedBooks);

  res.status(200).send(fetchedBooks);
});

app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
