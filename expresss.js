const express=require('express')
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded());

app.use('/addprod',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><br><input type="number" name="size"><br><button type="submit">Add book</button></form>')
});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
});

app.use('/',(req,res,next)=>{
    res.send('<h1>Welecome</h1>')
});


app.listen(4000)