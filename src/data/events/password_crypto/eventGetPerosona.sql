SELECT RTRIM(u.usuario),RTRIM(u.nombre),RTRIM(p.CorreoElectronico) FROM  CW_USUARIO as u 
inner join PersonaMast as p on u.Persona = p.Persona  WHERE Usuario =@username