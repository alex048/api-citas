SELECT DISTINCT 
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
AND LTRIM(RTRIM(beneficiario.Documento)) = @Documento