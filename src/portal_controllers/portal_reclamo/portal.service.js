const pool = require('../../../database/configportal');
//IDENVIO	FECHA_REGISTRO	HORA_REGISTRO	FECHA_ENVIO	HORA_ENVIO	NORDER	CANAL	ESTADO
module.exports = {
  createReclamo: (data, callBack) => {
    console.log(data);
    pool.query(
      `INSERT INTO libro_reclamos (n_nombre_afil, n_apellidos_afil, n_apellido_materno_afil,v_nombre_completo, n_domicilio_afil,n_distrito_afil,
	    n_tel_fij_afil, n_tel_cel_afil, n_tipo_documento_afil, n_dni_afil, n_razon_social_afil, n_envio_correo_afil, n_nombres_repre,
	    n_apellidos_repre, n_apellido_materno_repre, n_email_repre, n_telf_repre, n_direccion_repre, n_distrito_repre, v_email_afi,
        v_parentesco, d_fecha_reclamo, v_lugar, v_area, v_personal_involucrado, v_descripcion, v_estado, d_fecha_reg, v_ip)
         VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.nombre,
        data.apellidoPaterno,
        data.apellidoMaterno,
        data.nombre_completo,
        data.direccion,
        data.distrito,
        data.telefono,
        data.celular,
        data.tipoDocummento,
        data.numeroDocumento,
        data.razonSocial,
        data.autorizaCorreo,
        data.otNombre,
        data.otPaterno,
        data.otMaterno,
        data.otCorreo,
        data.otTelefono,
        data.otDireccion,
        data.otDistrito,
        data.correo,
        data.otParentesco,
        data.fechareclamo,
        data.sede,
        data.areaAtendido,
        data.nombreAtendio,
        data.descripcion,
        data.estado,
        data.fecharegistro,
        data.ip,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },
};
