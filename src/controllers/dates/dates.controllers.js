'use strict';

const eventData = require('../../data/events/dates');
var moment = require("moment");

const getAllDateDoctors = async (req, res, next) => {
    try {
        var fechaactual0 = moment().format("YYYYMM");
        //var fechaactual1 = moment().add(1, 'month').format("YYYYMM");
        const data ={
            idEspecialidad:req.params.idEspecialidad,
            periodo:fechaactual0,
            sede:req.params.sede
        }
        /*const data2 ={
            idEspecialidad:req.params.idEspecialidad,
            periodo:fechaactual1,
            sede:req.params.sede
        }
        let fechas = [];
        for(var i=0;i < 2;i++){
            if(i===0){
                const eventlist = await eventData.getAllDateDoctors(data);
                fechas.push(eventlist);
              }
              if (i===1){ 
                const eventlist = await eventData.getAllDateDoctors(data2);
                fechas.push(eventlist);
              }
            
        } */
        const eventlist = await eventData.getAllDateDoctors(data);
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getOneDateDoctors = async (req, res, next) => {
    try {
        var fechaactual0 = moment().format("YYYYMM");
       // var fechaactual1 = moment().add(1, 'month').format("YYYYMM");
        const data ={
            idMedico:req.params.idMedico,
            idEspecialidad:req.params.idEspecialidad,
            periodo:fechaactual0,
            sede:req.params.sede,
        }
        /*const data2 ={
            idMedico:req.params.idMedico,
            idEspecialidad:req.params.idEspecialidad,
            periodo:fechaactual1,
            sede:req.params.sede,
        }
     
        let fechas = [];
        for(var i=0;i < 2;i++){
            if(i===0){
                const eventlist = await eventData.getOneDateDoctors(data);
                fechas.push(eventlist);
              }
              if (i===1){ 
                const eventlist = await eventData.getOneDateDoctors(data2);
                fechas.push(eventlist);
              }
            
        } */
        const eventlist = await eventData.getOneDateDoctors(data);
        res.send(fechas[0]);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getAllDateDoctors,
    getOneDateDoctors
}