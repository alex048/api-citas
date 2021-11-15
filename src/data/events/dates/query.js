module.exports =  {
    datesForAllDoctos: `exec SP_CMS_CITAS_LISTA_DIAS 0, @idEspecialidad, @periodo, '0001', @sede, 0`,
    datesForOneDoctors: `exec SP_CMS_CITAS_LISTA_DIAS @idMedico, @idEspecialidad, @periodo, '0001', @sede, 1`,
  };