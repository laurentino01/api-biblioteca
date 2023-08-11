import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { Routes } from "./routes/routes";
import livroRoutes from "./routes/livrosRoutes";
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

app.use("/livros", livroRoutes);

app.listen(process.env.PORT, () => {
  console.log("rodando em " + process.env.PORT);
});
