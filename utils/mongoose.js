import mongoose from "mongoose"
import {mongodb_url} from '../config.js'



export async function connectToDB() {
  try {
    await mongoose.connect(mongodb_url)
    console.log('MongoDB connected')
  } catch (error) {
    console.error(error)
  }
  
}