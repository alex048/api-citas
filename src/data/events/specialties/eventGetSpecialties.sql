SELECT DISTINCT SS_GE_Especialidad.IdEspecialidad as id,Codigo as codigo,Nombre as nombre,Descripcion as descripcion FROM [dbo].[SS_GE_Especialidad] 
INNER JOIN [dbo].[SS_GE_EspecialidadMedico] ON dbo.SS_GE_Especialidad.IdEspecialidad = dbo.SS_GE_EspecialidadMedico.IdEspecialidad 
INNER JOIN [dbo].[EmpleadoMast]  ON dbo.EmpleadoMast.Empleado = dbo.SS_GE_EspecialidadMedico.IdMedico
WHERE SS_GE_Especialidad.Estado=2 AND Sucursal =@sucursal
