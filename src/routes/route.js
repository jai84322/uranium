const express = require('express');
const router = express.Router();

const allcontroller= require("../controllers/allcontroller")



router.post("/batches", allcontroller.createBatch  )

router.post('/developers', allcontroller.createDeveloper )


module.exports = router;