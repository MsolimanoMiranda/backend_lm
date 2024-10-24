import routerx from 'express-promise-router'
import categoriaRouter from './categories'
import usuarioRoutes from './usuarios'


const router = routerx();

router.use('/categoria',categoriaRouter)
router.use('/usuario',usuarioRoutes)

export default router;