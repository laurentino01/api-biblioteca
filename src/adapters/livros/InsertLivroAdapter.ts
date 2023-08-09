import mongoose from "mongoose";
import { InsertLivroPort } from "../../domain/ports/InsertLivroPort";
import { livroModel } from "../../models/livroModel";
import { LivroEntitie } from "../../domain/entities/LivroEntitie";

export class InsertLivroAdapter implements InsertLivroPort {
  private livroModel: mongoose.Model<any> = livroModel;

  constructor() {}

  async findByISBN(ISBN: string): Promise<boolean> {
    const findISBN = await this.livroModel.findOne({
      ISBN: ISBN,
    });
    if (findISBN) {
      return false;
    }
    return true;
  }

  async insertLivro(
    _id: string,
    titulo: string,
    NumeroDePaginas: number,
    ISBN: string,
    editora: string
  ): Promise<any> {
    const res = await this.livroModel.create({
      _id,
      titulo,
      NumeroDePaginas,
      ISBN,
      editora,
    });
    return res;
  }
}
