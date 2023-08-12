import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { Routes } from "./routes/routes";
import livroRoutes from "./routes/livrosRoutes";
const app = express();

dotenv.config();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", process.env.AUTH_DOMAIN);
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  app.use(cors());
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

Routes.routes(app);

app.listen(process.env.PORT, () => {
  console.log("rodando em " + process.env.PORT);
});
