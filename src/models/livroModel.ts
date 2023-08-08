import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
  _id: {
    type: Schema.Types.UUID,
    required: "id is required",
  },
  titulo: {
    type: String,
    required: "titulo is required",
  },
  numeroDePaginas: {
    type: Number,
    required: "numeroDePaginas is required",
  },
  ISBN: {
    type: String,
    required: "ISBN is required",
  },
  editora: {
    type: String,
    required: "editora is required",
  },
});

export const livroModel = mongoose.model("livro", schema);
