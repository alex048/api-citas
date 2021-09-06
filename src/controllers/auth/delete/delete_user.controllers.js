'use strict';
const bcrypt = require('bcryptjs');
const eventData = require('../../../data/events/users');

const deleteUser = async (req, res, next) => {
    try {
        const usuario = req.params.usuario;
        const deletedEvent = await eventData.deleteUser(usuario);
        res.send(deletedEvent);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    deleteUser
}