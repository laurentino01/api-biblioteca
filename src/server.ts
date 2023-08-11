import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { Routes } from "./routes/routes";
import livroRoutes from "./routes/livrosRoutes";
const app = express();

dotenv.config();

app.use(
  cors({
    origin: process.env.AUTH_DOMAIN,
    allowedHeaders: process.env.AUTH_DOMAIN,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

Routes.routes(app);

app.listen(process.env.PORT, () => {
  console.log("rodando em " + process.env.PORT);
});
