const batchModel = require("../models/batchModel")
const developerModel = require("../models/developerModel")

const createBatch = async function (req, res) {
    let data = req.body
    let savedBatch = await batchModel.create (data)
    res.send ({msg : savedBatch})
}


const createDeveloper = async function (req, res) {
    let data = req.body
    let savedDeveloper = await developerModel.create(data)
    res.send ({msg : savedDeveloper})
}

const scholarshipDevelopers = async function (req, res) {
    let savedData = await developerModel.find({ $and: [ {gender: "female"}, { percentage: {$gte:"70"}} ] })
    res.send({msg: savedData})
}


module.exports.createBatch = createBatch
module.exports.createDeveloper = createDeveloper
module.exports.scholarshipDevelopers = scholarshipDevelopers