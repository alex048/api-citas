'use strict';

const eventData = require('../../../data/events/users');


const getEventCorrelativo = async (req, res, next) => {
    try {
        const event = await eventData.getCorrelativoIDPersona();
        res.send(event[0]);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateCorrelativo = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.updateCorrelativo(data);
        res.send(insert);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
  }
module.exports = {
    getEventCorrelativo,
    updateCorrelativo
}