SELECT codigoElemento = RTRIM(CodigoElemento),
DescripcionLocal as descripcionLocal,
DescripcionExtranjera as descripcionExtranjera,DataTexto as dataTexto 
FROM MA_MiscelaneosDetalle 
WHERE AplicacionCodigo  ='CW' 
and CodigoTabla = 'POLITICAS' AND CodigoElemento='POLITICAS'