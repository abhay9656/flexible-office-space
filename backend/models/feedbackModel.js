const {model,Schema,Types}=require('../connection')
const myschema=new Schema({
    name:{type:Types.objectId,ref:'name'},
    email:{type:String,require:true},
    comment:{type:String,require:true},
    createdAt: { type: Date, default: Date.now }
})

module.exports =model('feedback',myschema)