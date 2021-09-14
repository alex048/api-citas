const bcrypt = require('bcryptjs');
const jwt_decode = require('jwt-decode');
const eventData = require('../../../data/events/users');
const { generarJWT } = require('../../../../helpers/jwt');

const generateToken = async (req, res, next) => {
    const data= req.body;

    try {
             // Generar el TOKEN - JWT
        const token = await generarJWT( data.persona );
         url ='https://servpublico.maisondesante.org.pe/api/decode/'+ token
        res.json({
            ok: true,
            urltoken:url
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
const decifrarToken = async (req, res, next) => {
    const token = req.params.tokenvalidate;
    try {
        // decode el TOKEN - JWT
        var decode= jwt_decode(token);
        console.log(decode.uid);
       const insert = await eventData.enableChangePassword(decode.uid);
        res.json({
            ok: true,
            insert
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
    generateToken,
    decifrarToken
}