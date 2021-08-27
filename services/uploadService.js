require('dotenv').config();
const File = require('../database/models/uploadModel');
const upload = require('../helper/uploadHelper');
const {v4: uuid4} = require('uuid');

// File Upload Service
let uploadService = async (req, res, cb) => {

    try {

        upload(req, res, async (err) => {

            if (!req.file) {
                return {error: "File Not Found!"}
            }

            if (err) {
                console.log(
                    "Something went wrong From uploadService : File Upload",
                    err.message
                );
                throw new Error(err.message);
            }

            let file = new File(
                {filename: req.file.filename, path: req.file.path, size: req.file.size, uuid: uuid4()}
            )
            let response = await file.save();

            cb(response);
            // return {file: `${process.env.BaseUrl}/files/${response.uuid}`}

        });

    } catch (err) {

        console.log(
            "Something went wrong From uploadService : File Upload",
            err.message
        );
        throw new Error(err.message);
    }
}

module.exports = uploadService;