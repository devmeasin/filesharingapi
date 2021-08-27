const services = require('../services');
const {defaultResponse, uploadMessage} = require('../constants');

// File Info Endpoint

let infoController = async (req, res) => {

    let response = {
        ...defaultResponse
    }

    try {
        let fileResponse = await services.infoService(req);
        response.status = 200;
        response.message = uploadMessage.Fetched;
        return res
            .status(response.status)
            .json(fileResponse);

    } catch (err) {
        response.message = `Error Form ${err.message}`;
    }

}

module.exports = infoController;