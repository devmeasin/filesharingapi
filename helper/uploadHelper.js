const multer = require('multer');
const path = require('path');


let storage = multer.diskStorage({
    destination : (req , file , cb) => cb(null , 'uploads/'),
    filename :  (req , file , cb) => {
        let uniqName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;

        cb(null , uniqName);
    }
});

let upload = multer({
    storage,
    limit: {
        fileSize : 1000000 * 100
    }
}).single('uploadFile');



module.exports = upload;