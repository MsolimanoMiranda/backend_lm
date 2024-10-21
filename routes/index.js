import routerx from 'express-promise-router'
import categoriaRouter from './categories'


const router = routerx();

router.use('/categoria',categoriaRouter)

export default router;