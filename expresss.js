const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
const contactRoutes=require('./routes/contactus')
const errorController=require('./controllers/errors')

const app=express();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)
app.use('/contactus',contactRoutes)

app.use(errorController.get404)


app.listen(4000)