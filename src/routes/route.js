const express = require('express');
const router = express.Router();

const allcontroller = require('../controllers/allcontroller')

router.post("/createUser", allcontroller.createUser)

router.get("/getUser", allcontroller.getUser)

router.post('/update', allcontroller.updateUser)

module.exports = router;  