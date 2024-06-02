const {model,Schema}=require('../connection')
const myschema=new Schema({
    
    subject:{type:String,require:true},
    message:{type:String,require:true}
})

module.exports =model('contact',myschema)