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