'use strict';

const eventData = require('../../data/events/doctor');


const getMedicoEspecialidad = async (req, res, next) => {
    try {
        const codigo = req.params.codigo;
        const sucursal = req.params.sucursal;
        const event = await eventData.getMedicoEspecialidad(sucursal,codigo);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getMedicoEspecialidad
}