'use strict';

const eventData = require('../../data/events/dates');
var moment = require("moment");

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
        var fechaactual0 = moment().format("YYYYMM");
        var fechaactual1 = moment().add(1,'m').format("YYYYMM");
        var fechaactual2 = moment().add(2,'m').format("YYYYMM");
        
        for(var i=0;i < 3;i++){
            
            const eventlist = await eventData.getOneDateDoctors(data);
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