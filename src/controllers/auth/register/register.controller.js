'use strict';
const bcrypt = require('bcryptjs');
const eventData = require('../../../data/events/users');
const eventPassword = require('../../../data/events/password_crypto');
const createUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {

    const existeUser = await eventData.login(username);
    if ( existeUser !='' ) {
      return res.status(400).json({
          ok: false,
          msg: 'El usuario ya está registrado'
      });
    }
    // Encriptar contraseña
    // const salt = bcrypt.genSaltSync();
    // req.body.password = bcrypt.hashSync( password, salt );
    const result = await eventPassword.cryptoPassword(password);
    req.body.password = result.password;
    const data = req.body;
    const insert = await eventData.createUser(data);
    console.log('register: ',insert.length);
    if(insert.length > 0){
      return res.json({
        ok: true,
        msg: 'Usuario registrado con exito',
        insert
    });
    }
    return res.json({
      ok: false,
      insert
  });
  } catch (error) {
     // res.status(400).send(error.message);
    return res.status(500).json({
        ok: false,
        msg: 'Hable con el administrador',
        error:error.message
    })
  }
}
const createPersona = async (req, res, next) => {
  try {
      const data = req.body;
      const insert = await eventData.createPersona(data);
      res.send(insert);
  } catch (error) {
      res.status(400).send(error.message);
  }
}

module.exports = {
  createUser,
  createPersona
}