import Product from '../models/product.model.js'
import {uploadImage} from '../utils/cloudinary.js'
import counter from '../models/sequencing.js'



export const getProducts = async (req,res) =>{
  try {
    const products= await Product.find()
    res.json(products)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
  
} 

export const createProducts = async (req,res) => {
  
  try {
     const{codigo_barras, nombre, descripcion, precio_venta, existencia, imageUrl} = (req.body)  
    counter.findOneAndUpdate(
      {id:"autoval"},
      {"$inc": {"seq":1}},
      {new:true},(err,cd)=>{
        let seqId;
        if(cd==null){
          const newval = new counter({id:"autoval", seq:1})
          newval.save()
          seqId=1
        }else{
          seqId=cd.seq
        }

        console.log(seqId, codigo_barras, nombre, descripcion, precio_venta, existencia)
    
  const product = new Product({
    _id:seqId,
    codigo_barras, 
    nombre, 
    descripcion, 
    precio_venta, 
    existencia,
    imageUrl
  })
if(req.files?.image){
    const result =  uploadImage(req.files.image.tempFilePath)
    product.image = {
      public_id: result.public_id,
      secure_url: result.secure_url
    }
  }
  
  product.save()
  
  res.json(product)
      }
    )
    
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
 
}

export const updateProducts = async (req,res) => {
  try {
    const {id}= req.params;
  const productUpdated= await Product.findByIdAndUpdate(id, req.body,{ new: true})
  return res.json(productUpdated)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
  
}

export const deleteProducts = async (req,res) => {
 try {
  const product = await Product.findByIdAndDelete(req.params.id)
  console.log(req.params.id)
  if (!product) return res.status(404).json({
    message: 'Product does not exist'
  })
  return res.send(product)  
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
  
} 

export const getProduct = async (req,res) => { 
  try {
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).json({
    message: 'Product does not exist'
  })
  return res.send(product)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
  
} 