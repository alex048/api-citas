'use strict';

const eventData = require('../../data/events/dates');


const getAllDateDoctors = async (req, res, next) => {
    try {
        const data ={
            idEspecialidad:req.params.idEspecialidad,
            periodo:req.params.periodo,
            sede:req.params.sede
        }
        const eventlist = await eventData.getAllDateDoctors(data);
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getOneDateDoctors = async (req, res, next) => {
    try {
        const data ={
            idMedico:req.params.idMedico,
            idEspecialidad:req.params.idEspecialidad,
            periodo:req.params.periodo,
            sede:req.params.sede,
        }
        const eventlist = await eventData.getOneDateDoctors(data);
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getAllDateDoctors,
    getOneDateDoctors
}