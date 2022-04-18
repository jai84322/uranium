const express = require('express');
const router = express.Router();

const allcontroller= require("../controllers/allcontroller")


router.post("/batches", allcontroller.createBatch  )

router.post('/developers', allcontroller.createDeveloper )

router.get('/scholarshipDevelopers', allcontroller.scholarshipDevelopers )

router.get('/getDevelopers', allcontroller.getDevelopers )


module.exports = router;