SELECT DISTINCT
       idmedico        AS idMedico,
       empleado        AS idEmpleado,
       apellidopaterno AS apellidoPaterno,
       apellidomaterno AS apellidoMaterno,
       nombres         AS nombre,
       tipodocumento   AS tipoDocumento,
       documento       AS documento,
       fechanacimiento AS fechaNacimiento,
       sexo            AS sexo,
       direccion       AS direccion,
	   null		       AS sede
FROM   dbo.vw_especialidad_medico as a
WHERE  idmedico IN (SELECT a.medico
                    FROM   ss_cc_horario a
                           LEFT JOIN ss_ge_grupoconsultorio b
                                  ON b.idconsultorio = a.idconsultorio
                           LEFT JOIN ss_ge_grupoatencion c
                                  ON c.idgrupoatencion = b.idgrupoatencion
                           LEFT JOIN ss_ge_consultorio d
                                  ON d.idconsultorio = a.idconsultorio
                           LEFT JOIN sg_sucursalmedico e
                                  ON e.compania = a.compania
                                     AND e.unidadnegocio = a.unidadnegocio
                                     AND e.sucursal = a.sucursal
                                     AND e.idmedico = a.medico
                    WHERE  a.idespecialidad = @idespecialidad
                           --Parámetro a enviar código especialidad
                           AND a.idturno IN ( 1, 2, 13 )
                           AND @fecha BETWEEN a.fechainicio AND a.fechafin
                           --Parámetro a enviar fecha a consultar
                           AND CASE Datepart(dw, @fecha)
                                 --Parámetro a enviar fecha a consultar
                                 WHEN 1 THEN a.indicadordomingo
                                 WHEN 2 THEN a.indicadorlunes
                                 WHEN 3 THEN a.indicadormartes
                                 WHEN 4 THEN a.indicadormiercoles
                                 WHEN 5 THEN a.indicadorjueves
                                 WHEN 6 THEN a.indicadorviernes
                                 ELSE a.indicadorsabado
                               END = 2
                           AND a.estado = 2
                           AND a.tiporegistrohorario IN ( 1, 3 )
                           AND ( a.idservicio = 1
                                  OR ( a.indicadorcompartido = 2
                                       AND a.idgrupoatencioncompartido = 2 ) )
                           AND a.unidadnegocio = '0001'
                           --Parámetro a enviar 0001
                           AND a.sucursal = @sucursal
                           --Parámetro a enviar código de sucursal
                           AND c.idgrupoatencion = 1
                           AND d.estado = 2
                           AND e.estado = 2
                    GROUP  BY a.medico)