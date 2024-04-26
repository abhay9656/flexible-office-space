const express =require('express')
const userRouter=require('./routers/userRouter')
const app=express()
const port=5000

app.get('/',(req,res)=>{
    res.send("response form add")
})

app.use('/sign',userRouter)

app.get('/add',(req,res)=>{res.send("response from add")})

app.listen(port,()=>{console.log("server started");})