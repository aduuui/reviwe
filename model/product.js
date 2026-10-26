import mongoose from "mongoose";


const productSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    catagory:{
        type :String,
        trim: true,
        required:true
    }

},
{
    timestamps:true
})
const productModel = mongoose.model("productModel",productSchema)
export default productModel