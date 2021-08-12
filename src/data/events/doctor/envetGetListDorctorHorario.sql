SELECT IdMedico as idMedico,
Empleado as idEmpleado,
m.ApellidoPaterno as apellidoPaterno,
m.ApellidoMaterno as apellidoMaterno,
m.Nombres as nombre,
m.TipoDocumento as tipoDocumento,
m.Documento as documento,
FechaNacimiento as fechaNacimiento,
Sexo as sexo,
Direccion as direccion,
m.Sucursal as sede,
m.IdEspecialidad as id,Codigo as codigo,Nombre as especialidad,Descripcion as descripcion 
from dbo.VW_ESPECIALIDAD_MEDICO  m
INNER JOIN VW_HORARIO_MEDICO AS h on m.IdMedico = h.Medico
WHERE estadoPersona = 'A' 
AND estadoEspecialidad=2 
AND estadoEspecialidadMedico=2 
AND FORMAT(h.FechaInicioHorario,'yyyy-MM-dd') =@Fecha and FORMAT(h.HoraInicio,'HH:mm') = @Hora