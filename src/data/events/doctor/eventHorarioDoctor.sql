SELECT IndicadorLunes as Lunes, 
          fechaHora = (CASE IndicadorLunes WHEN 2 THEN CONCAT(FORMAT(FechaInicioHorario,'yyyy-MM-dd'),' ',FORMAT(HoraInicio,'HH:mm')) END),     
            IndicadorMartes as Martes,
            fechaHora =(CASE IndicadorMartes WHEN 2 THEN CONCAT(FORMAT(FechaInicioHorario,'yyyy-MM-dd'),' ',FORMAT(HoraInicio,'HH:mm')) END),   
            IndicadorMiercoles as Miercoles,
            fechaHora =(CASE IndicadorMiercoles WHEN 2 THEN CONCAT(FORMAT(FechaInicioHorario,'yyyy-MM-dd'),' ',FORMAT(HoraInicio,'HH:mm')) END),			
            IndicadorJueves as Jueves,
            fechaHora = (CASE IndicadorJueves WHEN 2 THEN CONCAT(FORMAT(FechaInicioHorario,'yyyy-MM-dd'),' ',FORMAT(HoraInicio,'HH:mm')) END),  
            IndicadorViernes as Viernes,
            fechaHora = (CASE IndicadorViernes WHEN 2 THEN CONCAT(FORMAT(FechaInicioHorario,'yyyy-MM-dd'),' ',FORMAT(HoraInicio,'HH:mm')) END),   
            IndicadorSabado as Sabado,
            fechaHora = (CASE IndicadorSabado WHEN 2 THEN CONCAT(FORMAT(FechaInicioHorario,'yyyy-MM-dd'),' ',FORMAT(HoraInicio,'HH:mm')) END)
			from dbo.VW_HORARIO_MEDICO WHERE Periodo IN (@Periodo) AND idTipoAtencion=1 AND estadoGrupoAtencion=2 and Medico= @idMedico;