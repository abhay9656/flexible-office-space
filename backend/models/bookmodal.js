const { model, Schema } = require("../connection")
const mySchema = new Schema({
    space: { type: Schema.Types.ObjectId, ref: "spaces-collection" },
    user: { type: Schema.Types.ObjectId, ref: "sign" },
    date: { type: Date, require: true },
    time: { type: String, require: true },
    timef: { type: String, require: true },
    duration: { type: String, require: true },
    paymentDetails: Object,
    intentId: {type: String, unique: true},
    createdAt: {type: Date, default: Date.now}
})
module.exports = model('booking', mySchema);