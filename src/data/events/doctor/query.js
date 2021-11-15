module.exports = {
  envetGetListDorctorHorario: `SELECT DISTINCT
    idmedico        AS idMedico,
    empleado        AS idEmpleado,
    RTRIM(apellidopaterno) AS apellidoPaterno,
    RTRIM(apellidomaterno) AS apellidoMaterno,
    RTRIM(nombres)         AS nombre,
    RTRIM(tipodocumento)   AS tipoDocumento,
    RTRIM(documento)       AS documento,
    RTRIM(fechanacimiento) AS fechaNacimiento,
    RTRIM(sexo)            AS sexo,
    RTRIM(direccion)       AS direccion,
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
                 GROUP  BY a.medico)`,
  eventGetDoctor: `SELECT	e.IdEspecialidad as id,
  RTRIM(e.Codigo) as codigo ,
  RTRIM(e.Nombre) AS Especialidad, 
     em.IdMedico as  idMedico,
  m.Empleado as idEmpleado, 
  RTRIM(sm.sucursal) as sede, 
  RTRIM(p.Sexo) as sexo, 
     p.Persona as persona, 
     RTRIM(p.FechaNacimiento) as fechaNacimiento, 
  RTRIM(p.ApellidoPaterno) as apellidoPaterno,
  RTRIM(p.ApellidoMaterno) as apellidoMaterno,
  RTRIM(p.Nombres) as nombre, 
     CONCAT(RTRIM(p.Nombres),' ',RTRIM(p.ApellidoPaterno),' ',RTRIM(p.ApellidoMaterno)) AS searhMedicos,
  RTRIM(p.TipoDocumento) as tipoDocumento,
  RTRIM(p.Documento) as documento, 
  RTRIM(p.Direccion) as direccion,
  horarios=(select count(*) from SS_CC_Horario xx where xx.Medico = em.IdMedico and xx.Sucursal = sm.sucursal 
  and xx.IdEspecialidad = e.IdEspecialidad and Estado=2 
  and Periodo between  concat(year(GETDATE()), right(concat('00',month(GETDATE())),2))
  and concat(year(DATEADD(month,3,GETDATE())), right(concat('00',month(DATEADD(month,3,GETDATE()))),2)))
     -- e.Imagen
FROM     PersonaMast p
  INNER JOIN EmpleadoMast m ON p.Persona = m.Empleado 
  INNER JOIN SS_GE_EspecialidadMedico em ON m.Empleado = em.IdMedico
  INNER JOIN SG_SucursalMedico sm ON sm.IdMedico = em.IdMedico
  INNER JOIN SS_GE_Especialidad e ON em.IdEspecialidad = e.IdEspecialidad
WHERE e.Estado = 2 AND p.Estado='A'
AND em.Estado = 2
-- and e.ambulatorio_web='A'
AND sm.estado = 2
AND sm.Sucursal =@sucursal
AND e.Codigo =@codigoEspecialidad
ORDER BY e.Nombre, p.ApellidoPaterno, p.ApellidoMaterno, p.Nombres`,
  eventHorarioDoctor: `exec SP_CMS_CITAS_LISTA_HORARIOS @idmedico, @idespecialidad, @fecha, '0001', @sucursal`,
  eventListDoctor: `SELECT	e.IdEspecialidad as id,
    RTRIM(e.Codigo) as codigo ,
    RTRIM(e.Nombre) AS especialidad,
    RTRIM(e.Descripcion) as descripcion, 
       em.IdMedico as  idMedico,
    m.Empleado as idEmpleado, 
    RTRIM(sm.sucursal) as sede, 
    RTRIM(p.Sexo) as sexo, 
       p.Persona as persona,
       RTRIM(p.FechaNacimiento) as fechaNacimiento, 
    RTRIM(p.ApellidoPaterno) as apellidoPaterno,
    RTRIM(p.ApellidoMaterno) as apellidoMaterno,
    RTRIM(p.Nombres) as nombre, 
    RTRIM(p.TipoDocumento) as tipoDocumento,
    RTRIM(p.Documento) as documento, 
    RTRIM(p.Direccion) as direccion,
    horarios=(select count(*) from SS_CC_Horario xx where xx.Medico = em.IdMedico and xx.Sucursal = sm.sucursal 
    and xx.IdEspecialidad = e.IdEspecialidad and Estado=2 
    and Periodo between  concat(year(GETDATE()), right(concat('00',month(GETDATE())),2))
    and concat(year(DATEADD(month,3,GETDATE())), right(concat('00',month(DATEADD(month,3,GETDATE()))),2)))
       -- e.Imagen
FROM     PersonaMast p
    INNER JOIN EmpleadoMast m ON p.Persona = m.Empleado 
    INNER JOIN SS_GE_EspecialidadMedico em ON m.Empleado = em.IdMedico
    INNER JOIN SG_SucursalMedico sm ON sm.IdMedico = em.IdMedico
    INNER JOIN SS_GE_Especialidad e ON em.IdEspecialidad = e.IdEspecialidad
WHERE e.Estado = 2 AND p.Estado='A'
AND em.Estado = 2
-- and e.ambulatorio_web='A'
AND sm.estado = 2
ORDER BY e.Nombre, p.ApellidoPaterno, p.ApellidoMaterno, p.Nombres`,
};
