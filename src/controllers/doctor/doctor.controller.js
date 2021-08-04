'use strict';

const eventData = require('../../data/events/doctor');


const getListMedico = async (req, res, next) => {
    try {
        const event = await eventData.getListMedicos();
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
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
const getHorarioMedicoEspecialidad = async (req, res, next) => {
    try {
        const periodo = req.params.periodo;
        const idmedico = req.params.idmedico;
        const event = await eventData.getHorarioMedicoEspecialidad(periodo,idmedico);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getListMedico,
    getMedicoEspecialidad,
    getHorarioMedicoEspecialidad
}