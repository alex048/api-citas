'use strict';

const eventData = require('../../data/events/dues');

const getCoutosPaid = async (req, res, next) => {
    try {
        const documento = req.params.documento;
        const event = await eventData.getCoutosPaid(documento);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getCoutosPending = async (req, res, next) => {
    try {
        const documento = req.params.documento;
        const event = await eventData.getCoutosPending(documento);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getCoutosPaid,
    getCoutosPending
}