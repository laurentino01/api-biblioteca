"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.livroModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var schema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true,
});
exports.livroModel = mongoose_1.default.model("livro", schema);
//# sourceMappingURL=livroModel.js.map