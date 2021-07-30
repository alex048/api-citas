'use strict';

const eventData = require('../../data/events/portal_web');


const getCIE10 = async (req, res, next) => {
    try {

        const eventlist = await eventData.getCIE10();
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getCIE10
}