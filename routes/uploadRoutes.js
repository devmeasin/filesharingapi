const router = require('express').Router();
const uploadController  = require('../controller/uploadController');

router.post('/', uploadController);

module.exports = router;