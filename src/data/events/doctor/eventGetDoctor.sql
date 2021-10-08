SELECT	e.IdEspecialidad as id,
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
ORDER BY e.Nombre, p.ApellidoPaterno, p.ApellidoMaterno, p.Nombres