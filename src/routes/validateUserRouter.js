'use strict';

const express = require('express');
const { validarJWT } = require('../../middlewares/validar-jwt')
// user
const eventControlllerValidate = require('../controllers/auth/validate_users/validate.controllers');
const login = require('../controllers/auth/login/login.controller');
const create = require('../controllers/auth/register/register.controller');
const deleteUser = require('../controllers/auth/delete/delete_user.controllers');
const token = require('../controllers/auth/token_validate/token_validate.controller');
//Sucursal
const sucursal = require('../controllers/branch_office/branch-office.controller');
//Tipo Documento
const typeDocument = require('../controllers/auth/type_document/type-document.controllers');
// PersonMAST
const personm = require('../controllers/person_m/person.controllers');
//Especialidades
const specialty= require('../controllers/specialty/specialty.controller');
const medico= require('../controllers/doctor/doctor.controller');
const correlativo= require('../controllers/auth/correlativo_idpersona/correlativo.controllers');
const terminos= require('../controllers/privacy_policies/privacy-policies.controller');
//history
const citas= require('../controllers/quotes/quotes.controllers');
// mail password
const mailpass= require('../controllers/mail/mail.controllers');
// Message
const message= require('../controllers/message/message.controllers');

//logo niubiz
const logsNiubiz= require('../controllers/niubiz/niubiz.controllers');
//cuotas afiliado
const dues= require('../controllers/dues/dues.controlles');
//DATES FOR DOCTOS
const dates= require('../controllers/dates/dates.controllers');
//PREIO CITA
const precio= require('../controllers/precio_cita/precioCita.controllers');
//cobranza
const cobrnaza= require('../controllers/cobranza/cobranza.controllers');
//sitedss
const siteds= require('../controllers/siteds/login/sited-login.comtrollers');

//PORTAL WEB
const cie10= require('../portal_controllers/cie10/cie10.Controllers');
const horario= require('../portal_controllers/horario_medico/horario.controllers');
const slider= require('../portal_controllers/slider/slider.controllers');
const mail= require('../portal_controllers/form_contacto/contacto.controllers');
const birthay= require('../portal_controllers/birthay/birthay.comtrollers');

const { createReclamo}  = require("../portal_controllers/portal_reclamo/portal.controllers");
const router = express.Router();

// user
router.post('/login', login.login);
router.get('/validate/:document',  eventControlllerValidate.getEventValidateUser);
router.get('/validateuser/:document',  eventControlllerValidate.getEventValidateUserCitas);
//correlativo get id persona
router.get('/correlativo',  correlativo.getEventCorrelativo);
//correlativo update personarouter.put('/correlativo',  correlativo.updateCorrelativo);
//create user
router.post('/create', create.createUser);
//create user persona
router.post('/create/persona',  create.createPersona);
//delete user
router.delete('/user/:usuario', deleteUser.deleteUser);
// generar token
router.post('/generateToken', token.generateToken);
//decodifcar token
router.get('/decode/:tokenvalidate', token.decifrarToken);
// validar usuario
router.get('/validatechangepassword/:persona', token.getValidateChangePassword);
// resulta  password
router.get('/passwordresult/:usuario', token.getValidatePasswordResultMail);
// update password
router.post('/uppassword',token.updatePassword);
// update state password change
router.post('/updatestate',token.updateChangePasswordSate);
// PersonMAST
router.get('/person/:document',  personm.getPersonM);
// update PersonMAST
router.put('/person',validarJWT,  personm.updatePersona);
//Sucursal
router.get('/sucursal',validarJWT, sucursal.getSucursal);
//Tipo documento
router.get('/typedocument',  typeDocument.getTypeDocument);
//especialidades
router.get('/specialty/:sucursal',validarJWT,specialty.getSpecialty);
//Lista medicos
router.get('/doctors',validarJWT,medico.getListMedico);
//Medico por especialidad
router.get('/doctorspecialty/:sucursal/:codigo',validarJWT,medico.getMedicoEspecialidad);
// horarios medicos
router.post('/doctorshorario',validarJWT,medico.getHorarioMedicoEspecialidad);
router.get('/listdoctorfechahora/:idespecialidad/:fecha/:sucursal',validarJWT,medico.getHorarioMedicoFechaHora);
// lista de citas
router.get('/historyQuotes/:idPaciente',validarJWT,citas.getHistorialCitas);
// lista de reserva de citas
router.get('/bookings/:fecha/:idPaciente',validarJWT,citas.getCitasReservadas);
//registro de cita
router.post('/appointment',validarJWT,citas.registerAppointment);
//anular cita
router.post('/canceldate',validarJWT,citas.calcelDate);
//terminos y condiciones
router.get('/termsconditions',terminos.getTerminosCondiciones);
// mail
router.post('/mailcitas',mailpass.sendMailCitas);
router.post('/mailnewacount',mailpass.sendNewAcountUserPassword);
router.post('/maillinkvalidate',mailpass.sendValidateMailLinkPassword);
router.post('/mailupdatepassword',mailpass.sendMailPasswordChangeNew);
// Message
router.get('/message',message.getMessage);
// slider message
router.get('/infomessage',message.getSliderMessage);
// Message
router.post('/logsniubiz',validarJWT,logsNiubiz.registerLogNiubiz);

//cuotas de afiliados
// pagados
router.get('/coutospaid/:documento',validarJWT,dues.getCoutosPaid);
// pendientes
router.get('/coutospending/:documento',validarJWT,dues.getCoutosPending);
//DATES DOCTOS
//ALL DATES
router.get('/datesall/:idEspecialidad/:sede',validarJWT,dates.getAllDateDoctors);
//ONE DATE
router.get('/dateone/:idMedico/:idEspecialidad/:sede',validarJWT,dates.getOneDateDoctors);
//Precio cita
router.get('/price/:sede/:tipoPaciente/:idTipoPrograma',validarJWT,precio.getPrecioCita);
//COBRANZA CITAS
router.post('/cobranza',validarJWT,cobrnaza.cobranza);

//siteds
router.post('/loginsited',siteds.loginSiteds);

//PORTAL WEB
router.get('/cie10',cie10.getCIE10);
router.get('/horario',horario.getHorarioM);
router.post('/horario',horario.getHorarioList);
router.post('/horario/dhorario',horario.getHorarioListM);

router.get('/slider/emergenciaLima',slider.getEmergenciaLima);
router.get('/slider/quirurgicoLima',slider.getQuirurgicoLima);
router.get('/slider/ambulatorioLima',slider.getAmbulatorioLima);

router.get('/slider/emergenciaChorrillos',slider.getEmergenciaChorrillos);
router.get('/slider/quirurgicoChorrillos',slider.getQuirurgicoChorrillos);
router.get('/slider/ambulatorioChorrillos',slider.getAmbulatorioChorrillos);

router.get('/slider/emergenciaSurco',slider.getEmergenciaSurco);
router.get('/slider/quirurgicoSurco',slider.getQuirurgicoSurco);
router.get('/slider/ambulatorioSurco',slider.getAmbulatorioSurco);

router.post('/mailcontacto',mail.sendMailContacto);
router.post('/mailcontacto/portalweb',mail.sendMailPortalWeb);
router.post('/mail/validtoken',mail.validateToken);
router.post('/birthday',birthay.getBirthay);
router.post('/portal',createReclamo);

module.exports = {
    routes: router
}