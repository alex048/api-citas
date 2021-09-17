const bcrypt = require('bcryptjs');
const jwt_decode = require('jwt-decode');
const fs = require('fs')
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
       const insert = await eventData.enableChangePassword(decode.uid);
       if(insert){
            console.log('exitoso'); res.json({
            ok: true,
            insert
        });
        
        }else {
            console.log('error'); 
            res.json({
                ok: false,
                insert
                });
       
        }      
       /*fs.readFile('/Users/webhelp/Desktop/alex/api-citas/templates/01/error.html', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        res.end(data)
      })*/  
       
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador',
            error:error.message
        });
    }
}

const getValidateChangePassword = async (req, res, next) => {
    const persona = req.params.persona;
    try {
        const data = req.body;
        const event = await eventData.validateChangePassword(persona);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    generateToken,
    decifrarToken,
    getValidateChangePassword
}