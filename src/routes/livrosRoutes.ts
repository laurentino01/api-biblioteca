import { Router, Request, Response } from "express";
import { MongoConnectMiddleware } from "../middlewares/MongoConnectMiddleware";
import { insertLivroController } from "../controllers/livros/InsertLivroController";

const router = Router();

router.get(
  "/",
  MongoConnectMiddleware.connect,
  (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "OK",
      });
    } catch (error) {
      return error;
    }
  }
);

router.post(
  "/cadastrar",
  MongoConnectMiddleware.connect,
  insertLivroController
);

export default router;
