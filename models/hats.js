const mongoose = require("mongoose")
const hatSchema = mongoose.Schema({
costume_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("Hats",
hatSchema)