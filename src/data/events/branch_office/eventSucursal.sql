
SELECT id = RTRIM(Sucursal)
      ,descripcionLocal = RTRIM(DescripcionLocal)
      ,direccion= RTRIM(DIRECCION)
  FROM [SpringSaludDesarrollo3].[dbo].[AC_Sucursal] where Sucursal IN('0001','0002','0004')