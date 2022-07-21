import Product from '../models/product.model.js'
import {uploadImage} from '../utils/cloudinary.js'



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
     const{name, description, price} = (req.body)
  
    console.log(name, description, price)
  const product = new Product({
    name,
    description,
    price
  })

  if(req.files?.image){
    const result = await uploadImage(req.files.image.tempFilePath)
    product.image = {
      public_id: result.public_id,
      secure_url: result.secure_url
    }
  }
    
  await product.save()
  
  res.json(product)
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
  const product = await     Product.findByIdAndDelete(req.params.id)
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