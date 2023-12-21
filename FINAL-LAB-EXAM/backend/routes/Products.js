import express from 'express'
import { newArrivals,menJackets,womenJackets,NewProduct,updatedProduct,ProductDelete } from '../controllers/Products.js'
import { isAuthenticated } from '../middlewares/auth.js'
import { upload } from '../middlewares/multer.js'

const router = express.Router()
router.get("/newArrivals",newArrivals)
router.get("/MenJackets",menJackets)
router.get("/WomenJackets",womenJackets)
router.post("/addNewProduct",upload.single("fileName"),NewProduct)
router.put("/updateProduct/:id",updatedProduct)
router.delete("/deleteProduct/:id",ProductDelete)
// router.post("/proceedToCheckOut",isAuthenticated,proceedToCheckOut)
export default router