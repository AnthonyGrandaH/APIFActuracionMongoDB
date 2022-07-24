import mongoose from 'mongoose'
import AutoIncrement from 'mongoose-sequence'
//import sequencing from "../models/sequencing.js"
//const sequencing = require("../models/sequencing.js");

const productSchema= mongoose.Schema({
  _id: {
    type:Number,
    defualt:0,
    incrementBy: 1
  },
  codigo_barras: {
    type:String,
    required: true,
    trim: true,
    unique: true 
       },
  nombre: {
    type:String,
    required: true,
    trim: true,
    unique: true 
       },
  descripcion: {
    type:String,
    trim: true
  },
  precio_venta: {
    type: Number,
      default: 0
  },
  existencia: {
    type:String,
    trim: true
  },
  image: {
    public_id: String,
    secure_url: String
  },
  imageUrl: {
    type:String,
    trim: true
  }
  
},{
  timestamps: true
}, { _id: false })
//productSchema.plugin(AutoIncrement,{start_seq:2});
/*productSchema.plugin(AutoIncrement.plugin, {
    model: 'Product',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});*/
export default mongoose.model('Product', productSchema)

