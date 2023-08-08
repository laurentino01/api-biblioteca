export interface InsertLivroPort {
  findByISBN(): Promise<boolean>;
  insertLivro(): Promise<any>;
}
