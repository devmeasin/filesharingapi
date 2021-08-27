const services = require('../services');
const {defaultResponse, uploadMessage} = require('../constants');

// File Download Endpoint

let downloadController = async (req, res) => {

    let response = {
        ...defaultResponse
    }

    try {
        let fileResponse = await services.downloadService(req);
        response.status = 200;
        response.message = uploadMessage.Download;
        return res
            .status(response.status)
            .download(fileResponse);

    } catch (err) {
        response.message = `Error Form ${err.message}`;
    }

}

module.exports = downloadController;