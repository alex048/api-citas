'use strict';
const utils = require('../../utils');
const config = require('../../../../database/config');
const sql = require('mssql');

const getTerminosCondiciones = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('terms_conditions');
        const eventsList = await pool.request().query(sqlQueries.eventTermsConditions);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getTerminosCondiciones
}