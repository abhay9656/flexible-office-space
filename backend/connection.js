const mongoose =require ('mongooose')
const url="mongodb+srv://abhayJS:abhayMern@cluster0.6kxwugb.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0";

//asynchronus function
mongoose.connect(url)
.then((result) => {
 console.log('connected to db');   
}).catch((err) => {
    console.log(err);
});