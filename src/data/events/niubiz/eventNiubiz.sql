INSERT INTO  [dbo].[CMS_SW_NIUBIZ_LOG] (
    [id_operaciones],
    [id_cita],
    [status],
    [cabecera],
    [fecha_creacion]
    )
VALUES (
    @id_operaciones,
    @id_cita,
    @status,
    @cabecera,
    @fecha_creacion
)