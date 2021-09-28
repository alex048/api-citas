'use strict';
const utils = require('../../utils');
const config = require('../../../../database/config');
const sql = require('mssql');

const getMessage = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('message');
        const eventsList = await pool.request().query(sqlQueries.eventMessage);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
const getSliderMessage = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('message');
        const eventsList = await pool.request().query(sqlQueries.eventSliderMessage);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getMessage,
    getSliderMessage
}