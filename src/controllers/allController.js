const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")

const createAuthor = async function (req, res) {
    let data = req.body;
    let saveData = await authorModel.create(data);
    res.send({ msg: saveData });
}

const createPublisher = async function (req, res) {
    let data = req.body;
    let saveData = await publisherModel.create(data);
    res.send({ msg: saveData });
}

const createBook = async function (req, res) {
    let data = req.body;
    if (!data.author || !data.publisher)
        res.send({ msg: "Author ID/Publisher ID is required" })
        // else if (!ObjectId.isValid(data.author) || !ObjectId.isValid(data.publisher))
        // res.send({ msg: "The Author/Publisher is not present" })
    else {
        let saveData = await bookModel.create(data);
        res.send({ msg: saveData });
    }
}

const getBooks = async function (req, res) {
    let getData = await bookModel.find().populate('author').populate('publisher')
    res.send({ msg: getData })
}


const hardCover = async function(req, res){
    let data= req.params.id
    
    let publisherId= await publisherModel.findOne({id: data}).select({_id:1})
    
    let updateBook= await bookModel.updateMany({publisher: publisherId},{$set: {isHardCover: true}})

    let authorId= await authorModel.find({rating: {$gt: 3.5}})
    
    let updatePrice= await bookModel.updateMany({author: authorId},{$inc: {price: 10}})

    res.send({msg: updateBook, updatePrice})
}




module.exports.createAuthor = createAuthor;
module.exports.createBook = createBook;
module.exports.createPublisher = createPublisher;
module.exports.getBooks = getBooks;
module.exports.updateBook = hardCover;