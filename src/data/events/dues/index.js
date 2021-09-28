'use strict';
const utils = require('../../utils');
const config = require('../../../../database/config');
const sql = require('mssql');

const getCoutosPaid = async (documento) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('dues');
        const eventsList = await pool.request()
                                .input('documento', sql.VarChar, documento)
                                .query(sqlQueries.eventCoutospaid);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getCoutosPending = async (documento) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('dues');
        const eventsList = await pool.request()
                                .input('documento', sql.VarChar, documento)
                                .query(sqlQueries.eventCoutospending);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getCoutosPaid,
getCoutosPending
}