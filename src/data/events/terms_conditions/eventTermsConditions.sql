SELECT CodigoElemento = RTRIM(CodigoElemento),DescripcionLocal,DescripcionExtranjera,DataTexto 
FROM MA_MiscelaneosDetalle 
WHERE AplicacionCodigo  ='CW' 
and CodigoTabla = 'POLITICAS'