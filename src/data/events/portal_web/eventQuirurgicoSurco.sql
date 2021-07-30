 SELECT 
         --SS_HO_Sala_Paciente.IdSala, 
         -- SS_HO_Sala_Paciente.IdPaciente, 
         Paciente = PersonaMast.NombreCompleto, 
         --SS_HO_Sala_Paciente.TurnoInicio, 
         SS_HO_Sala_Paciente.Fecha,
         Fecha = FORMAT(SS_HO_Sala_Paciente.Fecha, 'dd-MM-yyyy'), 
         --SS_HO_Sala_Paciente.TurnoFin, 
         SS_HO_Sala_Paciente.HoraInicio, SS_HO_Sala_Paciente.HoraFin, 
         --SS_HO_Sala_Paciente.IdRegistro, 
         Sala = SS_HO_Sala.Nombre, 
         --SS_HO_Sala.Codigo, 
         --SS_HO_Sala_Paciente.Componente, 
         Intervencion = CM_CO_Componente.Nombre, 
         --SS_HO_Sala_Paciente.IdMedico, 
         Medico = MEDICO.NombreCompleto
         --SS_HO_Sala_Paciente.Procedimiento, 
         --SS_HO_Sala_Paciente.EstadoDocumento, SS_HO_Sala_Paciente.IndicadorEmergencia 
         
         FROM SS_HO_Sala_Paciente 
         INNER JOIN SS_HO_Sala ON SS_HO_Sala.IdSala = SS_HO_Sala_Paciente.IdSala 
         LEFT JOIN PersonaMast ON PersonaMast.Persona = SS_HO_Sala_Paciente.IdPaciente 
         LEFT JOIN CM_CO_Componente ON CM_CO_Componente.CodigoComponente = SS_HO_Sala_Paciente.Componente 
         LEFT JOIN PersonaMast MEDICO ON MEDICO.Persona = SS_HO_Sala_Paciente.IdMedico 
         
         WHERE SS_HO_Sala_Paciente.Estado = 2 
         AND SS_HO_Sala_Paciente.Fecha = '2018-12-21 00:00:00.000'
         AND SS_HO_Sala_Paciente.Sucursal = '0004'