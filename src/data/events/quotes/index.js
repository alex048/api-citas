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
                             .input('IdPaciente', sql.Int, idPaciente)
                             .query(sqlQueries.eventListQuotes);
         return event.recordset;
     } catch (error) {
         return error.message;
     }
 }

module.exports = {
    getHistorialCitas
}