import Express, { Request, Response } from "express";
import livrosRouter from "./livrosRoutes";

export class Routes {
  private constructor() {}

  static routes(app: Express.Application) {
    app.use("/", (req: Request, res: Response) => {
      res.status(200).json({
        message: "ok",
      });
    });
    app.use("/livros", livrosRouter);
    return;
  }
}
