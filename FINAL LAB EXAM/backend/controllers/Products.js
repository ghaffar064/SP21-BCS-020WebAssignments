////////////////////////////////////////////
import {Product} from '../models/Products.js'
export const newArrivals = async(req,res)=>{
        

    let products  = await Product.find()
 
    let array = [];
    products.map((product)=>{
       if(product.newArrival===true)
       {
        array.push(product)
       }
  
    })
    
    return res.json({
        array
    })



}
export const menJackets = async(req,res)=>{
        

    let products  = await Product.find()
 
    let array = [];
    products.map((product)=>{
       if(product.men===true)
       {
        array.push(product)
       }
  
    })
    
    return res.json({
        array
    })



}

export const womenJackets = async(req,res)=>{
    let products  = await Product.find()
 
    let array = []; 
    products.map((product)=>{
       if(product.women===true)
       {
        array.push(product)
       }
  
    })
    
    return res.json({
        array
    })

}
export const NewProduct = async (req, res) => {
    const {ProductName,Price,description,newArrival,men,women} = req.body 
    const fileName = req.file.filename
let product = await Product.findOne({ProductName})
if(product){
    res.status(404).json({
        success:false,
        msg:"product already existed"
    })
}
else{
    await Product.create({
        ProductName,Price,description,newArrival,men,women, fileName
    
    })
    return res.redirect("/user/admin")
    // console.log(ProductName,Price,description,newArrival,men,women,fileName)
    // return res.status(201).json({
    //     success:true
    // })
 }
}
export const updatedProduct = async(req,res)=>{
    
    const {ProductName,Price,description} = req.body
    const product = await Product.findById(req.params.id);

    product.ProductName = ProductName
    product.Price = Price
    product.description = description
 
   await product.save()
    res.json({
        success:true,
        msg:"updated",
    })
}
export const ProductDelete = async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if (!product)
    {
       return res.status(404).json({
           success:false,
           msg:"task not found"
       })
    }   
    
    await product.deleteOne();
    res.status(200).json({
       success:true,
       msg:"task deleted"
    }) 
}

