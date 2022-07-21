import Factura from '../models/factura.model.js'



export const getFacturas = async (req, res) => {
    try {
        const facturas = await Factura.find()
        res.json(facturas)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const createFactura = async (req, res) => {
    try {
        const { numFactura, cedulaCliente, fechaFactura, valorTotal, dirFactura } = (req.body)

        console.log(numFactura, cedulaCliente, fechaFactura, valorTotal, dirFactura)
        const factura = new Factura({
            numFactura,
            cedulaCliente,
            fechaFactura,
            valorTotal,
            dirFactura
        })

        if (req.files?.factura) {
            const result = await uploadFactura(req.files.factura.tempFilePath)
            factura.factura = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
        }

        await factura.save()

        res.json(factura)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const updateFactura = async (req, res) => {
    try {
        const { numFactura } = req.params;
        const facturaUpdated = await Factura.findByIdAndUpdate(numFactura, req.body, { new: true })
        return res.json(facturaUpdated)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}


export const deleteFactura = async (req, res) => {
    try {
        const factura = await Factura.findByIdAndDelete(req.params.numFactura)
        console.log(req.params.numFactura)
        if (!factura) return res.status(404).json({
            message: 'Factura no existe'
        })
        return res.send(factura)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const getFactura = async (req, res) => {
    try {
        const factura = await Factura.findById(req.params.cedulaCliente)
        if (!factura) return res.status(404).json({
            message: 'Factura no existe'
        })
        return res.send(factura)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

} 