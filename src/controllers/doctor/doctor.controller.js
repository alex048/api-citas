'use strict';

const eventData = require('../../data/events/doctor');


const getListMedico = async (req, res, next) => {
    try {
        const event = await eventData.getListMedicos();
		  var result = [],
        index = {};
        event.forEach(function (row) {
        if (!(row.idMedico in index)) {
          index[row.idMedico] = {
            nombre: row.nombre,
            apellidoPaterno: row.apellidoPaterno,
            apellidoMaterno: row.apellidoMaterno,
            tipoDocumento: row.tipoDocumento,
            numeroDocumento: row.documento,
            fechaNacimiento:row.fechaNacimiento,
            sexo:row.sexo,
            direccion:row.direccion,
            sede:row.sede,
            especialidades: [],
          };
          result.push(index[row.idMedico]);
        }
        index[row.idMedico].especialidades.push({
		  id:row.id,	
          codigo: row.codigo,
          descripcion: row.descripcion,
        });
      });
        res.send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getMedicoEspecialidad = async (req, res, next) => {
    try {
        const codigo = req.params.codigo;
        const sucursal = req.params.sucursal;
        const event = await eventData.getMedicoEspecialidad(sucursal,codigo);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getHorarioMedicoEspecialidad = async (req, res, next) => {
    try {
        const periodo = req.params.periodo;
        const idmedico = req.params.idmedico;
        const event = await eventData.getHorarioMedicoEspecialidad(periodo,idmedico);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getHorarioMedicoFechaHora = async (req, res, next) => {
    try {
        const fecha = req.params.fecha;
        const hora = req.params.hora;
        const event = await eventData.getHorarioMedicoFechaHora(fecha,hora);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getListMedico,
    getMedicoEspecialidad,
    getHorarioMedicoEspecialidad,
    getHorarioMedicoFechaHora
}