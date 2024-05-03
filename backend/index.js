const express =require('express')
const userRouter=require('./routers/userRouter')
const spaceRouter=require('./routers/spaceRouter')
const feedbackRouter=require('./routers/feedbackRouter')
const utilRouter=require('./routers/utils')
const cors=require('cors');
const app=express()
const port=5000

app.get('/',(req,res)=>{
    res.send("response form add")
})

app.use(cors({
    origin:['http://localhost:3000']
}))

app.use(express.json())

app.use('/user',userRouter)
app.use('/space',spaceRouter)
app.use('/util',utilRouter)
app.use('/feedback',feedbackRouter)

app.use(express.static('./static/uploads'));

app.listen(port,()=>{console.log("server started");})