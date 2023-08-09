import { Router, Request, Response } from "express";
import { MongoConnectMiddleware } from "../middlewares/MongoConnectMiddleware";
import { insertLivroController } from "../controllers/livros/InsertLivroController";
import { getAllLivrosController } from "../controllers/livros/getAllLivrosController";
import { getLivroByIdController } from "../controllers/livros/getLivroByIdController";

const router = Router();

router.get("/", MongoConnectMiddleware.connect, getAllLivrosController);

router.post(
  "/cadastrar",
  MongoConnectMiddleware.connect,
  insertLivroController
);

router.get("/:id", MongoConnectMiddleware.connect, getLivroByIdController);

export default router;
