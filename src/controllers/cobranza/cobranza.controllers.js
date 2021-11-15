'use strict';

const eventData = require('../../data/events/cobranza-citas');


const cobranza = async (req, res, next) => {
    try {

        const eventlist = await eventData.cobranza();
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    cobranza
}