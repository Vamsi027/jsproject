const express=require('express')
const router=express.Router();
const productsController=require('../controllers/products')


router.get('/',productsController.getContactUs);

router.post('/',productsController.postContactUs);

module.exports=router;