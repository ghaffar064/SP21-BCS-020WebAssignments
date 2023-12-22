import express from "express";
import {calculation}from  '../controllers/Calculator.js'
const router = express.Router()
router.post("/calculator",calculation)


export default router