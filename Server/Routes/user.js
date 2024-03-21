const expres = require('express');
const router = expres.Router();
const {Login, SignUp } = require('./../controllers/user')
const product = require('./../controllers/Product')
const {getOrders , placeOrder} = require('./../controllers/Order')

router.post('/login',Login);
router.post('/signup',SignUp);
router.get('/data',product);
router.post('/orders',getOrders);
router.post('/cart',placeOrder);

module.exports = router;