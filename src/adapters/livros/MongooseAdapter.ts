import mongoose from "mongoose";
import { livroModel } from "../../models/livroModel";

export abstract class MongooseAdapter {
  protected livroModel: mongoose.Model<any> = livroModel;
}
