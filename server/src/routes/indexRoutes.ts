import { Router } from 'express';
import { indexController } from '../controllers/indexController';

class IndexRoutes {
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.get('/api/showElements', indexController.list);
        this.router.get('/api/showElement/:id', indexController.getOne)
        this.router.post('/api/addElement', indexController.create);
        this.router.delete('/api/delElement/:id', indexController.delete);
        this.router.put('/api/upElement/:id', indexController.update);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;