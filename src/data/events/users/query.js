module.exports =  {
  enableChangePassword: `UPDATE CW_USUARIO SET enableChangePassword = 1 WHERE Persona=@persona;`,
  eventCorrelativo: `SELECT (PersonaActual+1) as idPersona FROM SY_UnidadReplicacion WHERE UnidadReplicacion ='LIMA'`,
  eventDeleteUser: `DELETE FROM [dbo].[CW_USUARIO] WHERE  Usuario = @usuario`,
  eventFindOne: `SELECT [Clave],[Persona] FROM CW_USUARIO  WHERE Usuario =@username`,
  eventGetPersona: `SELECT
  Persona as id,
  RTRIM(Documento) as nroDocumento,
  RTRIM(ApellidoPaterno) as apellidoPaterno,
  RTRIM(ApellidoMaterno) as apellidoMaterno,
  RTRIM(Nombres) as nombres,
  RTRIM(Telefono) as telefono,
  RTRIM(Celular) as celular,
  RTRIM(CorreoElectronico) as correoElectronico,
  FechaNacimiento as fechaNacimiento ,
  RTRIM(Direccion) as direccion,
  RTRIM(Sexo) as sexo FROM PersonaMast  WHERE Documento =@documento`,
  eventRegisterMPerson: `INSERT INTO  [dbo].[PersonaMast] (
    [Persona],
    [Origen],
    [ApellidoPaterno],
    [ApellidoMaterno],
    [Nombres],
    [NombreCompleto],
    [Busqueda],
    [TipoDocumento],
    [Documento],
    [TipoPersona],
    [FechaNacimiento],
    [Sexo],
    [Nacionalidad],
    [Telefono],
    [CorreoElectronico],
    [Estado],
    [Celular],
    [Pais] )
VALUES (
    @Persona,
    @Origen,
    @ApellidoPaterno,
    @ApellidoMaterno,
    @Nombres,
    @NombreCompleto,
    @Busqueda,
    @TipoDocumento,
    @Documento,
    @TipoPersona,
    @FechaNacimiento,
    @Sexo,
    @Nacionalidad,
    @Telefono,
    @CorreoElectronico,
    @Estado,
    @Celular,
    @Pais
)

`,
  eventRegisterUser: `INSERT INTO [dbo].[CW_USUARIO]
  (
      [Usuario],
      [Nombre],
      [Clave],
      [SQLLogin],
      [Estado],
      [UltimoUsuario],
  [Persona],
      [FechaRegistro],
      [isChangePassword]
  )
VALUES
  (
      @username,
      @names,
      @password,
      @sqllogin,
      @state,
      @registerUser,
      @person,
      @FechaRegistro,
      @isChangePassword
  )
SELECT  max(FechaRegistro) AS fecha FROM [CW_USUARIO]`,
  eventUpdateCorrelativo: `update SY_UnidadReplicacion SET SY_UnidadReplicacion.PersonaActual = @persona, 
  SY_UnidadReplicacion.UltimoUsuario = @usuario, 
  SY_UnidadReplicacion.UltimaFechaModif = @fechahoraregistro     /*'2021-06-28 12:16:44.170'*/
  WHERE SY_UnidadReplicacion.UnidadReplicacion ='LIMA'`,
  eventUpdatePersona: `UPDATE PersonaMast SET Celular = @celular,Telefono = @telefono,CorreoElectronico=@correo,Direccion =@direccion
  WHERE Persona = @persona`,
  eventValidatePassowordResulMail: `SELECT enableChangePassword AS enablecp FROM CW_USUARIO where usuario = @usuario`,
  eventValidateUser: `SELECT COUNT ( DISTINCT PersonaMast.Documento ) as existe FROM [dbo].[PersonaMast]
  WHERE ( ( PersonaMast.TipoDocumento ='D'
  AND PersonaMast.Documento =@documento
  AND PersonaMast.TipoDocumento IS NOT NULL
  AND PersonaMast.Documento IS NOT NULL ) OR  ( PersonaMast.Documento =@documento
  AND PersonaMast.Documento IS NOT NULL ))
  AND PersonaMast.Persona <> -1 AND PersonaMast.Estado ='A'`,
  evenValidateUserCItas: `SELECT COUNT ( DISTINCT Usuario ) as existe FROM [dbo].[CW_USUARIO]  WHERE  Usuario =  @documento`,
  getValidateChangePassword: `select enableChangePassword,isChangePassword from cw_usuario where persona =  @persona`,
  isAfiliado: `SELECT DISTINCT 
  p.IDPROGRAMA, 
  p.IDTIPOPROGRAMA, 
  p.ESTADODOCUMENTO, 
  p.TipoAfiliado, 
  p.ESTADO,  
  Programa = tp.Descripcion,
  pac.CodigoHC,
  beneficiario = beneficiario.NombreCompleto, p.CodigoPoliza, 
  Titular = (SELECT TOP 1 beneficiario.NombreCompleto FROM SS_PG_ProgramaBeneficiario 
  LEFT JOIN PersonaMast AS beneficiario ON beneficiario.Persona = pb.idPacienteTitular WHERE pb.idPrograma = p.idPrograma), 
  tp.TipoPrograma, tp.Modalidad 
  FROM SS_PG_Programa p WITH(NOLOCK) 
  LEFT JOIN SS_PG_ProgramaBeneficiario pb WITH(NOLOCK) ON pb.idPrograma = p.idPrograma 
  LEFT JOIN PERSONAMAST pe WITH(NOLOCK) ON pe.PERSONA = p.idClienteFacturacion 
  LEFT JOIN PERSONAMAST AS beneficiario WITH(NOLOCK) ON beneficiario.PERSONA = pb.idPaciente 
  LEFT JOIN SS_GE_Paciente pac WITH(NOLOCK) ON pac.idPaciente = p.idClienteFacturacion 
  LEFT JOIN SS_PG_TipoPrograma tp WITH(NOLOCK) ON p.idTipoPrograma = tp.idTipoPrograma
  WHERE p.Estado = 2 AND p.EstadoDocumento = 3 
  AND LTRIM(RTRIM(beneficiario.Documento)) = @Documento`,
  };