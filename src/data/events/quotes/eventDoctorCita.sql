SELECT a.idcita,
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
ORDER  BY a.fechacita DESC