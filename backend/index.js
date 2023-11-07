import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
const CONNECTION = process.env.CONNECTION;
const app = express();
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello this is get");
});
app.use(cors());
app.use("/books", booksRoute);

mongoose
  .connect(CONNECTION)
  .then(() => {
    console.log("app is connected with mongo");
    app.listen(PORT, (req, res) => {
      console.log(`Everything is working fine ${PORT}`);
      res.send(`<h1>Hello this is backend</h1>`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
