'use strict';
const utils = require('../../utils');
const config = require('../../../../database/config');
const sql = require('mssql');
const getAllDateDoctors =  async(data) => {
    try {    
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('dates');
        const eventsList = await pool.request()
                            .input('idEspecialidad', sql.Int, data.idEspecialidad)
                            .input('periodo', sql.Int, data.periodo)
                            .input('sede', sql.VarChar, data.sede)
                            .query(sqlQueries.datesForAllDoctos);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
const getOneDateDoctors = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('dates');
        const eventsList = await pool.request()
                            .input('idMedico', sql.Int, data.idMedico)
                            .input('idEspecialidad', sql.Int, data.idEspecialidad)
                            .input('periodo', sql.Int, data.periodo)
                            .input('sede', sql.VarChar, data.sede)
                            .query(sqlQueries.datesForOneDoctors);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllDateDoctors,
    getOneDateDoctors

}