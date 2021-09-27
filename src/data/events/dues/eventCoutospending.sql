select a.IdPrograma, a.Cuota, a.PeriodoReal, a.FechaVencimiento, a.FechaPago, a.Moneda, a.Monto

from SS_PG_ProgramaCuota a

where a.IdPrograma in (select b.IdPrograma

   from SS_PG_Programa b,

        SS_PG_TipoPrograma c,

        SS_PG_ProgramaBeneficiario d,

        PersonaMast e

  where e.persona = d.IdPaciente

    and d.IdPrograma = b.IdPrograma

    and c.IdTipoPrograma = b.IdTipoPrograma

    and b.EstadoDocumento in (3, 4, 8)

    and c.TipoPlan = 1

    and e.DocumentoIdentidad = @documento) --Nro. de documento

and a.TipoCuota = 1

and a.Situacion = 2