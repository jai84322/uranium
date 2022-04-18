const mongoose = require('mongoose');

const batchSchema = new mongoose.schema ({

    name : String,
    size: Number,
    program: {
        type : String,
        enum: ["backend", "frontend"]
    },
},{timestamps: true});

module.exports = mongoose.model('batch', batchSchema)