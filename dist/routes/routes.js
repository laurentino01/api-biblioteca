"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var livrosRoutes_1 = __importDefault(require("./livrosRoutes"));
var Routes = (function () {
    function Routes() {
    }
    Routes.routes = function (app) {
        app.use("/livros", livrosRoutes_1.default);
        return;
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map