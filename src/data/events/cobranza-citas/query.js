module.exports =  {
    cobranza: `declare @ni_Error int
    select @ni_Error = 0
    exec SP_CMS_CITAS_PAGO_CITA @IdCita, @TipoPaciente, @IdTipoPrograma, @IdPrograma, @IndBolFac, @IdClienteFac, @ImpCita, @TipoTarjeta,
    @NumeroTarjeta, @Usuario,  @ni_Error output
    select @ni_Error as status`,
  };
  