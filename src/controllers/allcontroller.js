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




module.exports.createBatch = createBatch
module.exports.createDeveloper = createDeveloper