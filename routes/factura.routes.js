import {Router} from 'express'
import {getFacturas,
       createFactura,
       updateFactura,
       deleteFactura,
       getFactura} from "../controllers/factura.controller.js"

const router = Router()

router.get('/factura', getFacturas)

router.post('/factura', createFactura)

router.put('/factura/:id', updateFactura)

router.delete('/factura/:id', deleteFactura)

router.get('/factura/:cedulaCliente', getFactura)




export default router 