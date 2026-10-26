import express from "express";
import { addProduct, deleteProduct, getAProduct, getProduct, updateProduct } from "../controler/productControler.js";

const router =express.Router()

router.post("/add",addProduct)
router.get("/get", getProduct)
router.get("/getId/:id",getAProduct)
router.delete("/deleteId/:id",deleteProduct)
router.put("/update/:id",updateProduct)

export default router