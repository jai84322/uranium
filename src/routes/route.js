const express = require('express');
const router = express.Router();

const allcontroller = require('../controllers/allcontroller')

router.post("/createUser", allcontroller.createUser)

router.get("/getUser", allcontroller.getUser)



module.exports = router;  