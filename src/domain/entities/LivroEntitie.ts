import { v4 as uuidv4 } from "uuid";
import { InsertLivroPort } from "../ports/livros/InsertLivroPort";
import { GetAllLivrosPort } from "../ports/livros/GetAllLivrosPort";
import { GetLivroById } from "../ports/livros/GetLivroByIdPort";
import { UpdateLivroByIdPort } from "../ports/livros/UpdateLivroByIdPort";
import { INewData } from "../../interfaces/INewData";

export class LivroEntitie {
  private readonly _id: string;
  private titulo: string;
  private NumeroDePaginas: number;
  private ISBN: string;
  private editora: string;

  constructor(
    titulo: string,
    NumeroDePaginas: number,
    ISBN: string,
    editora: string,
    _id?: string
  ) {
    this.titulo = titulo;
    this.NumeroDePaginas = NumeroDePaginas;
    this.ISBN = ISBN;
    this.editora = editora;
    this._id = _id ? _id : uuidv4();
  }

  public async insertLivro(insertLivroAdapter: InsertLivroPort): Promise<any> {
    const verifyISBN = await insertLivroAdapter.findByISBN(this.ISBN);

    if (!verifyISBN) {
      return "ISBN já existente";
    }

    const res = await insertLivroAdapter.insertLivro(
      this._id,
      this.titulo,
      this.NumeroDePaginas,
      this.ISBN,
      this.editora
    );

    return res;
  }

  public static async getAllLivros(
    geAllLivrosAdapter: GetAllLivrosPort
  ): Promise<any> {
    const res = await geAllLivrosAdapter.getAllLivros();
    return res;
  }

  public static async getLivroById(
    getLivroById: GetLivroById,
    id: string
  ): Promise<any> {
    const res = await getLivroById.getLivroById(id);
    return res;
  }

  public static async updateLivroById(
    updateLivroById: UpdateLivroByIdPort,
    id: string,
    newData: INewData
  ): Promise<any> {
    const res = await updateLivroById.updateLivroById(id, newData);
    return res;
  }
}
