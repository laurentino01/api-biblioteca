import { v4 as uuidv4 } from "uuid";
import { InsertLivroPort } from "../ports/InsertLivroPort";

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

  public async insertLivro(insertLivroPort: InsertLivroPort): Promise<string> {
    try {
      const verifyEmail = await insertLivroPort.findByISBN(this.ISBN);
      if (verifyEmail) {
        const res = await insertLivroPort.insertLivro(
          this.titulo,
          this.NumeroDePaginas,
          this.ISBN,
          this.editora,
          this._id
        );
        return res;
      }

      return "ISBN já existente";
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
