const express=require('express')
const path=require('path')
const router=express.Router();
const rootDir=require('../util/path')


router.get('/addprod',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','addproduct.html'))
});

router.post('/addprod',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop')
});

module.exports=router;