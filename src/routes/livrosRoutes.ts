import { Router, Request, Response } from "express";
import { MongoConnectMiddleware } from "../middlewares/MongoConnectMiddleware";
import { insertLivroController } from "../controllers/livros/InsertLivroController";
import { getAllLivrosController } from "../controllers/livros/getAllLivrosController";
import { getLivroByIdController } from "../controllers/livros/getLivroByIdController";
import { updateLivroByIdController } from "../controllers/livros/UpdateLivroByIdController";

const router = Router();

router.get("/", MongoConnectMiddleware.connect, getAllLivrosController);

router.post("/", MongoConnectMiddleware.connect, insertLivroController);

router.get("/:id", MongoConnectMiddleware.connect, getLivroByIdController);

router.put("/:id", MongoConnectMiddleware.connect, updateLivroByIdController);

export default router;
