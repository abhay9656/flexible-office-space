const express =require('express')
const userRouter=require('./routers/userRouter')
const spaceRouter=require('./routers/spaceRouter')
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

app.get('/add',(req,res)=>{res.send("response from add")})

app.listen(port,()=>{console.log("server started");})