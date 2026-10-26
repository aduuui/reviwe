import productModel from "../model/product.js"




export const addProduct = async(req,res)=>{
    try {
        console.log(req.body);
        
        const {name,price,description,catagory} = req.body
        if (!name||!price||!description||!catagory){
            return res.json({
                message : "fields are missing"
            })
        }
        const productData= await productModel.create({name,price,description,catagory})
        if(!productData){
            return res.json({
            
                message : "data not added"
            })
        }
        res.json({
            message:"products added succesfully",
            data :productData.name
        })
    } catch (error) {
        res.json({
            message: "somthing went wrong",
            error : error.message
        })
    }
}






export const getProduct = async(req,res)=>{
    try {
        const allProduct = await productModel.find()
        if(!allProduct){
            return res.json({
                message : "product not found"
            })
        }
        res.json({
            message :"all employee found",
            data :allProduct
        })
    } catch (error) {
        res.json({
            message :"somthing went wrong",
            error : error.message
        })
    }
}






export const getAProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const ProductData = await productModel.findById(id)
        if(!ProductData){
            return res.json({
                message : "product not found"
            })
            
        }
        res.json({
            message : "product found",
            data : ProductData
        })
    } catch (error) {
        res.json({
            message : "somthing went wrong",
            error :error.message
        })
    }
}









export const deleteProduct = async(req,res)=>{
    try {
        const{id} = req.params
        const deletedProduct = await productModel.findByIdAndDelete(id)
        if(!deletedProduct){
            return res.json({
                message : "product not found"

            })
        }
        res.json({
            message : "product deleted",
            data : deletedProduct.name
        })
    } catch (error) {
        res.json({
            message : "somthing went wrong",
            error : error.message
        })
    }
}




export const updateProduct = async(req,res) =>{
    try {
        const {id} = req.params
        const updatedData = await productModel.findByIdAndUpdate(id,req.body,{
            new : true,
            runValidators : true
         
        })
        if(!updatedData){
           return res.json({
            message : "updation failed"

           }) 
        }
        res.json({
            message :"updated succesfully",
            data : updatedData.name
        })
    } catch (error) {
        res.json({
            message : "somthing went wrong",
            error : error.message
        })
    }
}