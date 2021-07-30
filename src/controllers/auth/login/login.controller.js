'use strict';
const bcrypt = require('bcryptjs');
const eventData = require('../../../data/events/users');
const { generarJWT } = require('../../../../helpers/jwt');

const login = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        // Verificar usuario
        const usuario = await eventData.login(username);
        if ( usuario.length < 1 ) {
            return res.status(401).json({
                ok: false,
                msg: 'usuario no encontrado'
            });
        }
          // Verificar contraseña
        const validPassword = bcrypt.compareSync( password, usuario[0].Clave );
        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no válida'
            });
        }
        // Generar el TOKEN - JWT
        const token = await generarJWT( usuario.Persona );
        const user = await eventData.getByDocumentPerson(username);
        res.json({
            ok: true,
            token,
	    user:user[0]
        });
       // res.send(event);
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador',
            error:error.message
        });
    }
}
module.exports = {
    login
}