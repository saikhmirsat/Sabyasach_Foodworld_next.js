const mongoose = require('mongoose')
require('dotenv').config();

const connection = mongoose.connect("mongodb+srv://sabyasachifoodworld:sabyasachifoodworld@cluster0.w3pscaf.mongodb.net/?retryWrites=true&w=majority")

module.exports = {
    connection
}