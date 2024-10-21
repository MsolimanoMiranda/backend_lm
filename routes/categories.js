import routerx from 'express-promise-router'
import CategoriaController from "../controller/CategoriaController";

const router = routerx();
router.post('/add',CategoriaController.add)
router.get('/list',CategoriaController.list)
router.get('/query',CategoriaController.query)
router.put('/update',CategoriaController.update)
router.delete('/remove',CategoriaController.remove)
router.put('/activate',CategoriaController.activate)
router.put('/desativate',CategoriaController.desactivate)
export default router