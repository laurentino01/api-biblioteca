import { Router, Request, Response } from "express";
import { MongoConnectMiddleware } from "../middlewares/MongoConnectMiddleware";

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

export default router;
