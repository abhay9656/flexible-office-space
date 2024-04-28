const {model,Schema}=require("../connection")
const myschema=new Schema({
    area:{type:String,require:true},
    duration:{type:String,unique:true},
    price:{type:String,unique:true},
    date:{type:Date,default:Date.now},
})
module.exports=model('space',myschema)