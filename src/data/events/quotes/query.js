module.exports =  {
eventAppointmentRegister: `declare @ni_Error int
    select @ni_Error = 0
    exec SP_CMS_CITAS_REGISTRA @IdHorario, @idPaciente, @fechaCita, @usuario, @ni_Error output
    select @ni_Error as error`,
eventBookedAppointments: `SELECT a.IdCita as idcita,
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
ORDER BY a.IdPaciente DESC`,
eventDeleteQuotes: `exec SP_CMS_CITAS_ANULA @idCita, @usuario`,
eventDoctorCita: `SELECT a.idcita,
a.fechacita,
(SELECT RTRIM(x.nombre)
 FROM   ge_sucursal x
 WHERE  x.sucursal = a.sucursal)             AS sucursal,
(SELECT RTRIM(x.sucursal)
 FROM   ge_sucursal x
 WHERE  x.sucursal = a.sucursal)             AS idsucursal,
(SELECT Ltrim(Rtrim(x.nombrecompleto))
 FROM   personamast x
 WHERE  x.persona = b.medico)                AS nombreMedico,
 (SELECT ltrim(rtrim(x.Sexo))
  FROM PersonaMast x
  WHERE x.Persona = b.Medico)                AS sexo,
(SELECT x.cmp
 FROM   empleadomast x
 WHERE  x.empleado = b.medico)               AS cmp,
(SELECT Ltrim(Rtrim(x.nombre))
 FROM   ss_ge_especialidad x
 WHERE  x.idespecialidad = b.idespecialidad) AS nombreEspecialidad,
(SELECT x.codigo
 FROM   ss_ge_consultorio x
 WHERE  x.idconsultorio = b.idconsultorio)   AS nroConsultorio,
a.estadodocumento,
(SELECT x.codigoestado
 FROM   ge_estadodocumento x
 WHERE  x.iddocumento = 45
        AND x.idestado = a.estadodocumento)  AS estado
FROM   ss_cc_cita a,
ss_cc_horario b
WHERE  b.idhorario = a.idhorario
AND a.idcita IN (SELECT TOP 1 idcita
                 FROM   ss_cc_cita
                 WHERE  idpaciente = @idPaciente
                 ORDER  BY 1 DESC)
ORDER  BY a.fechacita DESC`,
eventListQuotes: `SELECT a.IdCita,
    a.FechaCita,

(SELECT RTRIM(x.Nombre)
FROM GE_Sucursal x
WHERE x.Sucursal = a.Sucursal) AS sucursal,

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
    a.EstadoDocumento,

(SELECT x.CodigoEstado
FROM GE_EstadoDocumento x
WHERE x.IdDocumento = 45
  AND x.IdEstado = a.EstadoDocumento) AS estado
FROM SS_CC_Cita a,
  SS_CC_Horario b
WHERE b.IdHorario = a.IdHorario
AND a.IdPaciente = @idPaciente --Parámetro a enviar código de persona

ORDER BY a.FechaCita DESC`,   
  };