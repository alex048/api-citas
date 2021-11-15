module.exports =  {
  eventTermsConditions: `SELECT codigoElemento = RTRIM(CodigoElemento),
  RTRIM(DescripcionLocal) as descripcionLocal,
  RTRIM(DescripcionExtranjera) as descripcionExtranjera,DataTexto as dataTexto 
  FROM MA_MiscelaneosDetalle 
  WHERE AplicacionCodigo  ='CW' 
  and CodigoTabla = 'POLITICAS' AND CodigoElemento='POLITICAS'`, 
  };