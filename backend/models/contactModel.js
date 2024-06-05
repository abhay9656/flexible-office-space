const {model,Schema}=require('../connection')
const myschema=new Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    subject:{type:String,require:true},
    message:{type:String,require:true}
})

module.exports =model('contact',myschema)