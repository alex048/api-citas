SELECT
Persona as id,
RTRIM(Documento) as nroDocumento,
RTRIM(ApellidoPaterno) as apellidoPaterno,
RTRIM(ApellidoMaterno) as apellidoMaterno,
RTRIM(Nombres) as nombres,
RTRIM(Telefono) as telefono,
RTRIM(Celular) as celular,
RTRIM(CorreoElectronico) as correoElectronico,
RTRIM(FechaNacimiento) as fechaNacimiento ,
RTRIM(Direccion) as direccion,
RTRIM(Sexo) as sexo FROM PersonaMast  WHERE Documento =@documento