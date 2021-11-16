'use strict';
// const utils = require('../../utils');
const config = require('../../../../database/config');
const query = require('./query');
const sql = require('mssql');

const cobranza = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        // const sqlQueries = await utils.loadSqlQueries('branch_office');
        const eventsList = await pool.request()
                            .input('IdCita', sql.Int, data.idCita)
                            .input('TipoPaciente', sql.Int, data.tipoPaciente)
                            .input('IdTipoPrograma', sql.Int, data.idTipoPrograma)
                            .input('IdPrograma', sql.Int, data.idPrograma)
                            .input('IndBolFac', sql.Int, data.indBolFac)
                            .input('IdClienteFac', sql.Int, data.idClienteFac)
                            .input('ImpCita', sql.Int, data.impCita)
                            .input('TipoTarjeta', sql.NVarChar, data.tipoTarjeta)
                            .input('NumeroTarjeta', sql.NVarChar, data.numeroTarjeta)
                            .input('Usuario', sql.NVarChar, data.usuario)
                            .query(query.cobranza);
         console.log(eventsList)
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    cobranza
}