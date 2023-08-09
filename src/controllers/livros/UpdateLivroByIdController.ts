import { RequestHandler } from "express";
import { LivroEntitie } from "../../domain/entities/LivroEntitie";
import { UpdateLivroByIdAdapter } from "../../adapters/livros/UpdateLivroByIdAdapter";
import { INewData } from "../../interfaces/INewData";

export const updateLivroByIdController: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const { titulo, numeroDePaginas, ISBN, editora } = req.body;

    const newData: INewData = {
      _id: id,
      titulo: titulo,
      numeroDePaginas: numeroDePaginas,
      ISBN: ISBN,
      editora: editora,
    };

    const updateLivroByIdAdapter = new UpdateLivroByIdAdapter();

    const resDB = await LivroEntitie.updateLivroById(
      updateLivroByIdAdapter,
      id,
      newData
    );

    res.status(200).json({
      livroUpdate: newData,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "Error",
      message: error,
    });
  }
};
