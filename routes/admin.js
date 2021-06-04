const express=require('express')

const router=express.Router();


router.get('/addprod',(req,res,next)=>{
    res.send('<form action="/admin/addprod" method="POST"><input type="text" name="title"><br><input type="number" name="size"><br><button type="submit">Add book</button></form>')
});

router.post('/addprod',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop')
});

module.exports=router;