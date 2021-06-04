const express=require('express')
const path=require('path')
const router=express.Router();
const rootDir=require('../util/path')


router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))
});

router.post('/',(req,res,next)=>{
    res.send('<h1>Submitted Sucessfully.We will contact you in few minutes</h1>')
});

module.exports=router;