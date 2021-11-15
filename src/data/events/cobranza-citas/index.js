'use strict';
// const utils = require('../../utils');
const config = require('../../../../database/config');
const query = require('./query');
const sql = require('mssql');

const cobranza = async () => {
    try {
        let pool = await sql.connect(config.sql);
        // const sqlQueries = await utils.loadSqlQueries('branch_office');
        const eventsList = await pool.request()
                            .input('IdCita', sql.Int, idCita)
                            .input('TipoPaciente', sql.Int, tipoPaciente)
                            .input('IdTipoPrograma', sql.Int, idTipoPrograma)
                            .input('IdPrograma', sql.Int, idPrograma)
                            .input('IndBolFac', sql.Int, indBolFac)
                            .input('IdClienteFac', sql.Int, idClienteFac)
                            .input('ImpCita', sql.Int, impCita)
                            .input('TipoTarjeta', sql.NVarChar, tipoTarjeta)
                            .input('NumeroTarjeta', sql.NVarChar, numeroTarjeta)
                            .input('Usuario', sql.NVarChar, usuario)
                            .query(query.cobranza);
        // console.log(query.cobranza)
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    cobranza
}