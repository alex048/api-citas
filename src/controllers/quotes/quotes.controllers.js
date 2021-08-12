'use strict';

const eventData = require('../../data/events/quotes');
  
const getHistorialCitas = async (req, res, next) => {
    try {
        const idPaciente = req.params.idPaciente;
        const event = await eventData.getHistorialCitas(idPaciente);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getHistorialCitas
}