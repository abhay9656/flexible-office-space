const { model, Schema } = require("../connection")
const mySchema = new Schema({
    space: { type: Schema.Types.ObjectId, ref: "space" },
    date:{type:Date,require:true},
    time:{type:Date,require:true},
    duration:{type:String,require:true}

})
module.exports=model('booking',mySchema);