module.exports =  {
  eventTypeDocument: `SELECT TOP 100 RTRIM(Codigo) as id, RTRIM(Nombre) as descripcion from CM_CO_TablaMaestroDetalle WHERE Grupo ='WEB' AND IdTablaMaestro = 110 AND Estado = 2 order by idcodigo`,
  };