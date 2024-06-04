const { model, Schema } = require("../connection")
const myschema = new Schema({
    name: { type: String, require: true },
    address: { type: String, require: true },
    area: { type: String, require: true },
    image: { type: String },
    price: { type: Number },
    date: { type: Date, default: Date.now },
    selectedFeatures:{type:[String],require:true}
})
module.exports = model('spaces-collection', myschema)