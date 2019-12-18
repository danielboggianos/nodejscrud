"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class IndexController {
    index(req, res) {
        res.json({ "Este": "es un objeto" });
    }
    //CREATE
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO usuarios set ?', [req.body], function (err, result, fields) {
                if (err)
                    throw err;
                res.json({ "ID de inserción": result.insertId });
            });
        });
    }
    //READ ALL
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM usuarios', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    //READ 1
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM usuarios WHERE usuarios_id = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                if (result != "") {
                    return res.json(result[0]);
                }
                else {
                    res.status(404).json({ text: "El elemento no existe" });
                }
            });
        });
    }
    //UPDATE
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { body } = req;
            yield database_1.default.query('UPDATE usuarios set ? WHERE usuarios_id = ?', [body, id], function (result) {
                //if(err) throw err;
                res.json(result);
            });
            res.json({ 'actualizado': id });
        });
    }
    //DELETE 1
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM usuarios WHERE usuarios_id = ?', req.params.id, function (err, result) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
}
exports.indexController = new IndexController();
