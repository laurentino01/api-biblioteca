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
      next();
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
