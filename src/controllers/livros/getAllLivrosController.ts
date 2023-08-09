import { RequestHandler } from "express";
import { LivroEntitie } from "../../domain/entities/LivroEntitie";
import { GetAllLivrosAdapter } from "../../adapters/livros/GetAllLivrosAdapter";

export const getAllLivrosController: RequestHandler = async (req, res) => {
  try {
    const getAllLivrosAdapter = new GetAllLivrosAdapter();
    const resDB = await LivroEntitie.getAllLivros(getAllLivrosAdapter);

    res.status(200).json(resDB);
  } catch (error: any) {
    res.status(400).json({
      status: "Error",
      message: error,
    });
  }
};
