import mongoose from 'mongoose'

const facturaSchema= mongoose.Schema({
    numFactura: {
      type:Number,
      required: true,
      trim: true,
      unique: true 
         },
    cedulaCliente: {
      type:String,
      trim: true
    },
    fechaFactura: {
        type:String,
        trim: true
      },
    valorTotal: {
      type: Number,
        default: 0
    },
    dirFactura: {
        type:String,
        trim: true
    },
    factura: {
      public_id: String,
      secure_url: String
    }
  },{
    timestamps: true
  })
  
  export default mongoose.model('Facturas', facturaSchema)