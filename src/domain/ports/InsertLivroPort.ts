export interface InsertLivroPort {
  findByISBN(ISBN: string): Promise<boolean>;
  insertLivro(
    _id: string,
    titulo: string,
    NumeroDePaginas: number,
    ISBN: string,
    editora: string
  ): Promise<any>;
}
