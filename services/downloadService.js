require('dotenv').config();
const File = require('../database/models/uploadModel');
const {uploadMessage} = require('../constants');

// file Download/Get Service

let downloadService = async (req) => {

    try {
        
        let file = await File.findOne({uuid : req.params.uuid} );
        if(!file) {
            throw new Error(uploadMessage.NotFound);
        }
        return `${__dirname}/../${file.path}`;

    } catch (err) {

        console.log(
            "Something went wrong From fileDownload : File Download",
            err.message
        );
        throw new Error(err.message);
    }
}


module.exports = downloadService;