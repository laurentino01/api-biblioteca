import { GetAllLivrosPort } from "../../domain/ports/livros/GetAllLivrosPort";
import { MongooseAdapter } from "./MongooseAdapter";

export class GetAllLivrosAdapter
  extends MongooseAdapter
  implements GetAllLivrosPort
{
  constructor() {
    super();
  }
  async getAllLivros(): Promise<any> {
    const res = await this.livroModel.find({});
    return res;
  }
}
