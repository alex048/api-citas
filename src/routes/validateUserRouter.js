'use strict';

const express = require('express');
const { validarJWT } = require('../../middlewares/validar-jwt')
// user
const eventControlllerValidate = require('../controllers/auth/validate_users/validate.controllers');
const login = require('../controllers/auth/login/login.controller');
const create = require('../controllers/auth/register/register.controller');
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
const history= require('../controllers/quotes/quotes.controllers');
//PORTAL WEB
const cie10= require('../portal_controllers/cie10/cie10.Controllers');
const horario= require('../portal_controllers/horario_medico/horario.controllers');
const slider= require('../portal_controllers/slider/slider.controllers');
const mail= require('../portal_controllers/form_contacto/contacto.controllers');
const { createReclamo}  = require("../portal_controllers/portal_reclamo/portal.controllers");
const router = express.Router();

// user
router.post('/login', login.login);
router.get('/validate/:document',  eventControlllerValidate.getEventValidateUser);
//correlativo id persona
router.get('/correlativo',  correlativo.getEventCorrelativo);
//create user
router.post('/create', create.createUser);
router.post('/create/persona',  create.createPersona);
// PersonMAST
router.get('/person/:document',  personm.getPersonM);
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
router.get('/doctorshorario/:periodo/:idmedico',validarJWT,medico.getHorarioMedicoEspecialidad);
router.get('/listdoctorfechahora/:fecha/:hora',validarJWT,medico.getHorarioMedicoFechaHora);
// lista de citas
router.get('/historyQuotes/:idPaciente',validarJWT,history.getHistorialCitas);
//terminos y condiciones
router.get('/termsconditions',terminos.getTerminosCondiciones);

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
router.post('/portal',createReclamo);

module.exports = {
    routes: router
}