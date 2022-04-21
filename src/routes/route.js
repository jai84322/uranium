const express = require('express');
const router = express.Router();

const callFunction = require('../controllers/allcontroller')
const callMiddleware = require('../middlewares/allmiddlewares')




router.post('/createProduct', callFunction.createProduct)

router.post('/createUser', callMiddleware.mid1, callFunction.createUser)

router.post('/createOrder', callMiddleware.mid1, callFunction.createOrder)


module.exports = router;  