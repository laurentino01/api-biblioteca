import { DeleteLivroByIdPort } from "../../domain/ports/livros/DeleteLivroByIdPort";
import { MongooseAdapter } from "./MongooseAdapter";

export class DeleteLivroByIdAdapter
  extends MongooseAdapter
  implements DeleteLivroByIdPort
{
  async deleteLivroById(id: string): Promise<any> {
    const res = await this.livroModel.deleteOne({ _id: id });
    return res;
  }
}
