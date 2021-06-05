const rootDir=require('../util/path')
const path=require('path')

exports.getAddProduct=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','addproduct.html'))
}

exports.postAddProduct=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop')
}

exports.getProducts=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'))
}

exports.getContactUs=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))
}

exports.postContactUs=(req,res,next)=>{
    res.send('<h1>Submitted Sucessfully.We will contact you in few minutes</h1>')
}