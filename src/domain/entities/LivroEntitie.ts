import { v4 as uuidv4 } from "uuid";
import { InsertLivroPort } from "../ports/InsertLivroPort";

export class LivroEntitie {
  private readonly _id: string;
  private titulo: string;
  private NumeroDePaginas: number;
  public readonly ISBN: string;
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

  public async insertLivro(
    insertLivroAdapter: InsertLivroPort
  ): Promise<string> {
    const verifyISBN = await insertLivroAdapter.findByISBN();
    if (!verifyISBN) {
      return "ISBN já existente";
    }
    const res = await insertLivroAdapter.insertLivro();
    return res;
  }
}
