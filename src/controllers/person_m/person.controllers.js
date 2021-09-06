'use strict';

const eventData = require('../../data/events/users');


const getPersonM = async (req, res, next) => {
    try {
        const document = req.params.document;
        const event = await eventData.getByDocumentPerson(document);
        res.send(event[0]);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatePersona = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.updatePersona(data);
        return res.status(200).json({
            success: 1,
            data: insert,
          });
    } catch (error) {
        res.status(400).send(error.message);
    }
  }

module.exports = {
    getPersonM,
    updatePersona
}