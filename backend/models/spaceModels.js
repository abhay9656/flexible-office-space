const {model,Schema}=require("../connection")
const myschema=new Schema({
    name:{type:String,require:true},
    address:{type:String,require:true},
    area:{type:String,require:true},
    image:{type:String,unique:true},
    price:{type:String,unique:true},
    date:{type:Date,default:Date.now},
})
module.exports=model('space',myschema)