const Router = require('express')
const router = new Router();

const getData = require('../controller/data.controller')

router.get('/data', getData)

module.exports = router