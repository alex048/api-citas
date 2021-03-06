'use strict';
const utils = require('../../utils');
const config = require('../../../../database/config');
const querys = require('./query');
const sql = require('mssql');
const moment = require('moment');

const login = async(username) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const event = await pool.request()
                            .input('username', sql.NVarChar, username)
                            .query(querys.eventFindOne);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
};

const getValidateUser = async(documento) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const event = await pool.request()
                            .input('documento', sql.VarChar, documento)
                            .query(querys.eventValidateUser);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
};
const getValidateUserCitas = async(documento) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const event = await pool.request()
                            .input('documento', sql.VarChar, documento)
                            .query(querys.evenValidateUserCItas);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
};
const getCorrelativoIDPersona = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const eventsList = await pool.request().query(querys.eventCorrelativo);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
};

const updateCorrelativo = async (data) => {
    var date = new Date()
    var fechaRegistro= moment(date).format('YYYY-MM-DD HH:mm:ss')
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const insertEvent = await pool.request()
                            .input('persona', sql.Int, data.persona)
                            .input('usuario', sql.NVarChar, data.usuario)
                            .input('fechahoraregistro',sql.DateTime, fechaRegistro)
                            .query(querys.eventUpdateCorrelativo);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
};

const getByDocumentPerson = async(document) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const event = await pool.request()
                            .input('documento', sql.NVarChar(20), document)
                            .query(querys.eventGetPersona);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
};

const createUser = async (data) => {
    var date = new Date()
    var fechaRegistro= moment(date).format('YYYY-MM-DD HH:mm:ss')
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const insertEvent = await pool.request()
                            .input('username', sql.NVarChar, data.username)
                            .input('names', sql.NVarChar, data.names)
                            .input('password', sql.NVarChar, data.password)
                            .input('sqllogin', sql.NVarChar, 'CW')
                            .input('state', sql.NChar, 'A')
                            .input('registerUser', sql.NVarChar, data.username)
                            .input('person', sql.Int, data.person)
                            .input('FechaRegistro', sql.DateTime, fechaRegistro)
                            .input('isChangePassword',sql.Int, 0)
                            .query(querys.eventRegisterUser);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
};
const deleteUser = async (usuario) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const deleteEvent = await pool.request()
                            .input('usuario', sql.VarChar, usuario)
                            .query(querys.eventDeleteUser);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}
const createPersona = async (data) => {
    // var date = new Date()
   // var fecha_registro= moment(date).format('YYYY-MM-DD HH:mm:ss')
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const insertEvent = await pool.request()
                            .input('Persona', sql.Int, data.persona)
                            .input('Origen', sql.NChar(4), 'Lima')
                            .input('ApellidoPaterno', sql.NVarChar(50), data.apellidoPaterno)
                            .input('ApellidoMaterno', sql.NVarChar(50), data.apellidoMaterno)
                            .input('Nombres', sql.NVarChar(50), data.nombres)
                            .input('NombreCompleto', sql.NVarChar(150), data.nombreCompleto)
                            .input('Busqueda', sql.NVarChar(150), data.busqueda)
                            .input('TipoDocumento', sql.NChar(1), data.tipoDocumento)
                            .input('Documento', sql.NChar(20), data.documento)
                            .input('TipoPersona', sql.NChar(1), 'N')
                            .input('FechaNacimiento', sql.DateTime, data.fechaNacimiento)
                            .input('Sexo', sql.NChar(1), data.sexo)
                            .input('Nacionalidad', sql.NVarChar(20), 'PER')
                            .input('Telefono', sql.NVarChar(30), data.telefono)
                            .input('CorreoElectronico', sql.NVarChar(150), data.correoElectronico)
                            .input('Estado', sql.NChar(1), 'A')
                            .input('Celular', sql.NVarChar(15), data.celular)
                            .input('Pais', sql.NChar(4), 'PER')
                            .query(querys.eventRegisterMPerson);
        return insertEvent.rowsAffected;
    } catch (error) {
        return error.message;
    }
};

const updatePersona = async(data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const event = await pool.request()
                            .input('celular', sql.NVarChar, data.celular)
                            .input('telefono', sql.NVarChar, data.telefono)
                            .input('correo', sql.NVarChar, data.correo)
                            .input('direccion', sql.NVarChar, data.direccion)
                            .input('persona', sql.Int, data.persona)
                            .query(querys.eventUpdatePersona);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
};
const enableChangePassword = async (persona) => {    
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const insertEvent = await pool.request()
                            .input('persona', sql.Int, persona)                            
                            .query(querys.enableChangePassword);
        return insertEvent;
    } catch (error) {
        return error.message;
    }
};

const validateChangePassword = async (persona) => {    
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const insertEvent = await pool.request()
                            .input('persona', sql.Int, persona)                            
                            .query(querys.getValidateChangePassword);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
};
const validatePasswordResultMail = async (usuario) => {    
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const insertEvent = await pool.request()
                            .input('usuario', sql.VarChar, usuario)                            
                            .query(querys.eventValidatePassowordResulMail);
        return insertEvent.recordset[0];
    } catch (error) {
        return error.message;
    }
};
const isValidado = async (Documento) => {    
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const insertEvent = await pool.request()
                            .input('Documento', sql.VarChar, Documento)                            
                            .query(querys.isAfiliado);
                            // console.log(insertEvent);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
};
module.exports = {
    getValidateUser,
    login,
    createUser,
    deleteUser,
    createPersona,
    getCorrelativoIDPersona,
    updateCorrelativo,
    getByDocumentPerson,
    updatePersona,
    enableChangePassword,
    validateChangePassword,
    validatePasswordResultMail,
    getValidateUserCitas,
    isValidado
}