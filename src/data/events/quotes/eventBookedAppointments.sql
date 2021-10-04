SELECT a.IdCita as idcita,
       a.FechaCita as fechacita,

  (SELECT RTRIM(x.Nombre)
   FROM GE_Sucursal x
   WHERE x.Sucursal = a.Sucursal) AS sucursal,
(SELECT RTRIM(x.sucursal)
        FROM   ge_sucursal x
        WHERE  x.sucursal = a.sucursal)             AS idsucursal,
  (SELECT ltrim(rtrim(x.NombreCompleto))
   FROM PersonaMast x
   WHERE x.Persona = b.Medico) AS nombreMedico,

(SELECT ltrim(rtrim(x.Sexo))
   FROM PersonaMast x
   WHERE x.Persona = b.Medico) AS sexo,

  (SELECT x.CMP
   FROM EmpleadoMast x
   WHERE x.Empleado = b.Medico) AS cmp,

  (SELECT ltrim(rtrim(x.Nombre))
   FROM SS_GE_Especialidad x
   WHERE x.IdEspecialidad = b.IdEspecialidad) AS nombreEspecialidad,

  (SELECT x.Codigo
   FROM SS_GE_Consultorio x
   WHERE x.IdConsultorio = b.IdConsultorio) AS nroConsultorio,

  (SELECT x.CodigoEstado
   FROM GE_EstadoDocumento x
   WHERE x.IdDocumento = 45
     AND x.IdEstado = a.EstadoDocumento) AS estado
FROM SS_CC_Cita a,
     SS_CC_Horario b
WHERE b.IdHorario = a.IdHorario
  AND a.FechaCita >=  @fechaActual --Parámetro a enviar fecha actual

  AND a.IdPaciente = @IdPaciente --Parámetro a enviar código de persona

  AND a.EstadoDocumento = 2
ORDER BY a.IdPaciente DESC