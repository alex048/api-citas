SELECT	e.IdEspecialidad as id,
			e.Codigo as codigo ,
			e.Nombre AS especialidad,
			e.Descripcion as descripcion, 
         em.IdMedico as  idMedico,
			m.Empleado as idEmpleado, 
			sm.sucursal as sede, 
			p.Sexo as sexo, 
         p.Persona as persona,
         p.FechaNacimiento as fechaNacimiento, 
			p.ApellidoPaterno as apellidoPaterno,
			p.ApellidoMaterno as apellidoMaterno,
			p.Nombres as nombre, 
			p.TipoDocumento as tipoDocumento,
			p.Documento as documento, 
			p.Direccion as direccion,
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
-- AND em.Estado = 2
and e.ambulatorio_web='A'
AND sm.estado = 2
ORDER BY e.Nombre, p.ApellidoPaterno, p.ApellidoMaterno, p.Nombres