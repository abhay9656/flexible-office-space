const { model, Schema } = require("../connection")
const myschema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: String,
    ConfirmPassword: String,
    address: { type: String, require: true },
    phone: { type: String, require: true },
    gender: { type: String, require: true },
    bio: { type: String, require: true },
    role: { type: String, default: "user" },
    image: { type: String },
    createdAt: { type: Date, default: Date.now }
})
module.exports = model('sign', myschema)