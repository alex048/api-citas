'use strict';

const eventData = require('../../../data/events/users');


const getEventValidateUser = async (req, res, next) => { 
    try {
        const document = req.params.document;
        const event = await eventData.getValidateUser(document);
        res.send(event[0]);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getEventValidateUser
}