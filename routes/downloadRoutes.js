const router = require('express').Router();
const  downloadController = require('../controller/downloadController');


router.get('/download/:uuid', downloadController);

module.exports = router;