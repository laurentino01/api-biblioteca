"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var MongoConnectMiddleware_1 = require("../middlewares/MongoConnectMiddleware");
var InsertLivroController_1 = require("../controllers/livros/InsertLivroController");
var getAllLivrosController_1 = require("../controllers/livros/getAllLivrosController");
var getLivroByIdController_1 = require("../controllers/livros/getLivroByIdController");
var UpdateLivroByIdController_1 = require("../controllers/livros/UpdateLivroByIdController");
var deleteLivroByIdController_1 = require("../controllers/livros/deleteLivroByIdController");
var router = (0, express_1.Router)();
router.get("/", MongoConnectMiddleware_1.MongoConnectMiddleware.connect, getAllLivrosController_1.getAllLivrosController);
router.post("/", MongoConnectMiddleware_1.MongoConnectMiddleware.connect, InsertLivroController_1.insertLivroController);
router.get("/:id", MongoConnectMiddleware_1.MongoConnectMiddleware.connect, getLivroByIdController_1.getLivroByIdController);
router.put("/:id", MongoConnectMiddleware_1.MongoConnectMiddleware.connect, UpdateLivroByIdController_1.updateLivroByIdController);
router.delete("/:id", MongoConnectMiddleware_1.MongoConnectMiddleware.connect, deleteLivroByIdController_1.deleteLivroByIdController);
exports.default = router;
//# sourceMappingURL=livrosRoutes.js.map