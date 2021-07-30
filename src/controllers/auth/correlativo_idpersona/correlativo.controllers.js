'use strict';

const eventData = require('../../../data/events/users');


const getEventCorrelativo = async (req, res, next) => {
    try {
        const event = await eventData.getCorrelativoIDPersona();
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getEventCorrelativo
}