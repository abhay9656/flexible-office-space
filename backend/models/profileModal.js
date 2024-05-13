const {model,Schema}=require('../connection')
const userSchema=new Schema({
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    image:{type:String},
    email:{type:String,require:true},
    password:{type:String,require:true},
    confirmPassword:{type:String,require:true},
    address:{type:String},
    phone:{type:String,require:true},
    checkbox:{type:Boolean},
    bio:{type:String},
})
module.exports =model('profile',userSchema);