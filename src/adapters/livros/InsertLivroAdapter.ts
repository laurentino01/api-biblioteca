import mongoose from "mongoose";
import { InsertLivroPort } from "../../domain/ports/InsertLivroPort";
import { livroModel } from "../../models/livroModel";
import { LivroEntitie } from "../../domain/entities/LivroEntitie";

export class InsertLivroAdapter implements InsertLivroPort {
  private livroModel: mongoose.Model<any> = livroModel;
  private livroEntitie: LivroEntitie;
  constructor(livroEntitie: LivroEntitie) {
    this.livroEntitie = livroEntitie;
  }

  async findByISBN(): Promise<boolean> {
    const findISBN = await this.livroModel.findOne({
      ISBN: this.livroEntitie.ISBN,
    });
    if (findISBN !== undefined) {
      return true;
    }

    return false;
  }

  async insertLivro(): Promise<any> {
    const res = await this.livroModel.create(this.livroEntitie);
    return res;
  }
}
