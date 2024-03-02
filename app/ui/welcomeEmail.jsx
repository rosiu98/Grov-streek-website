import * as React from "react";

const customFont = '"Whitney A", "Whitney B", Arial, sans-serif';

const WelcomeEmail = () => (
  <>
    <div>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="referrer" content="no-referrer" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cloud.typography.com/6320276/6009432/css/fonts.css"
      />
      <title>Witaj w zespole Grove Street Ballerz! Dziękujemy.</title>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n      body {\n        margin: 0;\n        padding: 0;\n        -ms-text-size-adjust: 100%;\n        -webkit-text-size-adjust: 100%;\n        text-rendering: optimizelegibility;\n        -webkit-font-smoothing: antialiased;\n      }\n      table {\n        border-spacing: 0;\n      }\n      table td {\n        border-collapse: collapse;\n      }\n      .ExternalClass {\n        width: 100%;\n      }\n      .ExternalClass,\n      .ExternalClass p,\n      .ExternalClass span,\n      .ExternalClass font,\n      .ExternalClass td,\n      .ExternalClass div {\n        line-height: 100%;\n      }\n      a[x-apple-data-detectors] {\n        color: inherit !important;\n        text-decoration: none !important;\n        font-size: inherit !important;\n        font-family: inherit !important;\n        font-weight: inherit !important;\n        line-height: inherit !important;\n      }\n      table,\n      td {\n        border-collapse: collapse !important;\n        mso-table-lspace: 0pt;\n        mso-table-rspace: 0pt;\n      }\n      img {\n        -ms-interpolation-mode: bicubic;\n      }\n      .yshortcuts a {\n        border-bottom: none !important;\n      }\n      .hide {\n        visibility: hidden;\n        display: none;\n        mso-hide: all;\n      }\n      .mbl-show {\n        display: none;\n        mso-hide: all;\n      }\n      .AppleLinksRed a {\n        color: #c41f3e !important;\n        text-decoration: none !important;\n      }\n      .AppleLinksBlack a {\n        color: #000000 !important;\n        text-decoration: none !important;\n      }\n      .AppleLinksGrey a {\n        color: #383b3e !important;\n        text-decoration: none !important;\n      }\n      .AppleLinksWhite a {\n        color: #ffffff !important;\n        text-decoration: none !important;\n      }\n      #outlook a {\n        padding: 0;\n      }\n      u + #body a {\n        color: inherit;\n        text-decoration: none;\n        font-size: inherit;\n        font-family: inherit;\n        font-weight: inherit;\n        line-height: inherit;\n      }\n      sup {\n        font-size: 75% !important;\n        line-height: 0 !important;\n      }\n    ",
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n      @media screen and (max-width: 599px) {\n        .force-row,\n        .container {\n          width: 100% !important;\n          max-width: 100% !important;\n        }\n        .mob-stack {\n          width: 100% !important;\n          display: block !important;\n        }\n        .col {\n          width: 100% !important;\n        }\n        .container-padding {\n          padding-left: 20px !important;\n          padding-right: 20px !important;\n        }\n        .cta-btn {\n          display: block !important;\n          width: auto !important;\n          min-width: 230px !important;\n        }\n        .mbl-hide {\n          display: none !important;\n          font-size: 0;\n          max-height: 0;\n          line-height: 0;\n          padding: 0;\n          mso-hide: all;\n        }\n        .mbl-show {\n          display: block !important;\n          max-height: none !important;\n        }\n        .mbl-show.inline {\n          display: inline-block !important;\n          max-height: none !important;\n        }\n\n        .mbl-show.inline img {\n          display: inline-block !important;\n          border: 0 !important;\n        }\n        .mbl-show img {\n          display: block !important;\n          border: 0 !important;\n        }\n        .mbl-center {\n          text-align: center !important;\n        }\n        .mbl-left {\n          text-align: left !important;\n        }\n        .mbl-right {\n          text-align: right !important;\n        }\n        .mbl-float-none {\n          float: none !important;\n        }\n        .body-text {\n          padding-left: 20px !important;\n          padding-right: 20px !important;\n        }\n        .gmail-fix a {\n          color: #d40139 !important;\n          text-decoration: none !important;\n        }\n        .mbl-width_280 {\n          width: 280px !important;\n        }\n        .mbl_nowrap {\n          white-space: nowrap;\n        }\n\n        .px-0 {\n          padding-right: 0 !important;\n          padding-left: 0 !important;\n        }\n        .px-1 {\n          padding-right: 10px !important;\n          padding-left: 10px !important;\n        }\n        .px-2 {\n          padding-right: 20px !important;\n          padding-left: 20px !important;\n        }\n        .px-3 {\n          padding-right: 30px !important;\n          padding-left: 30px !important;\n        }\n        .px-4 {\n          padding-right: 35px !important;\n          padding-left: 35px !important;\n        }\n        .px-5 {\n          padding-right: 50px !important;\n          padding-left: 50px !important;\n        }\n        .py-0 {\n          padding-top: 0 !important;\n          padding-bottom: 0 !important;\n        }\n        .py-1 {\n          padding-top: 10px !important;\n          padding-bottom: 10px !important;\n        }\n        .py-2 {\n          padding-top: 20px !important;\n          padding-bottom: 20px !important;\n        }\n        .py-3 {\n          padding-top: 30px !important;\n          padding-bottom: 30px !important;\n        }\n        .py-4 {\n          padding-top: 35px !important;\n          padding-bottom: 35px !important;\n        }\n        .py-5 {\n          padding-top: 50px !important;\n          padding-bottom: 50px !important;\n        }\n        .pt-0 {\n          padding-top: 0 !important;\n        }\n        .pt-1 {\n          padding-top: 10px !important;\n        }\n        .pt-2 {\n          padding-top: 20px !important;\n        }\n        .pt-3 {\n          padding-top: 30px !important;\n        }\n        .pt-4 {\n          padding-top: 35px !important;\n        }\n        .pt-5 {\n          padding-top: 50px !important;\n        }\n        .pb-0 {\n          padding-bottom: 0 !important;\n        }\n        .pb-1 {\n          padding-bottom: 10px !important;\n        }\n        .pb-2 {\n          padding-bottom: 20px !important;\n        }\n        .pb-3 {\n          padding-bottom: 30px !important;\n        }\n        .pb-4 {\n          padding-bottom: 35px !important;\n        }\n        .pb-5 {\n          padding-bottom: 50px !important;\n        }\n        .pr-0 {\n          padding-right: 0 !important;\n        }\n        .pr-1 {\n          padding-right: 10px !important;\n        }\n        .pr-2 {\n          padding-right: 20px !important;\n        }\n        .pr-3 {\n          padding-right: 30px !important;\n        }\n        .pr-4 {\n          padding-right: 35px !important;\n        }\n        .pr-5 {\n          padding-right: 50px !important;\n        }\n        .pl-0 {\n          padding-left: 0 !important;\n        }\n        .pl-1 {\n          padding-left: 10px !important;\n        }\n        .pl-2 {\n          padding-left: 20px !important;\n        }\n        .pl-3 {\n          padding-left: 30px !important;\n        }\n        .pl-4 {\n          padding-left: 35px !important;\n        }\n        .pl-5 {\n          padding-left: 50px !important;\n        }\n\n        .ml-0 {\n          margin-left: 0 !important;\n        }\n        .mr-0 {\n          margin-right: 0 !important;\n        }\n      }\n    ",
        }}
      />
      {/*[if gte mso 9
      ]><xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG /> <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <style type="text/css">
        body,
        table,
        td,
        div,
        p,
        span,
        a,
        strong,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: Arial, sans-serif !important;
          mso-hyphenate: none;
        }
        table {
          border-collapse: collapse !important;
        }
        sup {
          font-size: 100% !important;
        }
        .outlook-bg-0 {
          background-color: transparent !important;
        }
        .outlook-bb-C41F3E {
          mso-border-bottom-alt: 1px solid #c41f3e;
        }
        .outlook-bb-373b3e {
          mso-border-bottom-alt: 1px solid #373b3e;
        }
        .outlook-bb-f2f3f2 {
          mso-border-bottom-alt: 1px solid #f2f3f2;
        }
      </style>
    <![endif]*/}
      {/*[if gte IE 7]>
      <style type="text/css" media="all">
        sup {
          mso-line-height-rule: exactly !important;
          font-size: 90% !important;
        }
      </style>
    <![endif]*/}
      {/*[if gte mso 12]>
      <style type="text/css" media="all">
        sup {
          mso-line-height-rule: exactly !important;
          font-size: 110% !important;
        }
      </style>
    <![endif]*/}
      {/* 100% background wrapper (white background) */}
      <table
        role="presentation"
        border={0}
        width="100%"
        cellPadding={0}
        cellSpacing={0}
        bgcolor="#161616"
        lang="en"
      >
        <tbody>
          <tr>
            <td
              align="center"
              valign="top"
              bgcolor="#161616"
              style={{ backgroundColor: "#161616" }}
            >
              <div style={{ display: "none" }}>
                Sprawdź, co przygotowaliśmy dla Ciebie w naszym pierwszym
                e-mailu powitalnym! &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
                &#8199;&#847; &#8199;&#847; &#8199;&#847; &shy; &shy; &shy;
                &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                &shy; &shy; &shy; &shy; &shy; &nbsp;
              </div>
              <div
                style={{
                  maxWidth: "600px",
                  marginTop: 0,
                  marginBottom: 0,
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              >
                {/*[if (gte mso 9)|(IE)]>                     <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top">                     <![endif]*/}
                <table
                  role="presentation"
                  border={0}
                  width={600}
                  cellPadding={0}
                  cellSpacing={0}
                  className="container"
                  style={{ width: "600px", maxWidth: "600px" }}
                >
                  <tbody>
                    <tr>
                      <td style={{ padding: 0 }}>
                        {/* Start Content */}
                        <table
                          cellPadding={0}
                          cellSpacing={0}
                          width="100%"
                          role="presentation"
                          style={{ minWidth: "100%" }}
                          className="stylingblock-content-wrapper"
                        >
                          <tbody>
                            <tr>
                              <td className="stylingblock-content-wrapper camarker-inner">
                                <table
                                  role="presentation"
                                  align="left"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  width="100%"
                                  className="force-row"
                                  style={{ width: "600px" }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        className="px-2"
                                        align="left"
                                        style={{
                                          paddingLeft: "35px",
                                          paddingRight: "35px",
                                          paddingTop: "30px",
                                          paddingBottom: "30px",
                                        }}
                                      >
                                        <table
                                          role="presentation"
                                          border={0}
                                          cellPadding={0}
                                          cellSpacing={0}
                                          align="left"
                                          width="100%"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style={{
                                                  verticalAlign: "middle",
                                                  paddingBottom: "30px",
                                                  borderBottom:
                                                    "5px solid #dc8a02",
                                                }}
                                              >
                                                <a
                                                  href="https://grov-street-website.vercel.app/"
                                                  target="_blank"
                                                  style={{
                                                    textDecoration: "none",
                                                  }}
                                                  name="Grov Street Ballerz Logo"
                                                >
                                                  <img
                                                    valign="middle"
                                                    width={190}
                                                    style={{
                                                      width: "190px",
                                                      maxWidth: "190px",
                                                      height: "auto",
                                                      border:
                                                        "0px none transparent",
                                                      display: "block",
                                                    }}
                                                    src="https://i.imgur.com/CrcTfLG.png"
                                                    alt="Grov Street Ballerz logo"
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table
                                  role="presentation"
                                  align="left"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  className="force-row"
                                  style={{ width: "600px" }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        className="px-2"
                                        align="left"
                                        style={{
                                          paddingLeft: "35px",
                                          paddingRight: "35px",
                                          paddingTop: "0px",
                                          paddingBottom: "35px",
                                        }}
                                      >
                                        <table
                                          role="presentation"
                                          border={0}
                                          cellPadding={0}
                                          cellSpacing={0}
                                          align="left"
                                          className="force-row"
                                          width="100%"
                                        >
                                          <tbody>
                                            <tr>
                                              <th
                                                className="mob-stack"
                                                valign="middle"
                                                style={{
                                                  width: "50%",
                                                  verticalAlign: "middle",
                                                  fontWeight: 400,
                                                }}
                                                width={265}
                                              >
                                                <table
                                                  role="presentation"
                                                  style={{
                                                    borderSpacing: 0,
                                                    fontFamily: customFont,
                                                    color: "#383b3e",
                                                    width: "100%",
                                                  }}
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <td
                                                        valign="middle"
                                                        className="pb-4 pr-0"
                                                        style={{
                                                          paddingBottom: "0px",
                                                          paddingRight: "35px",
                                                          color: "#ebebeb",
                                                          fontFamily:
                                                            customFont,
                                                          fontWeight: 400,
                                                          textAlign: "left",
                                                        }}
                                                      >
                                                        <h1
                                                          style={{
                                                            margin: 0,
                                                            fontSize: "22px",
                                                            lineHeight:
                                                              "1.5 !important",
                                                            fontWeight: 600,
                                                            color: "#ebebeb",
                                                          }}
                                                        >
                                                          Witaj w świecie
                                                          koszykówki z Grove
                                                          Street Ballers!
                                                        </h1>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </th>
                                              <th
                                                className="mob-stack"
                                                valign="middle"
                                                style={{
                                                  width: "50%",
                                                  padding: 0,
                                                  margin: 0,
                                                  verticalAlign: "middle",
                                                }}
                                                width={265}
                                              >
                                                <img
                                                  name="Cont_3"
                                                  src="https://i.imgur.com/j6FZriW.png"
                                                  width={284}
                                                  border={0}
                                                  alt="Ilustration of whole team"
                                                  style={{
                                                    width: "100%",
                                                    maxWidth: "600px",
                                                    height: "auto",
                                                    display: "inline-block",
                                                    margin: "0 auto",
                                                    border: "none",
                                                  }}
                                                />
                                              </th>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table
                                  role="presentation"
                                  align="left"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  width="100%"
                                  className="force-row"
                                  style={{ width: "600px" }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        className="one-column px-2"
                                        style={{
                                          paddingTop: 0,
                                          paddingBottom: "50px",
                                          paddingRight: "35px",
                                          paddingLeft: "35px",
                                        }}
                                      >
                                        <table
                                          role="presentation"
                                          width="100%"
                                          style={{
                                            borderSpacing: 0,
                                            fontFamily: customFont,
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                className="px-1"
                                                style={{
                                                  width: "100%",
                                                  paddingTop: "35px",
                                                  paddingBottom: "45px",
                                                  paddingRight: "35px",
                                                  paddingLeft: "35px",
                                                  backgroundColor: "#ffffff",
                                                  color: "#383b3e",
                                                  fontFamily: customFont,
                                                  fontSize: "16px",
                                                  lineHeight: "1.5 !important",
                                                  textAlign: "left",
                                                  fontWeight: 400,
                                                  borderRadius: "10px",
                                                }}
                                              >
                                                <p
                                                  style={{
                                                    margin: 0,
                                                    marginBottom: "22px",
                                                    color: "#383b3e",
                                                  }}
                                                >
                                                  Z radością witamy Cię w naszej
                                                  koszykarskiej społeczności.
                                                  Jesteśmy zespołem, który nie
                                                  tylko gra, ale także inspiruje
                                                  i wspiera miłośników
                                                  koszykówki na
                                                  całym&nbsp;świecie.
                                                </p>
                                                <p
                                                  style={{
                                                    margin: 0,
                                                    marginBottom: "22px",
                                                    color: "#383b3e",
                                                  }}
                                                >
                                                  Cieszymy się, że
                                                  dołączyłeś/jesteś z nami!
                                                  Przekonasz, że wspólnie
                                                  stworzymy niezapomnianą
                                                  przygodę{" "}
                                                  <strong>
                                                    pełną pasji, emocji
                                                    i&nbsp;sukcesów
                                                  </strong>
                                                  .
                                                </p>
                                                <p
                                                  style={{
                                                    margin: 0,
                                                    marginBottom: "22px",
                                                    color: "#383b3e",
                                                  }}
                                                >
                                                  Jeśli masz jakiekolwiek
                                                  pytania, sugestie lub chcesz
                                                  podzielić się swoimi myślami
                                                  na temat koszykówki, nie wahaj
                                                  się skontaktować z nami.
                                                  Jesteśmy tu dla&nbsp;Ciebie!
                                                </p>
                                                <p
                                                  style={{
                                                    margin: 0,
                                                    fontStyle: "italic",
                                                    color: "#383b3e",
                                                  }}
                                                >
                                                  - Zespół Grove Street Ballers
                                                </p>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table
                                  role="presentation"
                                  align="left"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  width="100%"
                                  className="force-row"
                                  style={{ width: "600px" }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        className="one-column px-2"
                                        style={{
                                          paddingTop: 0,
                                          paddingBottom: "25px",
                                          paddingRight: "35px",
                                          paddingLeft: "35px",
                                        }}
                                      >
                                        <table
                                          role="presentation"
                                          width="100%"
                                          style={{
                                            borderSpacing: 0,
                                            fontFamily: customFont,
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style={{
                                                  width: "100%",
                                                  color: "#ffffff",
                                                  fontFamily: customFont,
                                                  fontSize: "16px",
                                                  lineHeight: "1.5 !important",
                                                  textAlign: "left",
                                                  fontWeight: 400,
                                                  borderRadius: "10px",
                                                }}
                                              >
                                                <p
                                                  style={{
                                                    margin: 0,
                                                    fontSize: "22px",
                                                    lineHeight:
                                                      "1.5 !important",
                                                    fontWeight: 600,
                                                    color: "#dc8a02",
                                                  }}
                                                >
                                                  Najbliższy mecz
                                                </p>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table
                                  role="presentation"
                                  align="center"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  width="100%"
                                  className="force-row"
                                  style={{ width: "600px" }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        align="center"
                                        className="one-column px-2"
                                        style={{
                                          paddingTop: 0,
                                          paddingBottom: "10px",
                                          paddingRight: "35px",
                                          paddingLeft: "35px",
                                        }}
                                      >
                                        <table
                                          role="presentation"
                                          width={320}
                                          align="center"
                                          style={{
                                            borderSpacing: 0,
                                            fontFamily: customFont,
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style={{
                                                  width: "100%",
                                                  paddingTop: "30px",
                                                  paddingBottom: "25px",
                                                  paddingRight: "20px",
                                                  paddingLeft: "20px",
                                                  backgroundColor: "#ffffff",
                                                  color: "#383b3e",
                                                  fontFamily: customFont,
                                                  fontSize: "12px",
                                                  lineHeight: "1.5 !important",
                                                  textAlign: "left",
                                                  fontWeight: 400,
                                                  borderRadius: "10px",
                                                }}
                                              >
                                                <table
                                                  role="presentation"
                                                  width="100%"
                                                  align="center"
                                                  style={{
                                                    borderSpacing: 0,
                                                    fontFamily: customFont,
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <td
                                                        style={{ width: "40%" }}
                                                      >
                                                        <img
                                                          name="Cont_3"
                                                          src="https://i.imgur.com/I5HSrrF.png"
                                                          width={50}
                                                          border={0}
                                                          alt="Team logo"
                                                          style={{
                                                            width: "100%",
                                                            maxWidth: "50px",
                                                            height: "auto",
                                                            display:
                                                              "inline-block",
                                                            margin: "0 auto",
                                                            border: "none",
                                                          }}
                                                        />
                                                        <p
                                                          style={{
                                                            margin: 0,
                                                            marginTop: "15px",
                                                          }}
                                                        >
                                                          Grove Street Ballerz
                                                        </p>
                                                      </td>
                                                      <td
                                                        style={{
                                                          paddingLeft: "10px",
                                                          paddingRight: "10px",
                                                          fontWeight: "bold",
                                                        }}
                                                      >
                                                        vs
                                                      </td>
                                                      <td
                                                        style={{ width: "40%" }}
                                                      >
                                                        <img
                                                          name="Cont_3"
                                                          src="https://i.imgur.com/GfViIDz.png"
                                                          width={50}
                                                          border={0}
                                                          alt="Team logo"
                                                          style={{
                                                            width: "100%",
                                                            maxWidth: "50px",
                                                            height: "auto",
                                                            display:
                                                              "inline-block",
                                                            margin: "0 auto",
                                                            border: "none",
                                                          }}
                                                        />
                                                        <p
                                                          style={{
                                                            margin: 0,
                                                            marginTop: "15px",
                                                          }}
                                                        >
                                                          City Towers
                                                        </p>
                                                      </td>
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
                                <table
                                  role="presentation"
                                  align="center"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  width="100%"
                                  className="force-row"
                                  style={{ width: "600px" }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        align="center"
                                        className="one-column px-2"
                                        style={{
                                          paddingTop: 0,
                                          paddingBottom: "50px",
                                          paddingRight: "35px",
                                          paddingLeft: "35px",
                                        }}
                                      >
                                        <table
                                          role="presentation"
                                          width={320}
                                          align="center"
                                          style={{
                                            borderSpacing: 0,
                                            fontFamily: customFont,
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style={{
                                                  width: "100%",
                                                  paddingTop: "15px",
                                                  paddingBottom: "15px",
                                                  paddingRight: "20px",
                                                  paddingLeft: "20px",
                                                  backgroundColor: "#dc8a02",
                                                  color: "#ffffff",
                                                  fontFamily: customFont,
                                                  fontSize: "14px",
                                                  lineHeight: "1.5 !important",
                                                  textAlign: "left",
                                                  fontWeight: 400,
                                                  borderRadius: "10px",
                                                }}
                                              >
                                                <p style={{ margin: 0 }}>
                                                  Dzień: <b>25 luty 2024</b>
                                                  <br />
                                                  Godzina: <b>10:30</b>
                                                  <br />
                                                  Miejsce:{" "}
                                                  <b>Hala AGH Sektor 1</b>
                                                </p>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table
                                  role="presentation"
                                  align="left"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  width="100%"
                                  className="force-row"
                                  style={{ width: "600px" }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        className="one-column px-2"
                                        style={{
                                          paddingTop: 0,
                                          paddingBottom: "50px",
                                          paddingRight: "35px",
                                          paddingLeft: "35px",
                                        }}
                                      >
                                        <table
                                          role="presentation"
                                          width="100%"
                                          style={{
                                            borderSpacing: 0,
                                            fontFamily: customFont,
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style={{
                                                  width: "100%",
                                                  color: "#e6e6e6",
                                                  fontFamily: customFont,
                                                  fontSize: "11px",
                                                  lineHeight: "1.5 !important",
                                                  textAlign: "left",
                                                  fontWeight: 400,
                                                  borderRadius: "10px",
                                                  fontStyle: "italic",
                                                }}
                                              >
                                                <p
                                                  style={{
                                                    margin: 0,
                                                    marginBottom: "12px",
                                                  }}
                                                >
                                                  © 2024 Grove Street Ballers.
                                                  Wszelkie prawa zastrzeżone.
                                                </p>
                                                <p
                                                  style={{
                                                    margin: 0,
                                                    marginBottom: "12px",
                                                  }}
                                                >
                                                  Grove Street Ballers jest
                                                  zarejestrowanym znakiem
                                                  towarowym.
                                                </p>
                                                <p
                                                  style={{
                                                    margin: 0,
                                                    marginBottom: "12px",
                                                  }}
                                                >
                                                  Aby zaraportować nadużycie lub
                                                  uzyskać więcej informacji,
                                                  skontaktuj się z nami pod
                                                  adresem:&nbsp;
                                                  <a
                                                    href="mailto:grovestreetballerz@gmail.com"
                                                    target="_blank"
                                                    style={{
                                                      textDecoration:
                                                        "underline",
                                                      color: "#e6e6e6",
                                                    }}
                                                  >
                                                    grovestreetballerz@gmail.com
                                                  </a>
                                                  .
                                                </p>
                                                <p style={{ margin: 0 }}>
                                                  Jeśli nie chcesz już
                                                  otrzymywać wiadomości e-mail
                                                  od zespołu koszykarskiego
                                                  "Grove Street Ballers",
                                                  kliknij&nbsp;
                                                  <a
                                                    target="_blank"
                                                    href="https://grov-street-website.vercel.app/"
                                                    style={{
                                                      textDecoration:
                                                        "underline",
                                                      color: "#e6e6e6",
                                                    }}
                                                  >
                                                    zrezygnuj
                                                  </a>
                                                  .
                                                </p>
                                              </td>
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
                        {/* End Content */}
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/*[if (gte mso 9)|(IE)]>                     </td></tr></table>                     <![endif]*/}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {/*/100% background wrapper*/}
      <table
        role="presentation"
        cellPadding={0}
        cellSpacing={0}
        border={0}
        className="mbl-hide"
        style={{
          borderSpacing: 0,
          fontFamily: '"Whitney A", "Whitney B", Arial, sans-serif',
          color: "#666666",
        }}
      >
        <tbody>
          <tr>
            <td
              height={1}
              className="mbl-hide"
              style={{
                minWidth: "600px",
                fontSize: "0px",
                lineHeight: "0px",
                paddingTop: 0,
                paddingBottom: 0,
                paddingRight: 0,
                paddingLeft: 0,
              }}
            >
              <img
                height={1}
                name="Cont_5"
                src="https://image.info.cibc.com/lib/fe2d11727360047c731d75/m/1/06afd2bf-1bdb-41db-905b-c6d66f5164a1.png"
                style={{
                  minWidth: "600px",
                  textDecoration: "none",
                  borderStyle: "none",
                  msInterpolationMode: "bicubic",
                  borderWidth: 0,
                }}
                alt=""
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default WelcomeEmail;
