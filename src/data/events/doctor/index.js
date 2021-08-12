'use strict';
const utils = require('../../utils');
const config = require('../../../../database/config');
const sql = require('mssql');

const getListMedicos = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('doctor');
        const eventsList = await pool.request().query(sqlQueries.eventListDoctor);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
const getMedicoEspecialidad = async(sucursal,codigo) => {
    console.log(sucursal)
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('doctor');
        const event = await pool.request()
                            .input('sucursal', sql.NVarChar, sucursal)
                            .input('codigoEspecialidad', sql.Int, codigo)
                            .query(sqlQueries.eventGetDoctor);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const getHorarioMedicoEspecialidad = async(periodo,idmedico) => {
   // console.log(sucursal)
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('doctor');
        const event = await pool.request()
                            .input('Periodo', sql.NVarChar, periodo)
                            .input('idMedico', sql.Int, idmedico)
                            .query(sqlQueries.eventHorarioDoctor);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const getHorarioMedicoFechaHora = async(fecha,hora) => {
    // console.log(sucursal)
     try {
         let pool = await sql.connect(config.sql);
         const sqlQueries = await utils.loadSqlQueries('doctor');
         const event = await pool.request()
                             .input('Fecha', sql.DateTime, fecha)
                             .input('Hora', sql.DateTime, hora)
                             .query(sqlQueries.envetGetListDorctorHorario);
         return event.recordset;
     } catch (error) {
         return error.message;
     }
 }

module.exports = {
    getListMedicos,
    getMedicoEspecialidad,
    getHorarioMedicoEspecialidad,
    getHorarioMedicoFechaHora
}