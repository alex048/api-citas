module.exports =  {
  eventCifrarclave: `DECLARE @nn VARCHAR(40)
    EXEC @nn  = "dbo"."FN_CMS_cifrarclave" @password
    select @nn as password`,
    eventDescifrarclaveWeb: `DECLARE @nn VARCHAR(40)
    EXEC @nn  = "dbo"."FN_CMS_descifrarclaveWeb" @usuario, @password
    select @nn as status`,
    eventGetPerosona: `SELECT RTRIM(u.usuario)as usuario,RTRIM(u.nombre)as nombre,RTRIM(p.CorreoElectronico) as CorreoElectronico FROM  CW_USUARIO as u 
    inner join PersonaMast as p on u.Persona = p.Persona  WHERE Usuario =@username`,
    eventUpdataChangePassword: `UPDATE CW_USUARIO SET isChangePassword = @isChangePassword WHERE Usuario=@usuario`,
    updatePassword: `UPDATE CW_USUARIO SET Clave = @password WHERE Usuario=@usuario`,
  };