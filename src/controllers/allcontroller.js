const { getMaxListeners } = require('../models/testingModel')
const testingModel = require('../models/testingModel')

const createUser = async function (req, res) {
    let data = req.body
    let savedData = await testingModel.create(data)
    res.send ({msg: savedData})
}

module.exports.createUser = createUser

const getUser = async function (req, res) {

    let userId = await testingModel.findById( "6261aafbd56d5156499b3041" ).select({name:1, _id:0})
    res.send ({msg: userId})
}

module.exports.getUser = getUser 