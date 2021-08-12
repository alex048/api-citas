SELECT IdMedico as idMedico,
Empleado as idEmpleado,
ApellidoPaterno as apellidoPaterno,
ApellidoMaterno as apellidoMaterno,
Nombres as nombre,
TipoDocumento as tipoDocumento,
Documento as documento,
FechaNacimiento as fechaNacimiento,
Sexo as sexo,
Direccion as direccion,
Sucursal as sede,
IdEspecialidad as id,Codigo as codigo,Nombre as especialidad,Descripcion as descripcion 
from dbo.VW_ESPECIALIDAD_MEDICO 
WHERE estadoPersona = 'A' 
AND estadoEspecialidad=2 
AND estadoEspecialidadMedico=2 