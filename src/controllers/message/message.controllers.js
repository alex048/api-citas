'use strict';

const eventData = require('../../data/events/message');


const getMessage = async (req, res, next) => {
    try {

        const eventlist = await eventData.getMessage();
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getMessage
}