const bcrypt = require('bcryptjs');
const jwt_decode = require('jwt-decode');
const fs = require('fs')
const eventData = require('../../../data/events/users');
const updateData = require('../../../data/events/password_crypto');
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
       if(insert.rowsAffected[0] === 1){           
        fs.readFile('/var/www/html/servpublico.maisondesante.org.pe/templates/01/index.html', 'utf8' , (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            res.end(data)
          })
        }else {
            fs.readFile('/var/www/html/servpublico.maisondesante.org.pe/templates/01/error.html', 'utf8' , (err, data) => {
                if (err) {
                  console.error(err)
                  return
                }
                res.end(data)
              })
       
        }      
    
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
const getValidatePasswordResultMail = async (req, res, next) => {
    const usuario = req.params.usuario;
    try {
        const event = await eventData.validatePasswordResultMail(usuario);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updatePassword = async (req, res, next) => {
    const { username,password } = req.body; 
    try {

      const result = await updateData.cryptoPassword(password);
      req.body.password = result.password;
      const data = req.body;
      const insert = await updateData.updatePassword(data);
      const persona = await updateData.getUpdatePersona(username)
      if(insert.rowsAffected[0] === 1){
        return res.json({
          ok: true,
          msg: 'Success, contraseña Actulizado',
          user:persona,
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
module.exports = {
    generateToken,
    decifrarToken,
    getValidateChangePassword,
    getValidatePasswordResultMail,
    updatePassword
}