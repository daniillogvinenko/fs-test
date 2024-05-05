import { Router } from "express";
import fs from "fs";
import path from "path";

const testRouter = new Router();

testRouter.get("/tests", (req, res) => {
    const db = JSON.parse(fs.readFileSync(path.resolve("db.json")));
    const { tests } = db;
    console.log(tests);

    return res.json(tests);
});

testRouter.post("/tests", (req, res) => {
    const db = JSON.parse(fs.readFileSync(path.resolve("db.json")));
    const { tests } = db;
    tests.push({ id: req.body.id, message: req.body.message });

    fs.writeFileSync(path.resolve("db.json"), JSON.stringify({ ...db, tests }));

    return res.json({ id: req.body.id, message: req.body.message });
});

export default testRouter;
