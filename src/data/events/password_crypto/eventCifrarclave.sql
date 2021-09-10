DECLARE @nn VARCHAR(40)
EXEC @nn  = "dbo"."FN_CMS_cifrarclave" @password
select @nn as password