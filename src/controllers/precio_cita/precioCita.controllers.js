'use strict';

const eventData = require('../../data/events/precio_cita');

const getPrecioCita = async (req, res, next) => {
    try {
        const data ={
            sede:req.params.sede,
            tipoPaciente:req.params.tipoPaciente,
            idTipoPrograma:req.params.idTipoPrograma
        }
        const eventlist = await eventData.getPrecioCita(data);
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getPrecioCita
}