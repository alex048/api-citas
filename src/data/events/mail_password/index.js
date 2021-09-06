'use strict';
const nodemailer = require("nodemailer");
const details = require("../../../../details.json");
// https://www.maisondesante.org.pe/wp-content/uploads/2021/08/logomaison.png
// https://www.maisondesante.org.pe/wp-content/uploads/2021/07/CMS_155x65.png
const sendMailCitas = async (data) => {
    
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
      subject: `${data.subject}`,
      html: `
      <!DOCTYPE html>
<html
  lang="en"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <title></title>
    <meta charset="utf-8" />
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <!--[if mso
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:PixelsPerInch>96</o:PixelsPerInch
          ><o:AllowPNG /></o:OfficeDocumentSettings></xml
    ><![endif]-->
    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Roboto"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
    <style>
      * {
        box-sizing: border-box;
      }
      th.column {
        padding: 0;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }
      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }
      p {
        line-height: inherit;
      }
      @media (max-width: 670px) {
        .icons-inner {
          text-align: center;
        }
        .icons-inner td {
          margin: 0 auto;
        }
        .row-content {
          width: 100% !important;
        }
        .stack .column {
          width: 100%;
          display: block;
        }
      }
    </style>
  </head>
  <body
    style="
      background-color: #fff;
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    "
  >
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="nl-container"
      role="presentation"
      style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #fff"
      width="100%"
    >
      <tbody>
        <tr>
          <td>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-1"
              role="presentation"
              style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                background-color: #fff;
              "
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #fff;
                      "
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <th
                            class="column"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="15"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td>
                                  <div
                                    style="
                                      font-family: Tahoma, Verdana, sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: Roboto, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        color: #0a0a0a;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p style="margin: 0">
                                        <span style="font-size: 16px"
                                          ><strong
                                            >Estimado(a) Sr (a)</strong
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-2"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="mso-table-lspace: 0; mso-table-rspace: 0"
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <th
                            class="column"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td>
                                  <div
                                    style="
                                      font-family: Tahoma, Verdana, sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: Roboto, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        color: #555;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p style="margin: 0">
                                        <strong>@NOMBRE_DESTINO</strong> le
                                        recordamos que tiene una <strong
                                          >cita programada</strong
                                        > para el día @FECHA_CITA
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-3"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="mso-table-lspace: 0; mso-table-rspace: 0"
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <th
                            class="column"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  style="
                                    padding-bottom: 5px;
                                    padding-left: 15px;
                                    padding-right: 15px;
                                    padding-top: 15px;
                                  "
                                >
                                  <div
                                    style="
                                      font-family: Tahoma, Verdana, sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: Roboto, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        color: #000;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p style="margin: 0; font-size: 14px">
                                        <span style="font-size: 14px"
                                          ><strong
                                            ><span style=""
                                              >Médico             :
                                              @NOMBRE_MEDICO</span
                                            ></strong
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  style="
                                    padding-bottom: 5px;
                                    padding-left: 15px;
                                    padding-right: 15px;
                                    padding-top: 10px;
                                  "
                                >
                                  <div
                                    style="
                                      font-family: Tahoma, Verdana, sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: Roboto, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        color: #000;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p style="margin: 0; font-size: 14px">
                                        <span style="font-size: 14px"
                                          ><strong
                                            ><span style=""
                                              >Especialidad   :
                                              @NOMBRE_MEDICO</span
                                            ></strong
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  style="
                                    padding-bottom: 5px;
                                    padding-left: 15px;
                                    padding-right: 15px;
                                    padding-top: 10px;
                                  "
                                >
                                  <div
                                    style="
                                      font-family: Tahoma, Verdana, sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: Roboto, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        color: #000;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p style="margin: 0; font-size: 14px">
                                        <span style="font-size: 14px"
                                          ><strong
                                            ><span style=""
                                              >Consultorio     :
                                              @CONSULTORIO</span
                                            ></strong
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  style="
                                    padding-bottom: 5px;
                                    padding-left: 15px;
                                    padding-right: 15px;
                                    padding-top: 10px;
                                  "
                                >
                                  <div
                                    style="
                                      font-family: Tahoma, Verdana, sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: Roboto, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        color: #000;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p style="margin: 0; font-size: 14px">
                                        <span style="font-size: 14px"
                                          ><strong
                                            ><span style=""
                                              >Día                    :
                                              @FECHA_CITA</span
                                            ></strong
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  style="
                                    padding-bottom: 5px;
                                    padding-left: 15px;
                                    padding-right: 15px;
                                    padding-top: 10px;
                                  "
                                >
                                  <div
                                    style="
                                      font-family: Tahoma, Verdana, sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: Roboto, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        color: #000;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p style="margin: 0; font-size: 14px">
                                        <span style="font-size: 14px"
                                          ><strong
                                            ><span style="">
                                              Hora                 :
                                              @FECHA_HORA</span
                                            ></strong
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  style="
                                    padding-bottom: 5px;
                                    padding-left: 15px;
                                    padding-right: 15px;
                                    padding-top: 10px;
                                  "
                                >
                                  <div
                                    style="
                                      font-family: Tahoma, Verdana, sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: Roboto, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        color: #000;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p style="margin: 0; font-size: 14px">
                                        <span style="font-size: 14px"
                                          ><strong
                                            ><span style=""
                                              >Sede                 :
                                              @SUCURSAL</span
                                            ></strong
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  style="
                                    padding-bottom: 10px;
                                    padding-left: 15px;
                                    padding-right: 15px;
                                    padding-top: 10px;
                                  "
                                >
                                  <div
                                    style="
                                      font-family: Tahoma, Verdana, sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: Roboto, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        color: #000;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p style="margin: 0; font-size: 14px">
                                        <span style="font-size: 14px"
                                          ><strong
                                            ><span style=""
                                              >Dirección         :
                                               @DIRECCION</span
                                            ></strong
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-4"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="mso-table-lspace: 0; mso-table-rspace: 0"
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <th
                            class="column"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="15"
                              cellspacing="0"
                              class="divider_block"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                              width="100%"
                            >
                              <tr>
                                <td>
                                  <div align="center">
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0;
                                        mso-table-rspace: 0;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="divider_inner"
                                          style="
                                            font-size: 1px;
                                            line-height: 1px;
                                            border-top: 0 solid #bbb;
                                          "
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-5"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="mso-table-lspace: 0; mso-table-rspace: 0"
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <th
                            class="column"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="15"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td>
                                  <div
                                    style="
                                      font-family: Tahoma, Verdana, sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: Roboto, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        color: #393d47;
                                        line-height: 1.5;
                                      "
                                    >
                                      <p style="margin: 0">
                                        Agradeceríamos estar presente <strong
                                          >en el consultorio 20 minutos antes de
                                          su cita. </strong
                                        >
                                        Si no puede asistir a su cita, anúlela
                                        vía correo escribiendo al buzón
                                        anulacioncitas@clubdelasalud.pe
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-alt: 21px;
                                        "
                                      >
                                        <br />
                                      </p>
                                      <p style="margin: 0">
                                        Si eres asegurado o afiliado a algún
                                        plan de salud, serán aplicables los
                                        términos, condiciones, restricciones,
                                        coberturas y exclusiones detalladas en
                                        su póliza o plan de salud.
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-alt: 21px;
                                        "
                                      >
                                        <br />
                                      </p>
                                      <p style="margin: 0">
                                        Por seguridad y cumpliendo las
                                        disposiciones normativas debe acudir
                                        solo el paciente, salvo requiera el
                                        apoyo de un acompañante. Es obligatorio
                                        el uso de mascarilla y protector facial
                                        (Hay forma que sea opcional? ya que al
                                        terminar la pandemia ya no debería
                                      </p>
                                      <p style="margin: 0">de aparecer).</p>
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-alt: 21px;
                                        "
                                      >
                                        <br />
                                      </p>
                                      <p style="margin: 0">
                                        Muchas gracias por su preferencia
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-6"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="mso-table-lspace: 0; mso-table-rspace: 0"
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <th
                            class="column"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="15"
                              cellspacing="0"
                              class="divider_block"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                              width="100%"
                            >
                              <tr>
                                <td>
                                  <div align="center">
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0;
                                        mso-table-rspace: 0;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="divider_inner"
                                          style="
                                            font-size: 1px;
                                            line-height: 1px;
                                            border-top: 0 solid #bbb;
                                          "
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-7"
              role="presentation"
              style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                background-color: #010153;
              "
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #010153;
                      "
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <th
                            class="column"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                              width="100%"
                            >
                              <tr>
                                <td
                                  style="
                                    width: 100%;
                                    padding-right: 0;
                                    padding-left: 0;
                                    padding-top: 5px;
                                  "
                                >
                                  <div align="center" style="line-height: 10px">
                                    <img
                                      src="images/CMS_155x65.png"
                                      style="
                                        display: block;
                                        height: auto;
                                        border: 0;
                                        width: 163px;
                                        max-width: 100%;
                                      "
                                      width="163"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td>
                                  <div style="font-family: Arial, sans-serif">
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: 'Helvetica Neue', Helvetica,
                                          Arial, sans-serif;
                                        color: #fff;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p style="margin: 0; text-align: center">
                                        <strong>
                                          Clínicas Maison de Santé</strong
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="html_block"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                              width="100%"
                            >
                              <tr>
                                <td style="padding-bottom: 5px">
                                  <div
                                    align="center"
                                    style="
                                      font-family: Arial, Helvetica Neue,
                                        Helvetica, sans-serif;
                                    "
                                  >
                                    <p>
                                      <span style="font: 20px; color: #fff"
                                        >Visite nuestra página web para
                                        enterarse de mas servicios
                                        <a
                                          href="https://www.maisondesante.org.pe"
                                          style="color: #ffb200"
                                          target="_blank"
                                          >www.maisondesante.org.pe</a
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End -->
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

const sendNewAcountUserPassword = async (data) => {

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
      subject: `${data.subject}`,
      html: `
      <!DOCTYPE html>
<html
  lang="en"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <title></title>
    <meta charset="utf-8" />
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <!--[if mso
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:PixelsPerInch>96</o:PixelsPerInch
          ><o:AllowPNG /></o:OfficeDocumentSettings></xml
    ><![endif]-->
    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Roboto"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
    <style>
      * {
        box-sizing: border-box;
      }
      th.column {
        padding: 0;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }
      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }
      p {
        line-height: inherit;
      }
      @media (max-width: 670px) {
        .icons-inner {
          text-align: center;
        }
        .icons-inner td {
          margin: 0 auto;
        }
        .row-content {
          width: 100% !important;
        }
        .stack .column {
          width: 100%;
          display: block;
        }
      }
    </style>
  </head>
  <body
    style="
      background-color: #fff;
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    "
  >
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="nl-container"
      role="presentation"
      style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #fff"
      width="100%"
    >
      <tbody>
        <tr>
          <td>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-1"
              role="presentation"
              style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                background-color: #fff;
              "
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #fff;
                      "
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <th
                            class="column"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="15"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td>
                                  <div
                                    style="
                                      font-family: Tahoma, Verdana, sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: Roboto, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        color: #0a0a0a;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p style="margin: 0">
                                        <span style="font-size: 16px"
                                          ><strong
                                            >Estimado(a) Sr (a)</strong
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-2"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="mso-table-lspace: 0; mso-table-rspace: 0"
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <th
                            class="column"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td>
                                  <div
                                    style="
                                      font-family: Tahoma, Verdana, sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: Roboto, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        color: #555;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p style="margin: 0">
                                        @NOMBRE_PACIENTE, este correo es para
                                        notificarle la creación de una cuenta en
                                        la Aplicación de Citas . Su código de
                                        usuario es @DOCUMENTO y su contraseña:
                                        @CODIGO_PASSWORD
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-3"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="mso-table-lspace: 0; mso-table-rspace: 0"
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <th
                            class="column"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td>
                                  <div
                                    style="
                                      font-family: Tahoma, Verdana, sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: Roboto, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        color: #555;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p style="margin: 0">
                                        Saludos cordiales.
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-4"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="mso-table-lspace: 0; mso-table-rspace: 0"
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <th
                            class="column"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="15"
                              cellspacing="0"
                              class="divider_block"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                              width="100%"
                            >
                              <tr>
                                <td>
                                  <div align="center">
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0;
                                        mso-table-rspace: 0;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="divider_inner"
                                          style="
                                            font-size: 1px;
                                            line-height: 1px;
                                            border-top: 0 solid #bbb;
                                          "
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-5"
              role="presentation"
              style="
                mso-table-lspace: 0;
                mso-table-rspace: 0;
                background-color: #010153;
              "
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #010153;
                      "
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <th
                            class="column"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                              width="100%"
                            >
                              <tr>
                                <td
                                  style="
                                    width: 100%;
                                    padding-right: 0;
                                    padding-left: 0;
                                    padding-top: 5px;
                                  "
                                >
                                  <div align="center" style="line-height: 10px">
                                    <img
                                      src="images/CMS_155x65.png"
                                      style="
                                        display: block;
                                        height: auto;
                                        border: 0;
                                        width: 163px;
                                        max-width: 100%;
                                      "
                                      width="163"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td>
                                  <div style="font-family: Arial, sans-serif">
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: 'Helvetica Neue', Helvetica,
                                          Arial, sans-serif;
                                        color: #fff;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p style="margin: 0; text-align: center">
                                        <strong
                                          >Clínicas Maison de Santé</strong
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="html_block"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                              width="100%"
                            >
                              <tr>
                                <td style="padding-bottom: 5px">
                                  <div
                                    align="center"
                                    style="
                                      font-family: Arial, Helvetica Neue,
                                        Helvetica, sans-serif;
                                    "
                                  >
                                    <p>
                                      <span style="font: 20px; color: #fff"
                                        >Visite nuestra página web para
                                        enterarse de mas servicios
                                        <a
                                          href="https://www.maisondesante.org.pe"
                                          style="color: #ffb200"
                                          target="_blank"
                                          >www.maisondesante.org.pe</a
                                        ></span
                                      >
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End -->
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

const sendValidateMailLinkPassword = async (data) => {
    
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
      subject: `${data.subject}`,
      html: `
      <!DOCTYPE html>
      <html
        lang="en"
        xmlns:o="urn:schemas-microsoft-com:office:office"
        xmlns:v="urn:schemas-microsoft-com:vml"
      >
        <head>
          <title></title>
          <meta charset="utf-8" />
          <meta content="width=device-width,initial-scale=1" name="viewport" />
          <!--[if mso
            ]><xml
              ><o:OfficeDocumentSettings
                ><o:PixelsPerInch>96</o:PixelsPerInch
                ><o:AllowPNG /></o:OfficeDocumentSettings></xml
          ><![endif]-->
          <!--[if !mso]><!-->
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
            type="text/css"
          />
          <!--<![endif]-->
          <style>
            * {
              box-sizing: border-box;
            }
            th.column {
              padding: 0;
            }
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
            }
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
            }
            p {
              line-height: inherit;
            }
            @media (max-width: 670px) {
              .icons-inner {
                text-align: center;
              }
              .icons-inner td {
                margin: 0 auto;
              }
              .row-content {
                width: 100% !important;
              }
              .stack .column {
                width: 100%;
                display: block;
              }
            }
          </style>
        </head>
        <body
          style="
            background-color: #fff;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
          "
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="nl-container"
            role="presentation"
            style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #fff"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-1"
                    role="presentation"
                    style="
                      mso-table-lspace: 0;
                      mso-table-rspace: 0;
                      background-color: #fff;
                    "
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              background-color: #fff;
                            "
                            width="650"
                          >
                            <tbody>
                              <tr>
                                <th
                                  class="column"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="text_block"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 15px;
                                          padding-right: 15px;
                                          padding-top: 15px;
                                        "
                                      >
                                        <div
                                          style="
                                            font-family: Tahoma, Verdana, sans-serif;
                                          "
                                        >
                                          <div
                                            style="
                                              font-size: 14px;
                                              font-family: Roboto, Tahoma, Verdana,
                                                Segoe, sans-serif;
                                              color: #0a0a0a;
                                              line-height: 1.2;
                                            "
                                          >
                                            <p style="margin: 0">
                                              <span style="font-size: 16px"
                                                ><strong
                                                  >Estimado(a) Sr (a)</strong
                                                ></span
                                              >
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="html_block"
                                    role="presentation"
                                    style="mso-table-lspace: 0; mso-table-rspace: 0"
                                    width="100%"
                                  >
                                    <tr>
                                      <td style="padding-bottom: 5px">
                                        <div
                                          align="center"
                                          style="
                                            font-family: Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                          "
                                        >
                                          <div
                                            style="text-align: justify; padding: 10px"
                                          >
                                            <span style="color: rgb(0, 51, 51)"
                                              ><span style="font-style: italic"
                                                ><span style="font-weight: bold"
                                                  >@NOMBRE_DESTINO</span
                                                >, este correo es para indicarle que
                                                ingrese al link de recuperación de
                                                contraseña la cual es:
                                              </span></span
                                            ><span style="color: rgb(0, 51, 51)"
                                              ><span style="font-style: italic"
                                                ><span style="color: rgb(0, 51, 51)"
                                                  ><span style="font-style: italic"
                                                    ><span style="font-weight: bold"
                                                      ><a
                                                        href="http://190.116.43.122:8080/CitasWeb/#/cambio/@RECUPERAR_LINK"
                                                        >@NOMBRE_SYS</a
                                                      ></span
                                                    ></span
                                                  ></span
                                                >.</span
                                              ></span
                                            >
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-2"
                    role="presentation"
                    style="mso-table-lspace: 0; mso-table-rspace: 0"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="mso-table-lspace: 0; mso-table-rspace: 0"
                            width="650"
                          >
                            <tbody>
                              <tr>
                                <th
                                  class="column"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="text_block"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td>
                                        <div
                                          style="
                                            font-family: Tahoma, Verdana, sans-serif;
                                          "
                                        >
                                          <div
                                            style="
                                              font-size: 14px;
                                              font-family: Roboto, Tahoma, Verdana,
                                                Segoe, sans-serif;
                                              color: #555;
                                              line-height: 1.2;
                                            "
                                          >
                                            <p style="margin: 0">
                                              Saludos cordiales.
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-3"
                    role="presentation"
                    style="mso-table-lspace: 0; mso-table-rspace: 0"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="mso-table-lspace: 0; mso-table-rspace: 0"
                            width="650"
                          >
                            <tbody>
                              <tr>
                                <th
                                  class="column"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="15"
                                    cellspacing="0"
                                    class="divider_block"
                                    role="presentation"
                                    style="mso-table-lspace: 0; mso-table-rspace: 0"
                                    width="100%"
                                  >
                                    <tr>
                                      <td>
                                        <div align="center">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0;
                                              mso-table-rspace: 0;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 0 solid #bbb;
                                                "
                                              >
                                                <span></span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-4"
                    role="presentation"
                    style="
                      mso-table-lspace: 0;
                      mso-table-rspace: 0;
                      background-color: #010153;
                    "
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              background-color: #010153;
                            "
                            width="650"
                          >
                            <tbody>
                              <tr>
                                <th
                                  class="column"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="image_block"
                                    role="presentation"
                                    style="mso-table-lspace: 0; mso-table-rspace: 0"
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        style="
                                          width: 100%;
                                          padding-right: 0;
                                          padding-left: 0;
                                          padding-top: 5px;
                                        "
                                      >
                                        <div align="center" style="line-height: 10px">
                                          <img
                                            src="images/CMS_155x65.png"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                              width: 163px;
                                              max-width: 100%;
                                            "
                                            width="163"
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="text_block"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td>
                                        <div style="font-family: Arial, sans-serif">
                                          <div
                                            style="
                                              font-size: 14px;
                                              font-family: 'Helvetica Neue', Helvetica,
                                                Arial, sans-serif;
                                              color: #fff;
                                              line-height: 1.2;
                                            "
                                          >
                                            <p style="margin: 0; text-align: center">
                                              <strong
                                                >Clínicas Maison de Santé</strong
                                              >
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="html_block"
                                    role="presentation"
                                    style="mso-table-lspace: 0; mso-table-rspace: 0"
                                    width="100%"
                                  >
                                    <tr>
                                      <td style="padding-bottom: 5px">
                                        <div
                                          align="center"
                                          style="
                                            font-family: Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                          "
                                        >
                                          <p>
                                            <span style="font: 20px; color: #fff"
                                              >Visite nuestra página web para
                                              enterarse de mas servicios
                                              <a
                                                href="https://www.maisondesante.org.pe"
                                                style="color: #ffb200"
                                                target="_blank"
                                                >www.maisondesante.org.pe</a
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- End -->
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

const sendMailPasswordChangeNew = async (data) => {
    
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
      subject: `${data.subject}`,
      html: `
      <!DOCTYPE html>
      <html
        lang="en"
        xmlns:o="urn:schemas-microsoft-com:office:office"
        xmlns:v="urn:schemas-microsoft-com:vml"
      >
        <head>
          <title></title>
          <meta charset="utf-8" />
          <meta content="width=device-width,initial-scale=1" name="viewport" />
          <!--[if mso
            ]><xml
              ><o:OfficeDocumentSettings
                ><o:PixelsPerInch>96</o:PixelsPerInch
                ><o:AllowPNG /></o:OfficeDocumentSettings></xml
          ><![endif]-->
          <!--[if !mso]><!-->
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
            type="text/css"
          />
          <!--<![endif]-->
          <style>
            * {
              box-sizing: border-box;
            }
            th.column {
              padding: 0;
            }
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
            }
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
            }
            p {
              line-height: inherit;
            }
            @media (max-width: 670px) {
              .icons-inner {
                text-align: center;
              }
              .icons-inner td {
                margin: 0 auto;
              }
              .row-content {
                width: 100% !important;
              }
              .stack .column {
                width: 100%;
                display: block;
              }
            }
          </style>
        </head>
        <body
          style="
            background-color: #fff;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
          "
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="nl-container"
            role="presentation"
            style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #fff"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-1"
                    role="presentation"
                    style="
                      mso-table-lspace: 0;
                      mso-table-rspace: 0;
                      background-color: #fff;
                    "
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              background-color: #fff;
                            "
                            width="650"
                          >
                            <tbody>
                              <tr>
                                <th
                                  class="column"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="15"
                                    cellspacing="0"
                                    class="text_block"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td>
                                        <div
                                          style="
                                            font-family: Tahoma, Verdana, sans-serif;
                                          "
                                        >
                                          <div
                                            style="
                                              font-size: 14px;
                                              font-family: Roboto, Tahoma, Verdana,
                                                Segoe, sans-serif;
                                              color: #0a0a0a;
                                              line-height: 1.2;
                                            "
                                          >
                                            <p style="margin: 0">
                                              <span style="font-size: 16px"
                                                ><strong
                                                  >Estimado(a) Sr (a)</strong
                                                ></span
                                              >
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-2"
                    role="presentation"
                    style="mso-table-lspace: 0; mso-table-rspace: 0"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="mso-table-lspace: 0; mso-table-rspace: 0"
                            width="650"
                          >
                            <tbody>
                              <tr>
                                <th
                                  class="column"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="text_block"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td>
                                        <div
                                          style="
                                            font-family: Tahoma, Verdana, sans-serif;
                                          "
                                        >
                                          <div
                                            style="
                                              font-size: 14px;
                                              font-family: Roboto, Tahoma, Verdana,
                                                Segoe, sans-serif;
                                              color: #000;
                                              line-height: 1.2;
                                            "
                                          >
                                            <p style="margin: 0">
                                              <strong>@NOMBRE_DESTINO</strong>, este
                                              correo es para notificarle el cambio
                                              exitoso de su contraseña en
                                              el <strong>@NOMBRE_SYS</strong> . Su
                                              código de usuario
                                              es <strong>@CODIGO_USER</strong> y su
                                              contraseña actual es: <strong
                                                >@CODIGO_PASSWORD</strong
                                              >
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-3"
                    role="presentation"
                    style="mso-table-lspace: 0; mso-table-rspace: 0"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="mso-table-lspace: 0; mso-table-rspace: 0"
                            width="650"
                          >
                            <tbody>
                              <tr>
                                <th
                                  class="column"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="text_block"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td>
                                        <div
                                          style="
                                            font-family: Tahoma, Verdana, sans-serif;
                                          "
                                        >
                                          <div
                                            style="
                                              font-size: 14px;
                                              font-family: Roboto, Tahoma, Verdana,
                                                Segoe, sans-serif;
                                              color: #555;
                                              line-height: 1.2;
                                            "
                                          >
                                            <p style="margin: 0">
                                              Saludos cordiales.
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-4"
                    role="presentation"
                    style="mso-table-lspace: 0; mso-table-rspace: 0"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="mso-table-lspace: 0; mso-table-rspace: 0"
                            width="650"
                          >
                            <tbody>
                              <tr>
                                <th
                                  class="column"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="15"
                                    cellspacing="0"
                                    class="divider_block"
                                    role="presentation"
                                    style="mso-table-lspace: 0; mso-table-rspace: 0"
                                    width="100%"
                                  >
                                    <tr>
                                      <td>
                                        <div align="center">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0;
                                              mso-table-rspace: 0;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 0 solid #bbb;
                                                "
                                              >
                                                <span></span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-5"
                    role="presentation"
                    style="
                      mso-table-lspace: 0;
                      mso-table-rspace: 0;
                      background-color: #010153;
                    "
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              background-color: #010153;
                            "
                            width="650"
                          >
                            <tbody>
                              <tr>
                                <th
                                  class="column"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="image_block"
                                    role="presentation"
                                    style="mso-table-lspace: 0; mso-table-rspace: 0"
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        style="
                                          width: 100%;
                                          padding-right: 0;
                                          padding-left: 0;
                                          padding-top: 5px;
                                        "
                                      >
                                        <div align="center" style="line-height: 10px">
                                          <img
                                            src="images/CMS_155x65.png"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                              width: 163px;
                                              max-width: 100%;
                                            "
                                            width="163"
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="text_block"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td>
                                        <div style="font-family: Arial, sans-serif">
                                          <div
                                            style="
                                              font-size: 14px;
                                              font-family: 'Helvetica Neue', Helvetica,
                                                Arial, sans-serif;
                                              color: #fff;
                                              line-height: 1.2;
                                            "
                                          >
                                            <p style="margin: 0; text-align: center">
                                              <strong
                                                >Clínicas Maison de Santé</strong
                                              >
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="html_block"
                                    role="presentation"
                                    style="mso-table-lspace: 0; mso-table-rspace: 0"
                                    width="100%"
                                  >
                                    <tr>
                                      <td style="padding-bottom: 5px">
                                        <div
                                          align="center"
                                          style="
                                            font-family: Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                          "
                                        >
                                          <p>
                                            <span style="font: 20px; color: #fff"
                                              >Visite nuestra página web para
                                              enterarse de mas servicios
                                              <a
                                                href="https://www.maisondesante.org.pe"
                                                style="color: #ffb200"
                                                target="_blank"
                                                >www.maisondesante.org.pe</a
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- End -->
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

module.exports = {
  sendMailCitas,
  sendNewAcountUserPassword,
  sendValidateMailLinkPassword,
  sendMailPasswordChangeNew
}

