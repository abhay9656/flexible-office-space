const express =require('express')
const userRouter=require('./routers/userRouter')
const spaceRouter=require('./routers/spaceRouter')
const feedbackRouter=require('./routers/feedbackRouter')
const utilRouter=require('./routers/utils')
const bookRouter=require('./routers/bookRouter')
const cors=require('cors');
const bookmodal = require('./models/bookmodal')
const app=express()
const port=5000

app.get('/',(req,res)=>{
    res.send("response form add")
})

app.use(cors({
    origin:['http://localhost:3000']
}))

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(express.json())

app.use('/user',userRouter)
app.use('/space',spaceRouter)
app.use('/util',utilRouter)
app.use('/feedback',feedbackRouter)
app.use('/booking',bookRouter)

app.use(express.static('./static/uploads'));

app.listen(port,()=>{console.log("server started");})