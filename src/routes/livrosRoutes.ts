import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "OK",
    });
  } catch (error) {
    return error;
  }
});

router.get("/teste", (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "teste",
    });
  } catch (error) {
    return error;
  }
});

export default router;
