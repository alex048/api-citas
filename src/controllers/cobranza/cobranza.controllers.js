'use strict';

const eventData = require('../../data/events/cobranza-citas');


const cobranza = async (req, res, next) => {
    try {
        const data = req.body;
        const eventlist = await eventData.cobranza(data);
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    cobranza
}