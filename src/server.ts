import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { Routes } from "./routes/routes";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "ok",
  });
});

Routes.routes(app);

app.listen(process.env.PORT, () => {
  console.log("rodando em " + process.env.PORT);
});
