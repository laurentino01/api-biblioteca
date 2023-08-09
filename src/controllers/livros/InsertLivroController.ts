import { RequestHandler } from "express";
import { LivroEntitie } from "../../domain/entities/LivroEntitie";
import { InsertLivroAdapter } from "../../adapters/livros/InsertLivroAdapter";

export const insertLivroController: RequestHandler = async (req, res) => {
  try {
    const { titulo, numeroDePaginas, ISBN, editora } = req.body;

    const livro = new LivroEntitie(titulo, numeroDePaginas, ISBN, editora);
    const insertLivroAdater = new InsertLivroAdapter();

    const resDB = await livro.insertLivro(insertLivroAdater);

    res.status(200).json({
      message: resDB,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "Error",
      message: error,
    });
  }
};
