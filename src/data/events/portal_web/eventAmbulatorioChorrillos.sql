 SELECT DISTINCT 
         X.Especialidad, X.Medico,
         iLunes = (CASE WHEN indicadorLunes=2 THEN CONCAT(HoraInicio, '-', HoraFin) ELSE '' END),
         iMartes = (CASE WHEN indicadorMartes=2 THEN CONCAT(HoraInicio, '-', HoraFin) ELSE '' END),
         iMiercoles = (CASE WHEN indicadorMiercoles=2 THEN CONCAT(HoraInicio, '-', HoraFin) ELSE '' END),
         iJueves = (CASE WHEN indicadorJueves=2 THEN CONCAT(HoraInicio, '-', HoraFin) ELSE '' END),
         iViernes = (CASE WHEN indicadorViernes=2 THEN CONCAT(HoraInicio, '-', HoraFin) ELSE '' END),
         iSabado = (CASE WHEN indicadorSabado=2 THEN CONCAT(HoraInicio, '-', HoraFin) ELSE '' END)		 
     FROM
     (
       SELECT 
           Especialidad = E.Nombre,
           Medico = MEDICO.NombreCompleto,
           HoraInicio = FORMAT(H.HoraInicio,'HH:mm'),
           HoraFin = FORMAT(H.HoraFin,'HH:mm'),
           indicadorLunes, indicadorMartes, indicadorMiercoles, indicadorJueves, indicadorViernes, indicadorSabado
       FROM SS_CC_Horario H
       LEFT JOIN PersonaMast MEDICO ON MEDICO.Persona = H.Medico 
       LEFT JOIN SS_GE_Especialidad E ON E.idEspecialidad = H.idEspecialidad 
       WHERE H.Estado = 2 
         AND GETDATE() BETWEEN H.FechaInicioHorario AND H.FechaFinHorario
         AND H.Periodo = YEAR(GETDATE())*100 + MONTH(GETDATE())
         AND H.Sucursal = '0002'
     ) X
     ORDER BY 1,2     