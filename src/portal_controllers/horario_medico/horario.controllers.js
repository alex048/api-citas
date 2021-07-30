'use strict';

const eventData = require('../../data/events/portal_web');


const getHorarioM = async (req, res, next) => {
    try {

        const eventlist = await eventData.getHoraio();
        res.send(eventlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getHorarioList = async (req, res, next) => {
    var datos1 = new Array();
    try {
        const data = req.body;
        const insert = await eventData.horarioList(data);
        for (var dato in insert) {
            datos1.push(insert[dato]["CMP"]);
        }
        res.json({ ["datos"]: datos1 });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

  const getHorarioListM = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.getHoraioListD(data);
        var result = [],
              index = {};
              insert.forEach(function (row) {
              if (!(row.CMP in index)) {
                index[row.CMP] = {
                  CMP: row.CMP,
                  Medico: row.Medico,
                  Nombre: row.Nombre,
                  Sucursal: row.Sucursal,
                  URL: row.URL,
                  rides: [],
                };
                result.push(index[row.CMP]);
              }
              index[row.CMP].rides.push({
                id: row.CMP,
                Lunes: row.Lunes,
                dia01: row.dia01,
                Martes: row.Martes,
                dia02: row.dia02,
                Miercoles: row.Miercoles,
                dia03: row.dia03,
                Jueves: row.Jueves,
                dia04: row.dia04,
                Viernes: row.Viernes,
                dia05: row.dia05,
                Sabado: row.Sabado,
                dia06: row.dia06,
                HorarioI: row.HorarioI,
                HorarioF: row.HorarioF,
                HorarioIC: row.HorarioI,
                HorarioFC: row.HorarioF,
              });
            });
            res.json(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
  }

module.exports = {
    getHorarioM,
    getHorarioList,
    getHorarioListM
}