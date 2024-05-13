const express =require('express')
const userRouter=require('./routers/userRouter')
const spaceRouter=require('./routers/spaceRouter')
const feedbackRouter=require('./routers/feedbackRouter')
const profileRouter=require('./routers/profileRouter')
const utilRouter=require('./routers/utils')
const bookRouter=require('./routers/bookRouter')
const cors=require('cors');
const bookmodal = require('./models/bookmodal')
const app=express()
const port=5000;

require('dotenv').config();

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
app.use('/profile',profileRouter)

app.post('/create-payment-intent', async (req, res) => {
    const { amount, customerData } = req.body;
    // const { name, address } = customerData;
    console.log(amount);
    const customer = await stripe.customers.create(customerData);
    console.log(customer.id);
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'inr',
      description: 'Payment Description',
      customer : customer.id
    });
    res.json({
      clientSecret: paymentIntent.client_secret
    });
  })

  app.post('/retrieve-payment-intent', async (req, res) => {
    const { paymentIntentId } = req.body;
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    res.json(paymentIntent);
  });


app.use(express.static('./static/uploads'));

app.listen(port,()=>{console.log("server started");})