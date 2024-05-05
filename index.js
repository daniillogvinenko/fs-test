import fs from "fs";
import express from "express";
import cors from "cors";
import testRouter from "./router/testRouter.js";

const db = fs.readFileSync("./db.json", "utf-8");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use(testRouter);

app.listen(8000, () => {
    console.log("server is running on 8000 port");
});
