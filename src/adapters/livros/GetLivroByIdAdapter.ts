import { GetLivroById } from "../../domain/ports/livros/GetLivroByIdPort";
import { MongooseAdapter } from "./MongooseAdapter";

export class GetLivroByIdAdapter
  extends MongooseAdapter
  implements GetLivroById
{
  constructor() {
    super();
  }
  async getLivroById(id: string): Promise<any> {
    const res = await this.livroModel.findById({ _id: id });
    return res;
  }
}
