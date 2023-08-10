export interface DeleteLivroByIdPort {
  deleteLivroById(id: string): Promise<any>;
}
