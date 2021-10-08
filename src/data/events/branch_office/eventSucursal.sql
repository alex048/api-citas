SELECT  id = RTRIM(Sucursal)
      ,descripcionLocal = RTRIM(DescripcionLocal)
      ,direccion= RTRIM(DIRECCION),
      RTRIM(imagen_sede) as imagen,
      RTRIM(estado_atencion_amb) as estado
  FROM [SpringSaludDesarrollo3].[dbo].[AC_Sucursal] where Sucursal IN('0001','0002','0004')