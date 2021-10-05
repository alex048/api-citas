INSERT INTO [dbo].[CW_USUARIO]
    (
        [Usuario],
        [Nombre],
        [Clave],
        [SQLLogin],
        [Estado],
        [UltimoUsuario],
		[Persona],
        [FechaRegistro],
        [isChangePassword]
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
        @FechaRegistro,
        @isChangePassword
    )
SELECT  max(FechaRegistro) AS fecha FROM [CW_USUARIO]