import Express, { Request, Response } from "express";
import livrosRouter from "./livrosRoutes";

export class Routes {
  private constructor() {}

  static routes(app: Express.Application) {
    app.use("/livros", livrosRouter);
    return;
  }
}
