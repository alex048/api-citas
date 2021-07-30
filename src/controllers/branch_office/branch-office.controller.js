'use strict';

const eventData = require('../../data/events/branch_office');


const getSucursal = async (req, res, next) => {
    try {

        const eventlist = await eventData.getSucursal();
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getSucursal
}