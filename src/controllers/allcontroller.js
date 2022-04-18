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

const getDevelopers = async function (req, res) {
    let data = req.query.program
    let savedData = await batchModel.find({ program : data }).select({_id:1})
    let programId = savedData[0]._id
    let percent = req.query.percentage
    let developers = await developerModel.find({ $and: [{batch : programId}, {percentage : {$gte:percent}} ]}).populate('batch')
    res.send({msg:developers})
}


module.exports.createBatch = createBatch
module.exports.createDeveloper = createDeveloper
module.exports.scholarshipDevelopers = scholarshipDevelopers
module.exports.getDevelopers = getDevelopers