const mongoose = require("mongoose")
const hatSchema = mongoose.Schema({
costume_type: String,
size: String,
cost: {
    type: Number,
    required: true,
    min: 10, 
    max: 700,
  }
})
module.exports = mongoose.model("Hats",
hatSchema)