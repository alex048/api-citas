SELECT
Persona as id,
RTRIM(Documento) as nroDocumento,
ApellidoPaterno as apellidoPaterno,
ApellidoMaterno as apellidoMaterno,
Nombres as nombres,
Telefono as telefono,
Celular as celular,
CorreoElectronico as correoElectronico,
FechaNacimiento as fechaNacimiento ,
Sexo as sexo FROM PersonaMast  WHERE Documento =@documento