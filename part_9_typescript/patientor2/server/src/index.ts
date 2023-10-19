import express from "express";
import { diagnosisRouter } from "./routes/diagnosis";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

app.use("/api/diagnoses", diagnosisRouter);

app.listen(3001, () => {
  console.log(`Server running on port ${3001}`);
});
