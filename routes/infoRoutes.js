const router = require('express').Router();
const infoController = require('../controller/infoController');

router.get('/:uuid', infoController);

module.exports = router;