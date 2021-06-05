const express=require('express')
const router=express.Router();

const productsController=require('../controllers/products')

router.get('/addprod',productsController.getAddProduct);

router.post('/addprod',productsController.postAddProduct);

module.exports=router;