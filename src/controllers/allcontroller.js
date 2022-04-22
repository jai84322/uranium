const { getMaxListeners } = require('../models/testingModel')
const testingModel = require('../models/testingModel')

const createUser = async function (req, res) {
    let data = req.body
    let savedData = await testingModel.create(data)
    res.send ({msg: savedData})
}

module.exports.createUser = createUser

const getUser = async function (req, res) {
    let updateName = await testingModel.updateMany({name: ""}, {$set: {name: "abcd"}}, {new:true}).find()
    res.send({msg: updateName})
    // let data = req.params.id
    // let savedData = await testingModel.findOneAndUpdate({_id : data}, {$set: {name: "sagar"}}, {new:true})
    // res.send({msg: savedData})
} 

module.exports.getUser = getUser 

const updateUser = async function (req, res) {
    let data = req.body.name
    let savedData = await testingModel.findOneAndUpdate({name: data}, {$set: {age: 50}}, {new:true})
    res.send({msg: savedData})
}

module.exports.updateUser = updateUser