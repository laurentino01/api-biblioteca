import { RequestHandler } from "express";
import { DeleteLivroByIdAdapter } from "../../adapters/livros/DeleteLivroByIdAdapter";
import { LivroEntitie } from "../../domain/entities/LivroEntitie";

export const deleteLivroByIdController: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;

    const deleteLivroByIdAdapter = new DeleteLivroByIdAdapter();

    await LivroEntitie.deleteLivroById(deleteLivroByIdAdapter, id);

    res.status(200).json({
      message: "Livro excluído com sucesso",
    });
  } catch (error: any) {
    res.status(400).json({
      status: "Error",
      message: error,
    });
  }
};
