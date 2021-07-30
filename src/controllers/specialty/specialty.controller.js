'use strict';

const eventData = require('../../data/events/specialties');


const getSpecialty = async (req, res, next) => {
    try {
        const sucursal = req.params.sucursal;
        const eventlist = await eventData.getSpecialties(sucursal);
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getSpecialty
}