"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/showElements', indexController_1.indexController.list);
        this.router.get('/api/showElement/:id', indexController_1.indexController.getOne);
        this.router.post('/api/addElement', indexController_1.indexController.create);
        this.router.delete('/api/delElement/:id', indexController_1.indexController.delete);
        this.router.put('/api/upElement/:id', indexController_1.indexController.update);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
