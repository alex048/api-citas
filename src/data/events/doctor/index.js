'use strict';
const utils = require('../../utils');
const config = require('../../../../database/config');
const querys = require('./query');
const sql = require('mssql');

const getListMedicos = async () => {
    try {
        let pool = await sql.connect(config.sql);
       // const sqlQueries = await utils.loadSqlQueries('doctor');
        const eventsList = await pool.request().query(querys.eventListDoctor);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
const getMedicoEspecialidad = async(sucursal,codigo) => {
    console.log(sucursal)
    try {
        let pool = await sql.connect(config.sql);
       // const sqlQueries = await utils.loadSqlQueries('doctor');
        const event = await pool.request()
                            .input('sucursal', sql.NVarChar, sucursal)
                            .input('codigoEspecialidad', sql.Int, codigo)
                            .query(querys.eventGetDoctor);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const getHorarioMedicoEspecialidad = async(data) => {
   // console.log(sucursal)
    try {
        let pool = await sql.connect(config.sql);
       // const sqlQueries = await utils.loadSqlQueries('doctor');
        const event = await pool.request()
                            .input('idmedico', sql.Int, data.idmedico)
                            .input('idespecialidad', sql.Int, data.idespecialidad)
                            .input('fecha', sql.VarChar, data.fecha)
                            .input('sucursal', sql.VarChar, data.sucursal)
                            .query(querys.eventHorarioDoctor);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const getHorarioMedicoFechaHora = async(idespecialidad,fecha,sucursal) => {
    // console.log(sucursal)
     try {
         let pool = await sql.connect(config.sql);
        // const sqlQueries = await utils.loadSqlQueries('doctor');
         const event = await pool.request()
                            .input('idespecialidad',sql.Int,idespecialidad)
                             .input('fecha', sql.VarChar, fecha)
                             .input('sucursal', sql.VarChar, sucursal)
                             .query(querys.envetGetListDorctorHorario);
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