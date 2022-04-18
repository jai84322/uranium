const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.schema ({

    name : String,
    gender: {
        type : String,
        enum: ["male", "female", "other"]
    },
    percentage: Number,
    batch : {
        type : ObjectId,
        ref : "batch"
    }
},{timestamps: true});

module.exports = mongoose.model('developer', developerSchema)