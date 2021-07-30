'use strict';

const eventData = require('../../data/events/terms_conditions');


const getTerminosCondiciones = async (req, res, next) => {
    try {
        const event = await eventData.getTerminosCondiciones();
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getTerminosCondiciones
}