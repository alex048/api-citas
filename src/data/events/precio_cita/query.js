module.exports =  {
  eventPricioCitas: `declare @ni_ImpCita numeric(12,2),
    @ni_Error int 
select @ni_ImpCita = 0.00
select @ni_Error = 0
exec SP_CMS_CITAS_PRECIO @sede, @tipoPaciente, @idTipoPrograma, @ni_ImpCita output, @ni_Error output
select @ni_ImpCita as precio
select @ni_Error as error
`,
  };