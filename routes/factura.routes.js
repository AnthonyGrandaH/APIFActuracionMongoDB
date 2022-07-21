import {Router} from 'express'
import {getFacturas,
       createFactura,
       updateFactura,
       deleteFactura,
       getFactura} from "../controllers/factura.controller.js"

const router = Router()

router.get('/factura', getFacturas)

router.post('/factura', createFactura)

router.put('/factura/:numFactura', updateFactura)

router.delete('/factura/:numFactura', deleteFactura)

router.get('/factura/:cedula', getFactura)




export default router 