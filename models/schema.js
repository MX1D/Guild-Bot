const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    uuid: { type: String, require: true, unquie: true },
    banned: { type: String, require: true },
    reps: { type: Number, default: 0 },
    warns: { type: Number, default: 0 }
})

const model = mongoose.model("schema", schema);

module.exports = model;