const services = require('../services');
const {defaultResponse, uploadMessage} = require('../constants');

// File Upload Controller
let uploadController = async (req, res) => {

    let response = {
        ...defaultResponse
    }
    try {

        let cb = (value) => {
            response.body = {
                file: `${process.env.Base_Url}/files/${value.uuid}`
            }

            return res
                .status(response.status)
                .json(response);
        }
        await services.uploadService(req, res, cb);
        response.status = 200;
        response.message = uploadMessage.Upload;

    } catch (err) {
        response.message = `Error Form ${err.message}`;
    }

}

module.exports = uploadController;