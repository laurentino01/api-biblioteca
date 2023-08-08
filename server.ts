import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { Routes } from "./src/routes/routes";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

Routes.routes(app);

app.listen(process.env.PORT, () => {
  console.log("rodando em " + process.env.PORT);
});
