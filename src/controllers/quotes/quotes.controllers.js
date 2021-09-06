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
const getCitasReservadas = async (req, res, next) => {
    try {
        const fecha = req.params.fecha;
        const idPaciente = req.params.idPaciente;
        const event = await eventData.getCitasReservadas(fecha,idPaciente);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const registerAppointment = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.createAppointment(data);
        if(insert.error === 0){
            const citasmedicos= await eventData.getMedicoCitaOne(data.idPaciente);
            return res.status(200).json({
                success: 1,
                data: citasmedicos,
              });
        }else{
            return res.status(200).json({
                success: 0,
                data: "",
              });
        }
       
    } catch (error) {
        return res.status(400).json({
            success: 0,
            data: error.message,
          });
       // res.status(400).send(error.message);
    }
  }

  const calcelDate = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.cancelDate(data);
        return res.status(200).json({
                success: 1,
                data: insert,
        });
    } catch (error) {
        return res.status(400).json({
            success: 0,
            data: error.message,
          });
       // res.status(400).send(error.message);
    }
  }
module.exports = {
    getHistorialCitas,
    getCitasReservadas,
    registerAppointment,
    calcelDate
}