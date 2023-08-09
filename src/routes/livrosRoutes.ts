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

/* router.get("/search", (req: Request, res: Response) => {
  try {
    fetch("https://openlibrary.org/books/OL7353617M.json").then((data: any) => {
      res.status(200).json({
        message: data,
      });
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: error,
    });
  }
}); */

export default router;
