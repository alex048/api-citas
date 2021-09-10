DECLARE @nn VARCHAR(40)
EXEC @nn  = "dbo"."FN_CMS_descifrarclaveWeb" @usuario @password
select @nn as status