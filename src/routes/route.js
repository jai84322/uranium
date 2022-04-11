const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.post("/createUser", UserController.createBook  )

router.get("/getUsersData", UserController.getBookData )

module.exports = router;