const mongoose = require("mongoose")
const tableSchema = mongoose.Schema({
table_color: String,
table_size: String,
table_num: Number
})
module.exports = mongoose.model("table",
tableSchema)