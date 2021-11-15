module.exports =  {
  eventGetSpecialties: `SELECT DISTINCT ho.idEspecialidad as id,RTRIM(e.Codigo) as codigo, RTRIM(e.Nombre )as descripcion, RTRIM(e.imagen )as icon
    FROM SS_CC_Horario ho, SS_GE_Especialidad e
    WHERE e.Estado=2 AND ho.Estado=2 
      AND ho.IdEspecialidad = e.IdEspecialidad
      AND ho.Periodo IN (YEAR(GETDATE())*100 + MONTH(GETDATE()), YEAR(DATEADD(MONTH,+1,GETDATE()))*100 + MONTH(DATEADD(MONTH,+1,GETDATE()))) AND ho.Estado=2
      AND Sucursal =@sucursal -- Aqui va variable de Sede
    ORDER BY 2`,
  };