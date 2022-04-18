const express = require('express');
const router = express.Router();

const allcontroller= require("../controllers/allcontroller")


router.post("/batches", allcontroller.createBatch  )

router.post('/developers', allcontroller.createDeveloper )

router.get('/scholarshipDevelopers', allcontroller.scholarshipDevelopers )


module.exports = router;