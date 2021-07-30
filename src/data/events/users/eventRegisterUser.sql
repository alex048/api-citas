INSERT INTO [dbo].[CW_USUARIO]
    (
        [Usuario],
        [Nombre],
        [Clave],
        [SQLLogin],
        [Estado],
        [UltimoUsuario],
		[Persona],
        [FechaRegistro]
    )
VALUES
    (
        @username,
        @names,
        @password,
        @sqllogin,
        @state,
        @registerUser,
        @person,
        @FechaRegistro
    )
SELECT  max(FechaRegistro) AS fecha FROM [CW_USUARIO]