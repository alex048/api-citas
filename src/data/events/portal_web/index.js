'use strict';
const utils = require('../../utils');
const config = require('../../../../database/configdev');
const nodemailer = require("nodemailer");
const details = require("../../../../details.json");
const sql = require('mssql');
var moment = require("moment");

const emergenciaLima = async() => {
    var fechaactual = moment().format("YYYYMMDD");
    var fechaaterior = fechaactual - 1;
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('portal_web');
        const event = await pool.request()
                            .input('fechaaterior', sql.NVarChar, fechaaterior)
                            .input('fechaactual', sql.NVarChar, fechaactual)
                            .query(sqlQueries.eventSliderLima);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const quirurgicoLima = async() => {

    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('portal_web');
        const event = await pool.request().query(sqlQueries.eventSliderquirurgicoLima);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const ambulatorioLima = async() => {  
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('portal_web');
        const event = await pool.request().query(sqlQueries.eventAmbulatorioLima);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const emergenciaChorrillos = async() => {
    var fechaactual = moment().format("YYYYMMDD");
    var fechaaterior = fechaactual - 1;
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('portal_web');
        const event = await pool.request()
                            .input('fechaaterior', sql.NVarChar, fechaaterior)
                            .input('fechaactual', sql.NVarChar, fechaactual)
                            .query(sqlQueries.eventEmergenciaChorrillos);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const quirurgicoChorrillos = async() => {

    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('portal_web');
        const event = await pool.request().query(sqlQueries.eventQuirurgicoChorrillos);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const ambulatorioChorrillos = async() => {  
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('portal_web');
        const event = await pool.request().query(sqlQueries.eventAmbulatorioChorrillos);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const emergenciaSurco = async() => {
    var fechaactual = moment().format("YYYYMMDD");
    var fechaaterior = fechaactual - 1;
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('portal_web');
        const event = await pool.request()
                            .input('fechaaterior', sql.NVarChar, fechaaterior)
                            .input('fechaactual', sql.NVarChar, fechaactual)
                            .query(sqlQueries.eventEmergenciaSurco);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const quirurgicoSurco = async() => {

    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('portal_web');
        const event = await pool.request().query(sqlQueries.eventQuirurgicoSurco);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const ambulatorioSurco = async() => {  
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('portal_web');
        const event = await pool.request().query(sqlQueries.eventAmbulatorioSurco);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const getCIE10 = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('portal_web');
        const eventsList = await pool.request().query(sqlQueries.eventGetCIE10);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
const getHoraio = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('portal_web');
        const eventsList = await pool.request().query(sqlQueries.eventHorarios);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
const horarioList = async (data) => {
    try {
        var sqlQuery = ``;
        sqlQuery = ` SELECT DISTINCT
        EmpleadoMast.CMP,
      PersonaMast.NombreCompleto as Medico, 
      SS_CC_Horario.Sucursal,
      SS_GE_Especialidad.Nombre AS Nombre,
        PersonaMast.Sexo,
        URL = (CASE PersonaMast.Sexo WHEN 'M' THEN 'hombre.jpg' WHEN 'F' THEN 'mujer.jpg' END)
        FROM SS_CC_Horario
        INNER JOIN SS_GE_Especialidad ON SS_CC_Horario.IdEspecialidad = SS_GE_Especialidad.IdEspecialidad
        INNER JOIN PersonaMast ON SS_CC_Horario.Medico = PersonaMast.Persona
        INNER JOIN EmpleadoMast ON PersonaMast.Persona = EmpleadoMast.Empleado
        WHERE SS_CC_Horario.Periodo= '${data.periodo}'
        AND SS_CC_Horario.Estado='2'
       
                  `;
        if (data.fecha === null) {
        } else {
          switch (data.fecha) {
            case "Lunes":
              sqlQuery += ` and (CASE SS_CC_Horario.IndicadorLunes WHEN 2 THEN 'Lunes' END) = '${data.fecha}'`;
              break;
            case "Martes":
              sqlQuery += ` and (CASE SS_CC_Horario.IndicadorMartes WHEN 2 THEN 'Martes' END) = '${data.fecha}'`;
              break;
            case "Miercoles":
              sqlQuery += ` and (CASE SS_CC_Horario.IndicadorMiercoles WHEN 2 THEN 'Miercoles' END) = '${data.fecha}'`;
              break;
            case "Jueves":
              sqlQuery += ` and (CASE SS_CC_Horario.IndicadorJueves WHEN 2 THEN 'Jueves' END) = '${data.fecha}'`;
              break;
            case "Viernes":
              sqlQuery += ` and (CASE SS_CC_Horario.IndicadorViernes WHEN 2 THEN 'Viernes' END) = '${data.fecha}'`;
              break;
            case "Sabado":
              sqlQuery += ` and (CASE SS_CC_Horario.IndicadorSabado WHEN 2 THEN 'Sabado' END) = '${data.fecha}'`;
              break;
            case "Domingo":
              sqlQuery += ` and (CASE SS_CC_Horario.IndicadorViernes WHEN 2 THEN 'Domingo' END) = '${data.fecha}'`;
              break;

            default:
              break;
          }
        }
        sqlQuery += ` AND PersonaMast.NombreCompleto LIKE '%${data.nombremedico}%'`;

        if (data.especialidad != "" || data.especialidad != null) {
          sqlQuery += ` AND SS_GE_Especialidad.Nombre LIKE '%${data.especialidad}%' `;
        }
        var sedes = [];
        if (data.lima === "0001") {
          sedes.push(data.lima);
        }
        if (data.chorrillos === "0002") {
          sedes.push(data.chorrillos);
        }
        if (data.surco === "0004") {
          sedes.push(data.surco);
        }

        if (sedes.length > 0) {
          sqlQuery += ` AND SS_CC_Horario.Sucursal IN(${sedes.join(",")}) `;
        }

        let pool = await sql.connect(config.sql);
        const insertEvent = await pool.request().query(sqlQuery);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}
const getHoraioListD = async (data) => {
    try {
        var sqlQuery = ``;
        sqlQuery = `
        SELECT DISTINCT        
      EmpleadoMast.CMP,
        PersonaMast.NombreCompleto as Medico,
        SS_GE_Especialidad.Nombre AS Nombre,
        PersonaMast.Sexo,
        URL = (CASE PersonaMast.Sexo WHEN 'M' THEN 'hombre.jpg' WHEN 'F' THEN 'mujer.jpg' END),       
        Sucursal = (CASE SS_CC_Horario.Sucursal WHEN 0001 THEN 'Lima' WHEN 0002 THEN 'Chorrillos' WHEN 0004 THEN 'Surco' END),     
        `;
        if (data.fecha === null) {
          sqlQuery += ` SS_CC_Horario.IndicadorLunes as Lunes, 
          dia01 = (CASE SS_CC_Horario.IndicadorLunes WHEN 2 THEN 'Lunes' END),      
            SS_CC_Horario.IndicadorMartes as Martes,
            dia02 = (CASE SS_CC_Horario.IndicadorMartes WHEN 2 THEN 'Martes' END),
            SS_CC_Horario.IndicadorMiercoles as Miercoles,
            dia03 = (CASE SS_CC_Horario.IndicadorMiercoles WHEN 2 THEN 'Miercoles' END),
            SS_CC_Horario.IndicadorJueves as Jueves,
            dia04 = (CASE SS_CC_Horario.IndicadorJueves WHEN 2 THEN 'Jueves' END),
            SS_CC_Horario.IndicadorViernes as Viernes,
            dia05 = (CASE SS_CC_Horario.IndicadorViernes WHEN 2 THEN 'Viernes' END),
            SS_CC_Horario.IndicadorSabado as Sabado,
            dia06 = (CASE SS_CC_Horario.IndicadorSabado WHEN 2 THEN 'Sabado' END),`;
        } else {
          switch (data.fecha) {
            case "Lunes":
              sqlQuery += `   SS_CC_Horario.IndicadorLunes as Lunes, 
              dia01 = (CASE SS_CC_Horario.IndicadorLunes WHEN 2 THEN 'Lunes' END), `;
              break;
            case "Martes":
              sqlQuery += ` SS_CC_Horario.IndicadorMartes as Martes,
              dia02 = (CASE SS_CC_Horario.IndicadorMartes WHEN 2 THEN 'Martes' END),`;
              break;
            case "Miercoles":
              sqlQuery += ` SS_CC_Horario.IndicadorMiercoles as Miercoles,
              dia03 = (CASE SS_CC_Horario.IndicadorMiercoles WHEN 2 THEN 'Miercoles' END),`;
              break;
            case "Jueves":
              sqlQuery += ` SS_CC_Horario.IndicadorJueves as Jueves,
              dia04 = (CASE SS_CC_Horario.IndicadorJueves WHEN 2 THEN 'Jueves' END),`;
              break;
            case "Viernes":
              sqlQuery += ` SS_CC_Horario.IndicadorViernes as Viernes,
              dia05 = (CASE SS_CC_Horario.IndicadorViernes WHEN 2 THEN 'Viernes' END),`;
              break;
            case "Sabado":
              sqlQuery += `  SS_CC_Horario.IndicadorSabado as Sabado,
              dia06 = (CASE SS_CC_Horario.IndicadorSabado WHEN 2 THEN 'Sabado' END),`;
              break;
            default:
              break;
          }
        }

        sqlQuery += ` FORMAT(SS_CC_Horario.HoraInicio, 'dddd,','es') as dias,
        FORMAT(SS_CC_Horario.HoraInicio, 'hh:mm tt') as HorarioI,
        FORMAT(SS_CC_Horario.HoraFin, 'hh:mm tt') as HorarioF
        FROM SS_CC_Horario
        INNER JOIN SS_GE_Especialidad ON SS_CC_Horario.IdEspecialidad = SS_GE_Especialidad.IdEspecialidad
        INNER JOIN PersonaMast ON SS_CC_Horario.Medico = PersonaMast.Persona
        INNER JOIN EmpleadoMast ON PersonaMast.Persona = EmpleadoMast.Empleado
        WHERE SS_CC_Horario.Periodo= '${data.periodo}'`;

        if (data.fecha === null) {
        } else {
          switch (data.fecha) {
            case "Lunes":
              sqlQuery += ` and (CASE SS_CC_Horario.IndicadorLunes WHEN 2 THEN 'Lunes' END) = '${data.fecha}'`;
              break;
            case "Martes":
              sqlQuery += ` and (CASE SS_CC_Horario.IndicadorMartes WHEN 2 THEN 'Martes' END) = '${data.fecha}'`;
              break;
            case "Miercoles":
              sqlQuery += ` and (CASE SS_CC_Horario.IndicadorMiercoles WHEN 2 THEN 'Miercoles' END) = '${data.fecha}'`;
              break;
            case "Jueves":
              sqlQuery += ` and (CASE SS_CC_Horario.IndicadorJueves WHEN 2 THEN 'Jueves' END) = '${data.fecha}'`;
              break;
            case "Viernes":
              sqlQuery += ` and (CASE SS_CC_Horario.IndicadorViernes WHEN 2 THEN 'Viernes' END) = '${data.fecha}'`;
              break;
            case "Sabado":
              sqlQuery += ` and (CASE SS_CC_Horario.IndicadorSabado WHEN 2 THEN 'Sabado' END) = '${data.fecha}'`;
              break;
            case "Domingo":
              sqlQuery += ` and (CASE SS_CC_Horario.IndicadorViernes WHEN 2 THEN 'Domingo' END) = '${data.fecha}'`;
              break;

            default:
              break;
          }
        }

        var sedes = [];
        if (data.lima === "0001") {
          sedes.push(data.lima);
        }
        if (data.chorrillos === "0002") {
          sedes.push(data.chorrillos);
        }
        if (data.surco === "0004") {
          sedes.push(data.surco);
        }
        sqlQuery += `  AND SS_CC_Horario.Estado='2'       
        AND EmpleadoMast.CMP in (${data.responses})`;

        if (sedes.length > 0) {
          sqlQuery += ` AND SS_CC_Horario.Sucursal IN(${sedes.join(",")}) `;
        }

        sqlQuery += `    ORDER BY  FORMAT(SS_CC_Horario.HoraInicio, 'dddd,','es')  `;

        let pool = await sql.connect(config.sql);
        const eventsList = await pool.request().query(sqlQuery);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const sendMailContacto = async (data) => {
    
  try {
    var transporter = nodemailer.createTransport({
      //mail: "smtp",
      host: "mail.clubdelasalud.pe",
      port: 25,
      secure: false,
      auth: {
        user: details.email,
        pass: details.password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    var master = "webmaster@clubdelasalud.pe";
    //contactos@joyit.pe //,
    var mailOptions = {
      from: `'Clínica Maison de Santé' <webmaster@clubdelasalud.pe>`,
      to: `${data.mail}`,
      cc: `${data.cc}`,
      bcc: `${master}`,
      subject: `${data.subject}`,
      html: `
    <!DOCTYPE html>
    <html>
    <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
    /* CLIENT-SPECIFIC STYLES */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; }
    
    /* RESET STYLES */
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }
    
    /* MEDIA QUERIES */
    @media screen and (max-width: 480px) {
        .mobile-hide {
            display: none !important;
        }
        .mobile-center {
            text-align: center !important;
        }
    }
    
    /* ANDROID CENTER FIX */
    div[style*="margin: 16px 0;"] { margin: 0 !important; }
    </style>
    </head>
    <body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee">
    
    
    <table border="0" cellpadding="0" cellspacing="0" width="100%" >
        <tr>
            <td align="center" style="background-color: #eeeeee;" bgcolor="#eeeeee">  
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;  margin-top: 20px;">
          
                <tr>
                    <td align="center" style="padding: 35px 35px 20px 35px; background-color: #ffffff;" bgcolor="#ffffff">
                
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                    
                        <tr>
                            <td align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                                <p style="font-size: 16px; font-weight: 400; line-height: 24px; color: #777777;">
                                    Información registrada del formulario del portal institucional
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" style="padding-top: 20px;">
                                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                   
                                    <tr>
                                        <td width="100%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 10px 10px 5px 10px;">
                                        <span style="color: #000;font-weight: bold">Nombres:</span>  ${data.nombre}
                                        </td>                                   
                                    </tr>
                                    <tr>
                                        <td width="100%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                            <span style="color: #000;font-weight: bold">Apellidos:</span> ${data.apellido}
                                        </td>                                  
                                    </tr>
                                    <tr>
                                        <td width="100%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                           <span style="color: #000;font-weight: bold">Correo:</span>  ${data.correo}
                                        </td>
                                      
                                    </tr>
                                      <tr>
                                        <td width="100%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                           <span style="color: #000;font-weight: bold">Celular:</span>  ${data.celular}
                                        </td>                                   
                                    </tr>
                                      <tr>
                                        <td width="100%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                           <span style="color: #000;font-weight: bold">Teléfono Fijo:</span>  ${data.telefono}
                                        </td>                                  
                                    </tr>
                                      <tr>
                                        <td width="100%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                           <span style="color: #000;font-weight: bold">Motivo de Contacto:</span> ${data.motivoSelect}
                                        </td>                                    
                                    </tr>
                                     <tr>
                                        <td width="100%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                           <span style="color: #000;font-weight: bold">Detalle de Contacto:</span> ${data.observaciones}
                                        </td>                                  
                                    </tr>
                                     <tr>
                                        <td width="100%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                          <span style="color: #000;font-weight: bold">Acepta Recibir Información Adicional de Promociones:</span>  ${data.recibirInfo}
                                        </td>                                   
                                    </tr>
                                </table>
                            </td>
                        </tr>
                      
                    </table>            
                    </td>
                </tr>
                    
               
            </table>        
            </td>
        </tr>
    </table> 
    </body>
    </html>
    
    
    `,
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
       return res.status(500).end();
      } else {
        console.log("Email sent: " + info.response);
       return res.status(200).end();
      }
    });
  } catch (error) {
      return error.message;
  }
}

const sendMailPortalWeb = async (data) => {
    
  try {
    var transporter = nodemailer.createTransport({
      //mail: "smtp",
      host: "mail.clubdelasalud.pe",
      port: 25,
      secure: false,
      auth: {
        user: details.email,
        pass: details.password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  
    //contactos@joyit.pe //,
    var mailOptions = {
      from: `'Clínica Maison de Santé' <webmaster@clubdelasalud.pe>`,
      to: `${data.correo},${data.otCorreo}`,
      // bcc: `"abarrientos@clubdelasalud.pe","rlay@clubdelasalud.pe"`,
      bcc: `${data.correoatencion},"webmaster@clubdelasalud.pe","reclamos_ipress@clubdelasalud.pe","irodriguez@clubdelasalud.pe","abarrientos@clubdelasalud.pe"`,
      subject: `Ticket de Atencion | Portal Institucional | COD: ${data.idreclamo}  | CSALUD`,
      html: `<!DOCTYPE html>
      <html
        lang="en"
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office"
      >
        <head>
          <meta charset="utf-8" />
          <!-- utf-8 works for most cases -->
          <meta name="viewport" content="width=device-width" />
          <!-- Forcing initial-scale shouldn't be necessary -->
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <!-- Use the latest (edge) version of IE rendering engine -->
          <meta name="x-apple-disable-message-reformatting" />
          <!-- Disable auto-scale in iOS 10 Mail entirely -->
          <title></title>
          <!-- The title tag shows in email notifications, like Android 4.4. -->
      
          <link
            href="https://fonts.googleapis.com/css?family=Work+Sans:200,300,400,500,600,700"
            rel="stylesheet"
          />
      
          <!-- CSS Reset : BEGIN -->
          <style>
            html,
            body {
              margin: 0 auto !important;
              padding: 0 !important;
              height: 100% !important;
              width: 100% !important;
              background: #f1f1f1;
            }
      
            /* What it does: Stops email clients resizing small text. */
            * {
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
            }
      
            /* What it does: Centers email on Android 4.4 */
            div[style*="margin: 16px 0"] {
              margin: 0 !important;
            }
      
            /* What it does: Stops Outlook from adding extra spacing to tables. */
            table,
            td {
              mso-table-lspace: 0pt !important;
              mso-table-rspace: 0pt !important;
            }
      
            /* What it does: Fixes webkit padding issue. */
            table {
              border-spacing: 0 !important;
              border-collapse: collapse !important;
              table-layout: fixed !important;
              margin: 0 auto !important;
            }
      
            /* What it does: Uses a better rendering method when resizing images in IE. */
            img {
              -ms-interpolation-mode: bicubic;
            }
      
            /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
            a {
              text-decoration: none;
            }
      
            /* What it does: A work-around for email clients meddling in triggered links. */
            *[x-apple-data-detectors],  /* iOS */
          .unstyle-auto-detected-links *,
          .aBn {
              border-bottom: 0 !important;
              cursor: default !important;
              color: inherit !important;
              text-decoration: none !important;
              font-size: inherit !important;
              font-family: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
            }
      
            /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
            .a6S {
              display: none !important;
              opacity: 0.01 !important;
            }
      
            /* What it does: Prevents Gmail from changing the text color in conversation threads. */
            .im {
              color: inherit !important;
            }
      
            /* If the above doesn't work, add a .g-img class to any image in question. */
            img.g-img + div {
              display: none !important;
            }
      
            /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
            /* Create one of these media queries for each additional viewport size you'd like to fix */
      
            /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
            @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
              u ~ div .email-container {
                min-width: 320px !important;
              }
            }
            /* iPhone 6, 6S, 7, 8, and X */
            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
              u ~ div .email-container {
                min-width: 375px !important;
              }
            }
            /* iPhone 6+, 7+, and 8+ */
            @media only screen and (min-device-width: 414px) {
              u ~ div .email-container {
                min-width: 414px !important;
              }
            }
          </style>
      
          <!-- CSS Reset : END -->
      
          <!-- Progressive Enhancements : BEGIN -->
          <style>
      
                  .primary{
              background: #448ef6;
            }
            .bg_white{
              background: #ffffff;
            }
            .bg_light{
              background: #c9c0c0;
            }
            .bg_black{
              background: #236fa1;
            }
            .bg_dark{
              background: rgba(0,0,0,.8);
            }
            .email-section{
              padding:2.5em;
            }
      
            /*BUTTON*/
            .btn{
              padding: 5px 15px;
              display: inline-block;
            }
            .btn.btn-primary{
              border-radius: 30px;
              background: #448ef6;
              color: #ffffff;
            }
            .btn.btn-white{
              border-radius: 30px;
              background: #ffffff;
              color: #000000;
            }
            .btn.btn-white-outline{
              border-radius: 30px;
              background: transparent;
              border: 1px solid #fff;
              color: #fff;
            }
      
            h1,h2,h3,h4,h5,h6{
              font-family: 'Work Sans', sans-serif;
              color: #000000;
              margin-top: 0;
              font-weight: 400;
            }
      
            body{
              font-family: 'Work Sans', sans-serif;
              font-weight: 400;
              font-size: 15px;
              line-height: 1.8;
              color: rgba(0,0,0,.4);
            }
      
            a{
              color: #448ef6;
            }
      
            table{
            }
            /*LOGO*/
      
            .logo h1{
              margin: 0;
            }
            .logo h1 a{
              color: #000000;
              font-size: 20px;
              font-weight: 700;
              text-transform: uppercase;
              font-family: 'Poppins', sans-serif;
            }
      
            .navigation{
              padding: 0;
            }
            .navigation li{
              list-style: none;
              display: inline-block;;
              margin-left: 5px;
              font-size: 13px;
              font-weight: 500;
            }
            .navigation li a{
              color: rgba(0,0,0,.4);
            }
      
            /*HERO*/
            .hero{
              position: relative;
              z-index: 0;
            }
      
            .hero .overlay{
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              content: '';
              width: 100%;
              background: #000000;
              z-index: -1;
              opacity: .3;
            }
      
            .hero .text{
              color: rgba(255,255,255,.9);
            }
            .hero .text h2{
              color: #fff;
              font-size: 50px;
              margin-bottom: 0;
              font-weight: 300;
              line-height: 1;
            }
            .hero .text h2 span{
              font-weight: 600;
              color: #448ef6;
            }
      
      
            /*HEADING SECTION*/
            .heading-section{
            }
            .heading-section h2{
              color: #000000;
              font-size: 28px;
              margin-top: 0;
              line-height: 1.4;
              font-weight: 400;
            }
            .heading-section .subheading{
              margin-bottom: 20px !important;
              display: inline-block;
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 2px;
              color: rgba(0,0,0,.4);
              position: relative;
            }
            .heading-section .subheading::after{
              position: absolute;
              left: 0;
              right: 0;
              bottom: -10px;
              content: '';
              width: 100%;
              height: 2px;
              background: #448ef6;
              margin: 0 auto;
            }
      
            .heading-section-white{
              color: rgba(255,255,255,.8);
            }
            .heading-section-white h2{
              font-family:
              line-height: 1;
              padding-bottom: 0;
            }
            .heading-section-white h2{
              color: #ffffff;
            }
            .heading-section-white .subheading{
              margin-bottom: 0;
              display: inline-block;
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 2px;
              color: rgba(255,255,255,.4);
            }
      
      
            /*BLOG*/
            .text-services .meta{
              text-transform: uppercase;
              font-size: 14px;
              margin-bottom: 0;
              color: #615E5E !important;
            }
      
            /*FOOTER*/
      
            .footer{
              color: rgba(255,255,255,.5);
      
            }
            .footer .heading{
              color: #ffffff;
              font-size: 20px;
            }
            .footer ul{
              margin: 0;
              padding: 0;
            }
            .footer ul li{
              list-style: none;
              margin-bottom: 10px;
            }
            .footer ul li a{
              color: rgba(255,255,255,1);
            }
      
      
            @media screen and (max-width: 500px) {
      
      
            }
          </style>
        </head>
      
        <body
          width="100%"
          style="
            margin: 0;
            padding: 0 !important;
            mso-line-height-rule: exactly;
            background-color: #222222;
          "
        >
          <center style="width: 100%; background-color: #f1f1f1">
            <div
              style="
                display: none;
                font-size: 1px;
                max-height: 0px;
                max-width: 0px;
                opacity: 0;
                overflow: hidden;
                mso-hide: all;
                font-family: sans-serif;
              "
            >
              &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
            </div>
            <div style="max-width: 1000px; margin: 0 auto" class="email-container">
              <!-- BEGIN BODY -->
              <table
                align="center"
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                width="100%"
                style="margin: auto"
              >
                <tr>
                  <td
                    valign="top"
                    style="background-color: #236fa1"
                    style="padding: 1em 2.5em"
                  >
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                    >
                      <tr>
                        <td
                          class="logo"
                          style="text-align: center; padding-top: 15px"
                        >
                          <h4>
                            <a style="color: #fff"
                              >Ticket de Atención | Portal Institucional | COD:
                              ${data.idreclamo} | CSALUD</a
                            >
                          </h4>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- end tr -->
                <tr>
                  <td
                    valign="middle"
                    class="hero"
                    style="
                      background-image: url(images/bg_1.jpg);
                      background-size: cover;
                      background-color: #fff;
                    "
                  >
                    <table>
                      <tr>
                        <td>
                          <div
                            class="text"
                            style="padding: 0 2em; text-align: left; font-size: 14px"
                          >
                            <p style="color: black">
                              Este correo es la confirmación de que su amable
                              comunicación ha sido recibida correctamente. Le
                              informamos que por su seguridad se ha generado un número
                              Web temporal N° <strong>${data.idreclamo}</strong>. Una
                              vez que nuestro personal de Atención al Cliente ingrese
                              la información en nuestro Libro Virtual de Reclamaciones
                              (SISR), se generará el código definitivo de Reclamo, el
                              mismo que será remitido vía correo electrónico o podrá
                              recogerlo personalmente en nuestras oficinas de Atención
                              al Cliente. Estamos atendiendo inmediatamente sus
                              inquietudes con el objetivo de mejorar continuamente la
                              calidad de nuestro servicio, contando para ello con su
                              valioso aporte. Cuando se acerque personalmente al
                              Servicio de Atención al Cliente de la sede en la que fue
                              inicialmente atendido, nuestro personal podrá ubicar su
                              reclamo a través del número Web temporal, por el Código
                              de Reclamo SISR definitivo o por su nombre.
                              <br />Gracias por su valiosa colaboración.
                            </p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- end tr -->
                <tr>
                  <td style="background-color: #fff; padding: 1em">
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                    >
                      <tr>
                        <td
                          valign="top"
                          width="50%"
                          style="padding-top: 5px; padding-right: 10px"
                        >
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td class="text-services" style="text-align: center">
                                <h3 style="margin: 0px">FICHA CSALUD</h3>
                                <hr />
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                <h4 style="margin: 0px; background-color: #ececec">
                                  PERSONA AFECTADA
                                </h4>
                                <hr />
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Nombres Afectado : ${data.nombre}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Apellidos Afectado : ${data.apellidoPaterno}
                                ${data.apellidoMaterno}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Tipo Documento : ${data.tipoDocummento}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                DNI : ${data.numeroDocumento}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Razón Social : ${data.razonSocial}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                E-mail : ${data.correo}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Enviar Reclamo al correo registrado :
                                ${data.autorizaCorreo}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Teléfono Fijo : ${data.telefono}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Teléfono Celular : ${data.celular}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Distrito : ${data.distrito}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Domicilio : ${data.direccion}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                <hr />
                                <h4 style="margin: 0px; background-color: #ececec">
                                  REPRESENTANTE
                                </h4>
                                <hr />
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Nombres Reprensentante : ${data.otNombre}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Apellidos Representante: ${data.otPaterno}
                                ${data.otMaterno}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Parentesco : ${data.otParentesco}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Email Representante : ${data.otCorreo}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Teléfono : ${data.otTelefono}
                              </td>
                            </tr>
      
                            <tr>
                              <td class="text-services" style="text-align: left">
                                <hr />
                                <h4 style="margin: 0px; background-color: #ececec">
                                  DESCRIPCION
                                </h4>
                                <hr />
                              </td>
                            </tr>
      
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Fecha Reclamo : ${data.fecharegistro}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Lugar donde se atendió : ${data.sede}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Área Involucrada : ${data.areaAtendido}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Personal Involucrado : ${data.nombreAtendio}
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services" style="text-align: left">
                                Descripción del Reclamo: ${data.descripcion}
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    <hr />
                    <div
                      class="heading-section"
                      style="text-align: center; padding: 0 30px; padding-top: 10px"
                    >
                      <h3>AVISO LEGAL</h3>
                      <p style="font-size: 14px;">
                        La información contenida en este correo es propiedad de la
                        empresa, con carácter confidencial y privilegiado,
                        exclusivamente dirigida a su(s) destinatario(s). Está
                        prohibido su utilización o difusión sin una autorización
                        expresa. La empresa no se responsabiliza por el uso indebido
                        del presente medio. Si Ud. ha recibido este correo por error,
                        por favor, notifique al remitente y bórrelo.
                      </p>
                    </div>
                  </td>
                </tr>
                <!-- end: tr -->
                <!-- 1 Column Text + Button : END -->
              </table>
              <table
                align="center"
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                width="100%"
                style="margin: auto"
              >
                <tr>
                  <td
                    valign="middle"
                    style="background-color: #236fa1"
                    class="footer email-section"
                  >
                    <table>
                      <tr>
                        <td valign="top" width="33.333%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >                        
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </center>
        </body>
      </html>
      
      
    `,
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
       return res.status(500).end();
      } else {
        console.log("Email sent: " + info.response);
       return res.status(200).end();
      }
    });
  } catch (error) {
      return error.message;
  }
}
const validateToken = async (data) => {
  try {
    const body = data;
    const secret_key = process.env.SECRET_KEY;
    const token = body.googleresponsetoken;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
    fetch(url, { method: "post" })
      .then((response) => response.json())
      .then((google_response) => res.json({ google_response }))
      .catch((error) => res.json({ error }));
} catch (error) {
    console.log(error.message);
}
 
}

const getBirthay = async (data) => {
  try {
      var sqlQuery = `SELECT 
      EmpleadoMast.Empleado AS id_colaborador,
      CONCAT(RTRIM(PersonaMast.Nombres),' ',RTRIM(PersonaMast.ApellidoPaterno),' ',RTRIM(PersonaMast.ApellidoMaterno)) AS nombre,
      v_area = HR_Departamento.Descripcion,
      EmpleadoMast.CorreoInterno AS v_correo,
      COD_SUCURSAL = (CASE RTRIM(EmpleadoMast.Sucursal) WHEN '0001' THEN 'Lima' WHEN '0002' THEN 'Chorrillos' WHEN '0004' THEN 'Surco' END), 
      v_cargo =  HR_PuestoEmpresa.Descripcion,
      d_nacimiento = FORMAT(PersonaMast.FechaNacimiento, 'dd/MM'),
      v_genero = (CASE PersonaMast.Sexo WHEN 'M' THEN 'MA' WHEN 'F' THEN 'FE' END),
      estado = (CASE EmpleadoMast.EstadoEmpleado WHEN 2 THEN 'CE' WHEN 0 THEN 'AC' END)
      FROM EmpleadoMast 
      LEFT JOIN PersonaMast ON EmpleadoMast.Empleado = PersonaMast.Persona
      LEFT JOIN HR_Departamento ON EmpleadoMast.DepartamentoOperacional = HR_Departamento.Departamento
      LEFT JOIN HR_PuestoEmpresa ON EmpleadoMast.CodigoCargo = HR_PuestoEmpresa.CodigoPuesto
      LEFT JOIN AC_CostCenterMst ON EmpleadoMast.CentroCostos = AC_CostCenterMst.CostCenter 
      LEFT JOIN MA_MiscelaneosDetalle ON PersonaMast.TipoDocumento = MA_MiscelaneosDetalle.CodigoElemento
      WHERE 
      IsNull(EmpleadoMast.TipoPlanilla, 'OT') <> 'OT'
      AND EmpleadoMast.EstadoEmpleado='0'
      AND MA_MiscelaneosDetalle.CodigoTabla = 'TIPODOCI'
      AND RTRIM(PersonaMast.Nombres) LIKE '%${data.nombres}%'
     `;
      if (data.type === 1) {
      sqlQuery += `  AND FORMAT(PersonaMast.FechaNacimiento, 'dd/MM') = '${data.dia_mes}' `;
      } else {
      sqlQuery += `   AND FORMAT(PersonaMast.FechaNacimiento, 'MM') = '${data.dia_mes}'  `;
      }
      let pool = await sql.connect(config.sql);
      const insertEvent = await pool.request().query(sqlQuery);
      return insertEvent.recordset;
  } catch (error) {
      return error.message;
  }
}

module.exports = {
    getCIE10,
    getHoraio,
    horarioList,
    getHoraioListD,
    emergenciaLima,
quirurgicoLima,
ambulatorioLima,
emergenciaChorrillos,
quirurgicoChorrillos,
ambulatorioChorrillos,
emergenciaSurco,
quirurgicoSurco,
ambulatorioSurco,
sendMailContacto,
sendMailPortalWeb,
validateToken,
getBirthay
}