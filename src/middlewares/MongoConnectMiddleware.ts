import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

export class MongoConnectMiddleware {
  private constructor() {
    //
  }

  static async connect(req: Request, res: Response, next: NextFunction) {
    try {
      // @ts-ignore
      await mongoose.connect(process.env.MONGO_URI);
      console.log("conectado ao mongo");
      try {
        next();
      } catch (error) {}

      return mongoose;
    } catch (error: any) {
      return "Não foi possivel conectar";
    }
  }
}
