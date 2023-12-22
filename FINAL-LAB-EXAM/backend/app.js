import express from "express";
import userRouter from './routes/Users.js'
import productRouter from './routes/Products.js'
import adminRouter from './routes/Admin.js'
import calculateRouter from './routes/Calculator.js'

import cors from 'cors'       
import path from "path";



const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.set("view engine" ,"ejs")
app.set("views",path.resolve("./views"))
app.use(express.json())
app.use("/user",adminRouter)
app.use("/products",productRouter)
app.use("/users",userRouter)
app.use("/final",calculateRouter)

export default app;