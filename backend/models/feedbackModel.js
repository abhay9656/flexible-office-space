const {model,Schema}=require('../connection')
const myschema=new Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    comment:{type:String,require:true}
})

module.exports =model('feedback',myschema)