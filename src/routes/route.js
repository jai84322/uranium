const express = require('express');
const router = express.Router();

const allcontroller= require("../controllers/allcontroller")
const firstMiddleware = require ("../middlewares/firstMiddleware")


router.get("/checkAPI",  firstMiddleware.mid1, allcontroller.timeIpRoute)


module.exports = router;