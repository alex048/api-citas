SELECT IdCita,FechaCita,FechaCitaFecha,medicoNombreCompleto,citaEstado
FROM dbo.VW_CITA_MEDICA 
WHERE CitaIndicadorWeb= 2 AND IndicadorWeb=2 and  IdPaciente =@IdPaciente
ORDER BY fechacreacion DESC  