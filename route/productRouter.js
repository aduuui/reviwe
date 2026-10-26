import express from "express";
import { addProduct } from "../controler/productControler.js";

const router =express.Router()

router.post("/add",addProduct)
export default router