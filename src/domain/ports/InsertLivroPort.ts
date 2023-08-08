export interface InsertLivroPort {
  findByISBN(ISBN: string): boolean;
  insertLivro(
    titulo: string,
    NumeroDePaginas: number,
    ISBN: string,
    editora: string,
    _id: string
  ): Promise<string>;
}
