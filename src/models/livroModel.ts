import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: "id is required",
    },
    titulo: {
      type: String,
    },
    numeroDePaginas: {
      type: Number,
    },
    ISBN: {
      type: String,
    },
    editora: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const livroModel = mongoose.model("livro", schema);
