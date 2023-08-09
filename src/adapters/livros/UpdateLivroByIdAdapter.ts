import { LivroEntitie } from "../../domain/entities/LivroEntitie";
import { UpdateLivroByIdPort } from "../../domain/ports/livros/UpdateLivroByIdPort";
import { INewData } from "../../interfaces/INewData";
import { MongooseAdapter } from "./MongooseAdapter";

export class UpdateLivroByIdAdapter
  extends MongooseAdapter
  implements UpdateLivroByIdPort
{
  constructor() {
    super();
  }

  async updateLivroById(id: string, newData: INewData): Promise<any> {
    const res = await this.livroModel.updateOne(
      { _id: id },
      {
        _id: newData._id,
        titulo: newData.titulo,
        numeroDePaginas: newData.numeroDePaginas,
        ISBN: newData.ISBN,
        editora: newData.editora,
      }
    );
    return res;
  }
}
