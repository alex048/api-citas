SELECT IdMedico as idMedico,Empleado as idEmpleado,
RTRIM(ApellidoPaterno) as apellidoPaterno,
RTRIM(ApellidoMaterno) as apellidoMaterno,
RTRIM(Nombres) as nombre,
CONCAT(RTRIM(Nombres),' ',RTRIM(ApellidoPaterno),' ',RTRIM(ApellidoMaterno)) AS searhMedicos,
TipoDocumento as tipoDocumento,
RTRIM(Documento) as documento,
FechaNacimiento as fechaNacimiento,
Sexo as sexo,Direccion as direccion,Sucursal as sede,
horarios=(select count(*) from SS_CC_Horario xx where xx.Medico = gg.IdMedico and xx.Sucursal = gg.Sucursal 
and xx.IdEspecialidad = gg.IdEspecialidad and Estado=2 
and Periodo between  concat(year(GETDATE()), right(concat('00',month(GETDATE())),2))
and concat(year(DATEADD(month,3,GETDATE())), right(concat('00',month(DATEADD(month,3,GETDATE()))),2)))
 from dbo.VW_ESPECIALIDAD_MEDICO as gg WHERE estadoPersona = 'A' 
AND estadoEspecialidad=2 
AND estadoEspecialidadMedico=2 
AND Sucursal =@sucursal
AND Codigo =@codigoEspecialidad