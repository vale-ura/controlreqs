const mongoose = require('mongoose');

const schema = mongoose.Schema({
    number: String,
    status: String,
    description: String
})

module.exports = schema;