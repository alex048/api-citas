'use strict';

const eventData = require('../../../data/events/type_document');


const getTypeDocument = async (req, res, next) => {
    try {
        const event = await eventData.getTypeDocument();
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getTypeDocument
}