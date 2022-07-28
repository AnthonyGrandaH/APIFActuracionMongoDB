import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import indexRoutes from './routes/index.routes.js'
import productsRoutes from "./routes/products.routes.js"
import facturaRoutes from './routes/factura.routes.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//subir archivos
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}));

app.use(indexRoutes)
app.use(facturaRoutes)
app.use(productsRoutes)

export default app 