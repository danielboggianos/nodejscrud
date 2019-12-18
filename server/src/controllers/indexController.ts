import { Request, Response } from 'express';
import pool from '../database';

class IndexController {
    public index (req: Request, res: Response) {
        res.json({"Este": "es un objeto"});
    }

    //CREATE
    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO usuarios set ?', [req.body], function(err, result, fields) {
            if (err) throw err;
            res.json({"ID de inserción": result.insertId});
        });
    }

    //READ ALL
    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM usuarios', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    //READ 1
    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        await pool.query('SELECT * FROM usuarios WHERE usuarios_id = ?',[id], function(err, result, fields) {
            if (err) throw err;
            if(result != ""){
                return res.json(result[0]);
            }
            else{
                res.status(404).json({text: "El elemento no existe"});
            }
        });
    }

    //UPDATE
    public async update (req: Request, res: Response) {
        const {id} = req.params;
        const {body} = req;
        await pool.query('UPDATE usuarios set ? WHERE usuarios_id = ?', [body, id], function(result) {
            //if(err) throw err;
            res.json(result);
        });
        res.json({'actualizado': id })
    }

    //DELETE 1
    public async delete (req: Request, res: Response): Promise<void> {
        await pool.query('DELETE FROM usuarios WHERE usuarios_id = ?', req.params.id, function(err, result) {
            if(err) throw err;
            res.json(result);
        });
    }

}

export const indexController = new IndexController();