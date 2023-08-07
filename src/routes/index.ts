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

export { router };
