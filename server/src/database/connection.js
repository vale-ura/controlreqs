const mongoose = require('mongoose');

function connect(str) {
    return mongoose.connect(str, { useNewUrlParser: true });
}

function disconnect() {
    return mongoose.disconnect();
}

module.exports = {
    connect,
    disconnect
}