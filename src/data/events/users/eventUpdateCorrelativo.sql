update SY_UnidadReplicacion SET SY_UnidadReplicacion.PersonaActual = @persona, 
    SY_UnidadReplicacion.UltimoUsuario = @usuario, 
    SY_UnidadReplicacion.UltimaFechaModif = @fechahoraregistro     /*'2021-06-28 12:16:44.170'*/
    WHERE SY_UnidadReplicacion.UnidadReplicacion ='LIMA' 