import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { router } from "./src/routes";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log("rodando em " + process.env.PORT);
});
