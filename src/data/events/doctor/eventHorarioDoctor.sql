SELECT IndicadorLunes as Lunes, 
          fechaHora = CONVERT (DATETIME,(CASE IndicadorLunes WHEN 2 THEN FechaInicioHorario END))+ CONVERT (DATETIME,(CASE IndicadorLunes WHEN 2 THEN HoraInicio END)),     
            IndicadorMartes as Martes,
            fechaHora = CONVERT (DATETIME,(CASE IndicadorMartes WHEN 2 THEN FechaInicioHorario END)) + CONVERT (DATETIME ,(CASE IndicadorMartes WHEN 2 THEN HoraInicio END)),   
            IndicadorMiercoles as Miercoles,
            fechaHora = CONVERT (DATETIME,(CASE IndicadorMiercoles WHEN 2 THEN FechaInicioHorario END))+ CONVERT (DATETIME,(CASE IndicadorMiercoles WHEN 2 THEN HoraInicio END)),   
            IndicadorJueves as Jueves,
            fechaHora = CONVERT (DATETIME,(CASE IndicadorJueves WHEN 2 THEN FechaInicioHorario END)) + CONVERT (DATETIME,(CASE IndicadorJueves WHEN 2 THEN HoraInicio END)),   
            IndicadorViernes as Viernes,
            fechaHora = CONVERT (DATETIME,(CASE IndicadorViernes WHEN 2 THEN FechaInicioHorario END)) + CONVERT (DATETIME,(CASE IndicadorViernes WHEN 2 THEN HoraInicio END)),   
            IndicadorSabado as Sabado,
            fechaHora = CONVERT (DATETIME,(CASE IndicadorSabado WHEN 2 THEN FechaInicioHorario END)) + CONVERT (DATETIME,(CASE IndicadorSabado WHEN 2 THEN HoraInicio END))
			from dbo.VW_HORARIO_MEDICO WHERE Periodo IN (@Periodo) AND idTipoAtencion=1 AND estadoGrupoAtencion=2 and Medico= @idMedico;