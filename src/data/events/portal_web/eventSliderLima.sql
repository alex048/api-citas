       SELECT TOP 800 
    --	AnioAtencion = YEAR(SS_CE_ConsultaExterna.FechaConsulta),
    --	MesAtencion = MONTH(SS_CE_ConsultaExterna.FechaConsulta),
    --	SucursalNombre = RTRIM(AC_Sucursal.DescripcionLocal),
    Orden_Atencion = SS_AD_OrdenAtencion.CodigoOA,
    RIGHT('000000000' + Ltrim(Rtrim(SS_GE_Paciente.CodigoHC)),9) AS Historia_Clinica,
    paterno = Paciente.ApellidoPaterno,
    materno = Paciente.ApellidoMaterno,
    nombre = Paciente.Nombres,
    Prioridad = SS_CE_ConsultaExterna.secuencialprioridad,
    Edad = (CASE WHEN MONTH(Paciente.FechaNacimiento)*100 + DAY(Paciente.FechaNacimiento) > MONTH(SS_CE_ConsultaExterna.FechaConsulta)*100 + DAY(SS_CE_ConsultaExterna.FechaConsulta) THEN YEAR(SS_CE_ConsultaExterna.FechaConsulta) - YEAR(Paciente.FechaNacimiento) -1 ELSE YEAR(SS_CE_ConsultaExterna.FechaConsulta) - YEAR(Paciente.FechaNacimiento) END),
    /*FechaAtencion = REPLACE(CONVERT(VARCHAR,SS_CE_ConsultaExterna.FechaConsulta,103), '.', '-'),*/
    Ingreso = REPLACE(CONVERT(VARCHAR,SS_AD_OrdenAtencion.FechaCreacion,103), '.', '-') + ' ' + (CASE WHEN LEFT(CONVERT(VARCHAR, SS_AD_OrdenAtencion.FechaCreacion, 108), 2) > 24 THEN RIGHT('' + CAST(LEFT(CONVERT(VARCHAR, SS_AD_OrdenAtencion.FechaCreacion, 108), 2) - 24 AS VARCHAR), 2) + SUBSTRING(CONVERT(VARCHAR, SS_AD_OrdenAtencion.FechaCreacion, 108), 3,3)
    ELSE LEFT(CONVERT(VARCHAR, SS_AD_OrdenAtencion.FechaCreacion, 108), 5) END) + (CASE WHEN LEFT(CONVERT(VARCHAR, SS_AD_OrdenAtencion.FechaCreacion, 108), 2) > 24 THEN ' ' ELSE ' ' END),
    -- CONVERT(VARCHAR,SS_AD_OrdenAtencion.FechaCreacion,108),
            Egreso = isnull(REPLACE(CONVERT(VARCHAR,Egreso.FechaEgreso,103), '.', '-') + ' ' + (CASE WHEN LEFT(CONVERT(VARCHAR,Egreso.FechaEgreso,108), 2) > 24 THEN RIGHT('0' + CAST(LEFT(CONVERT(VARCHAR,Egreso.FechaEgreso,108), 2) - 24 AS VARCHAR), 2) + SUBSTRING(CONVERT(VARCHAR,Egreso.FechaEgreso,108), 3,3)
    ELSE LEFT(CONVERT(VARCHAR,Egreso.FechaEgreso,108), 5) END) , REPLACE(CONVERT(VARCHAR,SS_AD_OrdenAtencion.FechaAlta,103), '.', '-') + ' ' + (CASE WHEN LEFT(CONVERT(VARCHAR,SS_AD_OrdenAtencion.FechaAlta,108), 2) > 24 THEN RIGHT('0' + CAST(LEFT(CONVERT(VARCHAR,SS_AD_OrdenAtencion.FechaAlta,108), 2) - 24 AS VARCHAR), 2) + SUBSTRING(CONVERT(VARCHAR,SS_AD_OrdenAtencion.FechaAlta,108), 3,3)
    ELSE LEFT(CONVERT(VARCHAR,SS_AD_OrdenAtencion.FechaAlta,108), 5) END)),
    Destino = (CASE SS_AD_OrdenAtencion.TipoAltaMedica WHEN 1 THEN 'ALTA MEDICA' WHEN 2 THEN 'ALTA VOLUNTARIA' WHEN 5 THEN 'ALTA VOLUNTARIA' WHEN 6 THEN 'HOSPITALIZACION'ELSE 'No Registrado' END),
    --	cie10 = SS_GE_Diagnostico.CodigoDiagnostico,
    --	diagnostico = IsNULL(RTRIM(SS_GE_Diagnostico.Nombre),'NO REGISTRADO'),

    --	Tipo_Paciente_Grupo = (select CM_CO_TablaMaestroDetalle.Grupo from CM_CO_TablaMaestroDetalle where CM_CO_TablaMaestroDetalle.IdTablaMaestro = 106 and CM_CO_TablaMaestroDetalle.IdCodigo = SS_AD_OrdenAtencion.TipoPaciente),
        Tipo_Paciente = (select CM_CO_TablaMaestroDetalle.Nombre from CM_CO_TablaMaestroDetalle where CM_CO_TablaMaestroDetalle.IdTablaMaestro = 106 and CM_CO_TablaMaestroDetalle.IdCodigo = SS_AD_OrdenAtencion.TipoPaciente),
            
        aseguradora = (CASE CM_CO_TablaMaestroDetalle.IdCodigo WHEN 23 THEN CM_CO_ListaBaseTarifa.Nombre ELSE Aseguradora.NombreCompleto END)
        
        FROM SS_AD_OrdenAtencion WITH(NOLOCK) INNER JOIN SS_AD_OrdenAtencionDetalle WITH(NOLOCK) ON SS_AD_OrdenAtencionDetalle.IdOrdenAtencion = SS_AD_OrdenAtencion.IdOrdenAtencion
        LEFT JOIN SS_CE_ConsultaExterna WITH(NOLOCK) ON SS_CE_ConsultaExterna.IdOrdenAtencion = SS_AD_OrdenAtencionDetalle.IdOrdenAtencion
            AND SS_CE_ConsultaExterna.LineaOrdenAtencion = SS_AD_OrdenAtencionDetalle.Linea
            AND SS_CE_ConsultaExterna.IdConsultaExterna = SS_AD_OrdenAtencion.IdConsultaExternaPrincipal
        INNER JOIN PersonaMast Paciente WITH(NOLOCK) ON SS_AD_OrdenAtencion.IdPaciente = Paciente.Persona
        LEFT JOIN SS_GE_Paciente WITH(NOLOCK) ON SS_AD_OrdenAtencion.IdPaciente = SS_GE_Paciente.IdPaciente
        LEFT JOIN AC_Sucursal WITH(NOLOCK) ON SS_AD_OrdenAtencion.Sucursal = AC_Sucursal.Sucursal
        LEFT JOIN PersonaMast Medico WITH(NOLOCK) ON SS_CE_ConsultaExterna.Medico = Medico.Persona
        LEFT JOIN EmpleadoMast WITH(NOLOCK) ON SS_CE_ConsultaExterna.Medico = EmpleadoMast.Empleado
        LEFT JOIN SS_GE_Especialidad WITH(NOLOCK) ON SS_CE_ConsultaExterna.Especialidad = SS_GE_Especialidad.IdEspecialidad
        LEFT JOIN (SELECT SS_CE_ConsultaExterna.IdConsultaExterna, IdDiagnostico = MAX(SS_CE_ConsultaExternaDiagnostico.IdDiagnostico)
                    FROM SS_CE_ConsultaExterna WITH(NOLOCK) INNER JOIN SS_CE_ConsultaExternaDiagnostico WITH(NOLOCK) ON SS_CE_ConsultaExternaDiagnostico.IdConsultaExterna = SS_CE_ConsultaExterna.IdConsultaExterna
                    GROUP BY SS_CE_ConsultaExterna.IdConsultaExterna) AS ConsultaDiagnostico ON SS_CE_ConsultaExterna.IdConsultaExterna = ConsultaDiagnostico.IdConsultaExterna
        LEFT JOIN SS_CE_ConsultaExternaDiagnostico WITH(NOLOCK) ON SS_CE_ConsultaExternaDiagnostico.IdConsultaExterna = SS_CE_ConsultaExterna.IdConsultaExterna
            AND SS_CE_ConsultaExternaDiagnostico.IdDiagnostico = ConsultaDiagnostico.IdDiagnostico
        LEFT JOIN SS_GE_Diagnostico ON ConsultaDiagnostico.IdDiagnostico = SS_GE_Diagnostico.IdDiagnostico
        LEFT JOIN CM_CO_TablaMaestroDetalle WITH(NOLOCK) ON CM_CO_TablaMaestroDetalle.IdTablaMaestro = 106
            AND CM_CO_TablaMaestroDetalle.IdCodigo = SS_AD_OrdenAtencion.TipoPaciente
        LEFT JOIN PersonaMast Aseguradora WITH(NOLOCK) ON SS_AD_OrdenAtencion.IdEmpresaAseguradora = Aseguradora.Persona
        LEFT JOIN (SELECT CM_CA_Transaccion.IdOrdenAtencion, FechaEgreso = MAX(CM_CA_Transaccion.FechaCreacion)
                    FROM CM_CA_Transaccion WITH(NOLOCK)
                    WHERE CM_CA_Transaccion.EstadoDocumento IN (6, 7, 8)
                        AND CM_CA_Transaccion.IndicadorAperturaEmergencia = 3
                        AND CM_CA_Transaccion.GrupoTransaccion = 2
                    GROUP BY CM_CA_Transaccion.IdOrdenAtencion) AS Egreso ON SS_AD_OrdenAtencion.IdOrdenAtencion = Egreso.IdOrdenAtencion
        LEFT JOIN CM_CO_ListaBaseTarifa WITH(NOLOCK) ON CM_CO_ListaBaseTarifa.IdListaTarifa = SS_AD_OrdenAtencion.IdListaTarifa

        /*TABLA FINAL*/
        WHERE SS_AD_OrdenAtencion.TipoAtencion = 2
            AND SS_AD_OrdenAtencionDetalle.TipoOrdenAtencion IN(1,11,21)
        
        
            AND SS_AD_OrdenAtencion.Sucursal = '0001'
            AND (FORMAT(SS_AD_OrdenAtencion.FechaCreacion,'yyyyMMdd') = @fechaaterior
                 OR FORMAT(SS_AD_OrdenAtencion.FechaCreacion,'yyyyMMdd') = @fechaactual)
            AND (FORMAT(Egreso.FechaEgreso,'yyyyMMdd') = @fechaactual
                 OR Egreso.FechaEgreso Is NULL)
 AND SS_CE_ConsultaExterna.EstadoDocumento IN (1,2) 
 ORDER BY 3