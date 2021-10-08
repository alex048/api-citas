SELECT COUNT ( DISTINCT PersonaMast.Documento ) as existe FROM [dbo].[PersonaMast]
                            WHERE ( ( PersonaMast.TipoDocumento ='D'
                            AND PersonaMast.Documento =@documento
                            AND PersonaMast.TipoDocumento IS NOT NULL
                            AND PersonaMast.Documento IS NOT NULL ) OR  ( PersonaMast.Documento =@documento
                            AND PersonaMast.Documento IS NOT NULL ))
                            AND PersonaMast.Persona <> -1 AND PersonaMast.Estado ='A'