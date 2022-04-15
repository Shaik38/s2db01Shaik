const mongoose = require("mongoose")
const tables = mongoose.Schema({
table_color: String,
table_size: String,
table_num: Number
})
module.exports = mongoose.model("tables",
tables)