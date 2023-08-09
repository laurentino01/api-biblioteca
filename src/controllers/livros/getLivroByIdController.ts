import { RequestHandler } from "express";
import { GetLivroByIdAdapter } from "../../adapters/livros/GetLivroByIdAdapter";
import { LivroEntitie } from "../../domain/entities/LivroEntitie";

export const getLivroByIdController: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const getLivroByIdAdapter = new GetLivroByIdAdapter();
    const resDB = await LivroEntitie.getLivroById(getLivroByIdAdapter, id);

    res.status(200).json({
      livro: resDB,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "Error",
      message: error,
    });
  }
};
