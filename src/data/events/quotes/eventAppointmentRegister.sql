declare @ni_Error int
select @ni_Error = 0
exec SP_CMS_CITAS_REGISTRA @IdHorario, @idPaciente, @fechaCita, @usuario, @ni_Error output
select @ni_Error as error