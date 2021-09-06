'use strict';
const utils = require('../../utils');
const config = require('../../../../database/config');
const sql = require('mssql');

const getHistorialCitas = async(idPaciente) => {
    // console.log(sucursal)
     try {
         let pool = await sql.connect(config.sql);
         const sqlQueries = await utils.loadSqlQueries('quotes');
         const event = await pool.request()
                             .input('idPaciente', sql.Int, idPaciente)
                             .query(sqlQueries.eventListQuotes);
         return event.recordset;
     } catch (error) {
         return error.message;
     }
 }
 const getCitasReservadas = async(fecha,idPaciente) => {
    // console.log(sucursal)
     try {
         let pool = await sql.connect(config.sql);
         const sqlQueries = await utils.loadSqlQueries('quotes');
         const event = await pool.request()
                             .input('fechaActual', sql.VarChar, fecha)
                             .input('IdPaciente', sql.Int, idPaciente)
                             .query(sqlQueries.eventBookedAppointments);
         return event.recordset;
     } catch (error) {
         return error.message;
     }
 }

 const createAppointment = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('quotes');
        const insertEvent = await pool.request()
                            .input('IdHorario', sql.Int, data.IdHorario)
                            .input('idPaciente', sql.Int, data.idPaciente)
                            .input('fechaCita', sql.NVarChar, data.fechaCita)
                            .input('usuario', sql.NVarChar, data.usuario)
                            .query(sqlQueries.eventAppointmentRegister);
        return insertEvent.recordset[0];
    } catch (error) {
        return error.message;
    }
};
const getMedicoCitaOne = async(idPaciente) => {
    // console.log(sucursal)
     try {
         let pool = await sql.connect(config.sql);
         const sqlQueries = await utils.loadSqlQueries('quotes');
         const event = await pool.request()
                             .input('idPaciente', sql.Int, idPaciente)
                             .query(sqlQueries.eventDoctorCita);
         return event.recordset[0];
     } catch (error) {
         return error.message;
     }
 }

 const cancelDate = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('quotes');
        const insertEvent = await pool.request()
                            .input('idCita', sql.Int, data.idCita)
                            .input('usuario', sql.NVarChar, data.usuario)
                            .query(sqlQueries.eventDeleteQuotes);
        return insertEvent.recordset[0];
    } catch (error) {
        return error.message;
    }
};
module.exports = {
    getHistorialCitas,
    getCitasReservadas,
    createAppointment,
    getMedicoCitaOne,
    cancelDate
}