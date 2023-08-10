"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var livrosRoutes_1 = require("./livrosRoutes");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.routes = function (app) {
        app.use("/livros", livrosRoutes_1.default);
        return;
    };
    return Routes;
}());
exports.Routes = Routes;
