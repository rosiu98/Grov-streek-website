import { SheduleData } from "@/app/ui/matches";
import WelcomeEmail from "@/app/ui/welcomeEmail";
import { supabase } from "@/libs/supabase";
import { unstable_noStore } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const dynamic = "force-dynamic";

export const POST = async (req: NextRequest, res: NextResponse) => {
  unstable_noStore();
  try {
    const email = await req.json();

    if (!email) {
      console.error("Email is empty!");
      return new Response(JSON.stringify({ message: "Email is empty!" }), {
        status: 400,
      });
    }

    const { data } = await supabase
      .from<any, SheduleData>("lista_meczy")
      .select("*")
      .order("matchTime", { ascending: true })
      .returns<SheduleData[]>();

    if (!data) {
      console.error("There was error with trying to prepare email!");
      return new Response(
        JSON.stringify({
          message: "There was error with trying to prepare email!",
        }),
        {
          status: 400,
        }
      );
    }

    const today = new Date();

    const currentMatch = data.find(
      (match) => new Date(match.matchTime) > today
    );

    const { error } = await supabase.from("newsletter").insert({ email });

    if (error) {
      console.error("There was error with trying to submit email!");
      return new Response(JSON.stringify({ message: error.message }), {
        status: 400,
      });
    }

    const { error: resendError } = await resend.emails.send({
      from: "Grove Street Ballerz <GroveStreetBallerz@email-app.website>",
      to: [email],
      subject: "Witaj w zespole Grove Street Ballerz! Dziękujemy.",
      // react: WelcomeEmail(),
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
      <html
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office"
        lang="en"
      >
        <head>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="referrer" content="no-referrer" />
        </head>
      
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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
          <style type="text/css">
            body {
              margin: 0;
              padding: 0;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              text-rendering: optimizelegibility;
              -webkit-font-smoothing: antialiased;
            }
            table {
              border-spacing: 0;
            }
            table td {
              border-collapse: collapse;
            }
            .ExternalClass {
              width: 100%;
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
              line-height: 100%;
            }
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: none !important;
              font-size: inherit !important;
              font-family: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
            }
            table,
            td {
              border-collapse: collapse !important;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            }
            img {
              -ms-interpolation-mode: bicubic;
            }
            .yshortcuts a {
              border-bottom: none !important;
            }
            .hide {
              visibility: hidden;
              display: none;
              mso-hide: all;
            }
            .mbl-show {
              display: none;
              mso-hide: all;
            }
            .AppleLinksRed a {
              color: #c41f3e !important;
              text-decoration: none !important;
            }
            .AppleLinksBlack a {
              color: #000000 !important;
              text-decoration: none !important;
            }
            .AppleLinksGrey a {
              color: #383b3e !important;
              text-decoration: none !important;
            }
            .AppleLinksWhite a {
              color: #ffffff !important;
              text-decoration: none !important;
            }
            #outlook a {
              padding: 0;
            }
            u + #body a {
              color: inherit;
              text-decoration: none;
              font-size: inherit;
              font-family: inherit;
              font-weight: inherit;
              line-height: inherit;
            }
            sup {
              font-size: 75% !important;
              line-height: 0 !important;
            }
          </style>
          <style type="text/css">
            @media screen and (max-width: 599px) {
              .force-row,
              .container {
                width: 100% !important;
                max-width: 100% !important;
              }
              .mob-stack {
                width: 100% !important;
                display: block !important;
              }
              .col {
                width: 100% !important;
              }
              .container-padding {
                padding-left: 20px !important;
                padding-right: 20px !important;
              }
              .cta-btn {
                display: block !important;
                width: auto !important;
                min-width: 230px !important;
              }
              .mbl-hide {
                display: none !important;
                font-size: 0;
                max-height: 0;
                line-height: 0;
                padding: 0;
                mso-hide: all;
              }
              .mbl-show {
                display: block !important;
                max-height: none !important;
              }
              .mbl-show.inline {
                display: inline-block !important;
                max-height: none !important;
              }
      
              .mbl-show.inline img {
                display: inline-block !important;
                border: 0 !important;
              }
              .mbl-show img {
                display: block !important;
                border: 0 !important;
              }
              .mbl-center {
                text-align: center !important;
              }
              .mbl-left {
                text-align: left !important;
              }
              .mbl-right {
                text-align: right !important;
              }
              .mbl-float-none {
                float: none !important;
              }
              .body-text {
                padding-left: 20px !important;
                padding-right: 20px !important;
              }
              .gmail-fix a {
                color: #d40139 !important;
                text-decoration: none !important;
              }
              .mbl-width_280 {
                width: 280px !important;
              }
              .mbl_nowrap {
                white-space: nowrap;
              }
      
              .px-0 {
                padding-right: 0 !important;
                padding-left: 0 !important;
              }
              .px-1 {
                padding-right: 10px !important;
                padding-left: 10px !important;
              }
              .px-2 {
                padding-right: 20px !important;
                padding-left: 20px !important;
              }
              .px-3 {
                padding-right: 30px !important;
                padding-left: 30px !important;
              }
              .px-4 {
                padding-right: 35px !important;
                padding-left: 35px !important;
              }
              .px-5 {
                padding-right: 50px !important;
                padding-left: 50px !important;
              }
              .py-0 {
                padding-top: 0 !important;
                padding-bottom: 0 !important;
              }
              .py-1 {
                padding-top: 10px !important;
                padding-bottom: 10px !important;
              }
              .py-2 {
                padding-top: 20px !important;
                padding-bottom: 20px !important;
              }
              .py-3 {
                padding-top: 30px !important;
                padding-bottom: 30px !important;
              }
              .py-4 {
                padding-top: 35px !important;
                padding-bottom: 35px !important;
              }
              .py-5 {
                padding-top: 50px !important;
                padding-bottom: 50px !important;
              }
              .pt-0 {
                padding-top: 0 !important;
              }
              .pt-1 {
                padding-top: 10px !important;
              }
              .pt-2 {
                padding-top: 20px !important;
              }
              .pt-3 {
                padding-top: 30px !important;
              }
              .pt-4 {
                padding-top: 35px !important;
              }
              .pt-5 {
                padding-top: 50px !important;
              }
              .pb-0 {
                padding-bottom: 0 !important;
              }
              .pb-1 {
                padding-bottom: 10px !important;
              }
              .pb-2 {
                padding-bottom: 20px !important;
              }
              .pb-3 {
                padding-bottom: 30px !important;
              }
              .pb-4 {
                padding-bottom: 35px !important;
              }
              .pb-5 {
                padding-bottom: 50px !important;
              }
              .pr-0 {
                padding-right: 0 !important;
              }
              .pr-1 {
                padding-right: 10px !important;
              }
              .pr-2 {
                padding-right: 20px !important;
              }
              .pr-3 {
                padding-right: 30px !important;
              }
              .pr-4 {
                padding-right: 35px !important;
              }
              .pr-5 {
                padding-right: 50px !important;
              }
              .pl-0 {
                padding-left: 0 !important;
              }
              .pl-1 {
                padding-left: 10px !important;
              }
              .pl-2 {
                padding-left: 20px !important;
              }
              .pl-3 {
                padding-left: 30px !important;
              }
              .pl-4 {
                padding-left: 35px !important;
              }
              .pl-5 {
                padding-left: 50px !important;
              }
      
              .ml-0 {
                margin-left: 0 !important;
              }
              .mr-0 {
                margin-right: 0 !important;
              }
            }
          </style>
      
          <!--[if gte mso 9
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
          <![endif]-->
          <!--[if gte IE 7]>
            <style type="text/css" media="all">
              sup {
                mso-line-height-rule: exactly !important;
                font-size: 90% !important;
              }
            </style>
          <![endif]-->
      
          <!--[if gte mso 12]>
            <style type="text/css" media="all">
              sup {
                mso-line-height-rule: exactly !important;
                font-size: 110% !important;
              }
            </style>
          <![endif]-->
        </head>
      
        <body
          class="body"
          style="margin: 0; padding: 0"
          bgcolor="#161616"
          leftmargin="0"
          topmargin="0"
          marginwidth="0"
          marginheight="0"
        >
          <!-- 100% background wrapper (white background) -->
          <table
            role="presentation"
            border="0"
            width="100%"
            cellpadding="0"
            cellspacing="0"
            bgcolor="#161616"
            lang="en"
          >
            <tr>
              <td
                align="center"
                valign="top"
                bgcolor="#161616"
                style="background-color: #161616"
              >
                <div style="display: none">
                  Sprawdź, co przygotowaliśmy dla Ciebie w naszym pierwszym e-mailu
                  powitalnym! &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
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
                  &#8199;&#847; &#8199;&#847; &shy; &shy; &shy; &shy; &shy; &shy;
                  &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                  &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                  &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                  &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                  &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                  &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                  &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                  &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                  &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                  &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                  &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                  &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
                  &nbsp;
                </div>
                <div
                  style="
                    max-width: 600px;
                    margin-top: 0;
                    margin-bottom: 0;
                    margin-right: auto;
                    margin-left: auto;
                  "
                >
                  <!--[if (gte mso 9)|(IE)]>                     <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top">                     <![endif]-->
                  <table
                    role="presentation"
                    border="0"
                    width="600"
                    cellpadding="0"
                    cellspacing="0"
                    class="container"
                    style="width: 600px; max-width: 600px"
                  >
                    <tr>
                      <td style="padding: 0">
                        <!-- Start Content -->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="presentation"
                          style="min-width: 100%"
                          class="stylingblock-content-wrapper"
                        >
                          <tr>
                            <td class="stylingblock-content-wrapper camarker-inner">
                              <table
                                role="presentation"
                                align="left"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                class="force-row"
                                style="width: 600px"
                              >
                                <tr>
                                  <td
                                    class="px-2"
                                    align="left"
                                    style="
                                      padding-left: 35px;
                                      padding-right: 35px;
                                      padding-top: 30px;
                                      padding-bottom: 30px;
                                    "
                                  >
                                    <table
                                      role="presentation"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      align="left"
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          style="
                                            vertical-align: middle;
                                            padding-bottom: 30px;
                                            border-bottom: 5px solid #dc8a02;
                                          "
                                        >
                                          <a
                                            href="https://grov-street-website.vercel.app/"
                                            target="_blank"
                                            style="text-decoration: none"
                                            name="Grov Street Ballerz Logo"
                                          >
                                            <img
                                              valign="middle"
                                              width="190"
                                              style="
                                                width: 190px;
                                                max-width: 190px;
                                                height: auto;
                                                border: 0px none transparent;
                                                display: block;
                                              "
                                              src="https://i.imgur.com/CrcTfLG.png"
                                              alt="Grov Street Ballerz logo"
                                            />
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                              <table
                                role="presentation"
                                align="left"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="force-row"
                                style="width: 600px"
                              >
                                <tr>
                                  <td
                                    class="px-2"
                                    align="left"
                                    style="
                                      padding-left: 35px;
                                      padding-right: 35px;
                                      padding-top: 0px;
                                      padding-bottom: 35px;
                                    "
                                  >
                                    <table
                                      role="presentation"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      align="left"
                                      class="force-row"
                                      width="100%"
                                    >
                                      <tr>
                                        <th
                                          class="mob-stack"
                                          valign="middle"
                                          style="
                                            width: 50%;
                                            vertical-align: middle;
                                            font-weight: 400;
                                          "
                                          width="265"
                                        >
                                          <table
                                            role="presentation"
                                            style="
                                              border-spacing: 0;
                                              font-family: 'Whitney A', 'Whitney B',
                                                Arial, sans-serif;
                                              color: #383b3e;
                                              width: 100%;
                                            "
                                          >
                                            <tr>
                                              <td
                                                valign="middle"
                                                class="pb-4 pr-0"
                                                style="
                                                  padding-bottom: 0px;
                                                  padding-right: 35px;
                                                  color: #ebebeb;
                                                  font-family: 'Whitney A',
                                                    'Whitney B', Arial, sans-serif;
                                                  font-weight: 400;
                                                  text-align: left;
                                                "
                                              >
                                                <h1
                                                  style="
                                                    margin: 0;
                                                    font-size: 22px;
                                                    line-height: 125%;
                                                    line-height: 1.5 !important;
                                                    font-weight: 600;
                                                    color: #ebebeb;
                                                  "
                                                >
                                                  Witaj w świecie koszykówki z Grove
                                                  Street Ballers!
                                                </h1>
                                              </td>
                                            </tr>
                                          </table>
                                        </th>
                                        <th
                                          class="mob-stack"
                                          valign="middle"
                                          style="
                                            width: 50%;
                                            padding: 0;
                                            margin: 0;
                                            vertical-align: middle;
                                          "
                                          width="265"
                                        >
                                          <img
                                            name="Cont_3"
                                            src="https://i.imgur.com/j6FZriW.png"
                                            width="284"
                                            border="0"
                                            alt="Ilustration of whole team"
                                            style="
                                              width: 100%;
                                              max-width: 600px;
                                              height: auto;
                                              display: inline-block;
                                              margin: 0 auto;
                                              border: none;
                                              height: auto;
                                            "
                                          />
                                        </th>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                              <table
                                role="presentation"
                                align="left"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                class="force-row"
                                style="width: 600px"
                              >
                                <tr>
                                  <td
                                    class="one-column px-2"
                                    style="
                                      padding-top: 0;
                                      padding-bottom: 50px;
                                      padding-right: 35px;
                                      padding-left: 35px;
                                    "
                                  >
                                    <table
                                      role="presentation"
                                      width="100%"
                                      style="
                                        border-spacing: 0;
                                        font-family: 'Whitney A', 'Whitney B', Arial,
                                          sans-serif;
                                      "
                                    >
                                      <tr>
                                        <td
                                          class="px-2"
                                          style="
                                            width: 100%;
                                            padding-top: 35px;
                                            padding-bottom: 45px;
                                            padding-right: 35px;
                                            padding-left: 35px;
                                            background-color: #ffffff;
                                            color: #383b3e;
                                            font-family: 'Whitney A', 'Whitney B',
                                              Arial, sans-serif;
                                            font-size: 16px;
                                            line-height: 125%;
                                            line-height: 1.5 !important;
                                            text-align: left;
                                            font-weight: 400;
                                            border-radius: 10px;
                                          "
                                        >
                                          <p style="margin: 0; margin-bottom: 22px">
                                            Z radością witamy Cię w naszej
                                            koszykarskiej społeczności. Jesteśmy
                                            zespołem, który nie tylko gra, ale także
                                            inspiruje i wspiera miłośników koszykówki
                                            na całym&nbsp;świecie.
                                          </p>
                                          <p style="margin: 0; margin-bottom: 22px">
                                            Cieszymy się, że dołączyłeś/jesteś z nami!
                                            Przekonasz, że wspólnie stworzymy
                                            niezapomnianą przygodę
                                            <strong
                                              >pełną pasji, emocji
                                              i&nbsp;sukcesów</strong
                                            >.
                                          </p>
                                          <p style="margin: 0; margin-bottom: 22px">
                                            Jeśli masz jakiekolwiek pytania, sugestie
                                            lub chcesz podzielić się swoimi myślami na
                                            temat koszykówki, nie wahaj się
                                            skontaktować z nami. Jesteśmy tu
                                            dla&nbsp;Ciebie!
                                          </p>
                                          <p style="margin: 0; font-style: italic">
                                            - Zespół Grove Street Ballers
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                              ${
                                currentMatch &&
                                `
                              <table
                                role="presentation"
                                align="left"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                class="force-row"
                                style="width: 600px"
                              >
                                <tr>
                                  <td
                                    class="one-column px-2"
                                    style="
                                      padding-top: 0;
                                      padding-bottom: 25px;
                                      padding-right: 35px;
                                      padding-left: 35px;
                                    "
                                  >
                                    <table
                                      role="presentation"
                                      width="100%"
                                      style="
                                        border-spacing: 0;
                                        font-family: 'Whitney A', 'Whitney B', Arial,
                                          sans-serif;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            width: 100%;
                                            color: #ffffff;
                                            font-family: 'Whitney A', 'Whitney B',
                                              Arial, sans-serif;
                                            font-size: 16px;
                                            line-height: 125%;
                                            line-height: 1.5 !important;
                                            text-align: left;
                                            font-weight: 400;
                                            border-radius: 10px;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 22px;
                                              line-height: 125%;
                                              line-height: 1.5 !important;
                                              font-weight: 600;
                                              color: #dc8a02;
                                            "
                                          >
                                            Najbliższy mecz
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
      
                              <table
                                role="presentation"
                                align="center"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                class="force-row"
                                style="width: 600px"
                              >
                                <tr>
                                  <td
                                    align="center"
                                    class="one-column px-2"
                                    style="
                                      padding-top: 0;
                                      padding-bottom: 10px;
                                      padding-right: 35px;
                                      padding-left: 35px;
                                    "
                                  >
                                    <table
                                      role="presentation"
                                      width="320"
                                      align="center"
                                      style="
                                        border-spacing: 0;
                                        font-family: 'Whitney A', 'Whitney B', Arial,
                                          sans-serif;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            width: 100%;
                                            padding-top: 30px;
                                            padding-bottom: 25px;
                                            padding-right: 20px;
                                            padding-left: 20px;
                                            background-color: #ffffff;
                                            color: #383b3e;
                                            font-family: 'Whitney A', 'Whitney B',
                                              Arial, sans-serif;
                                            font-size: 12px;
                                            line-height: 125%;
                                            line-height: 1.5 !important;
                                            text-align: left;
                                            font-weight: 400;
                                            border-radius: 10px;
                                          "
                                        >
                                          <table
                                            role="presentation"
                                            width="100%"
                                            align="center"
                                            style="
                                              border-spacing: 0;
                                              font-family: 'Whitney A', 'Whitney B',
                                                Arial, sans-serif;
                                              text-align: center;
                                            "
                                          >
                                            <tr>
                                              <td style="width: 40%">
                                                <img
                                                  name="Cont_3"
                                                  src="${
                                                    currentMatch?.homeTeamLogoUrl
                                                  }"
                                                  width="50"
                                                  border="0"
                                                  alt="${
                                                    currentMatch?.homeTeamName
                                                  }"
                                                  style="
                                                    width: 100%;
                                                    max-width: 50px;
                                                    height: auto;
                                                    display: inline-block;
                                                    margin: 0 auto;
                                                    border: none;
                                                    height: auto;
                                                  "
                                                />
                                                <p
                                                  style="margin: 0; margin-top: 15px"
                                                >
                                                ${currentMatch?.homeTeamName}
                                                </p>
                                              </td>
                                              <td
                                                style="
                                                  padding-left: 10px;
                                                  padding-right: 10px;
                                                  font-weight: bold;
                                                "
                                              >
                                                vs
                                              </td>
                                              <td style="width: 40%">
                                                <img
                                                  name="Cont_3"
                                                  src="${
                                                    currentMatch?.awayTeamLogoUrl
                                                  }"
                                                  width="50"
                                                  border="0"
                                                  alt="${
                                                    currentMatch?.awayTeamName
                                                  }"
                                                  style="
                                                    width: 100%;
                                                    max-width: 50px;
                                                    height: auto;
                                                    display: inline-block;
                                                    margin: 0 auto;
                                                    border: none;
                                                    height: auto;
                                                  "
                                                />
                                                <p
                                                  style="margin: 0; margin-top: 15px"
                                                >
                                                ${currentMatch?.awayTeamName}
                                                </p>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
      
                              <table
                                role="presentation"
                                align="center"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                class="force-row"
                                style="width: 600px"
                              >
                                <tr>
                                  <td
                                    align="center"
                                    class="one-column px-2"
                                    style="
                                      padding-top: 0;
                                      padding-bottom: 50px;
                                      padding-right: 35px;
                                      padding-left: 35px;
                                    "
                                  >
                                    <table
                                      role="presentation"
                                      width="320"
                                      align="center"
                                      style="
                                        border-spacing: 0;
                                        font-family: 'Whitney A', 'Whitney B', Arial,
                                          sans-serif;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            width: 100%;
                                            padding-top: 15px;
                                            padding-bottom: 15px;
                                            padding-right: 20px;
                                            padding-left: 20px;
                                            background-color: #dc8a02;
                                            color: #ffffff;
                                            font-family: 'Whitney A', 'Whitney B',
                                              Arial, sans-serif;
                                            font-size: 14px;
                                            line-height: 125%;
                                            line-height: 1.5 !important;
                                            text-align: left;
                                            font-weight: 400;
                                            border-radius: 10px;
                                          "
                                        >
                                          <p style="margin: 0">
                                            Dzień: <b>${new Date(
                                              currentMatch.matchTime
                                            )
                                              .getDate()
                                              .toString()
                                              .padStart(2, "0")}.${(
                                  new Date(currentMatch.matchTime).getMonth() +
                                  1
                                )
                                  .toString()
                                  .padStart(2, "0")}.${new Date(
                                  currentMatch.matchTime
                                ).getFullYear()}</b>
                                            <br />
                                            Godzina: <b>${(
                                              new Date(
                                                currentMatch.matchTime
                                              ).getHours() - 1
                                            )
                                              .toString()
                                              .padStart(2, "0")}:${new Date(
                                  currentMatch.matchTime
                                )
                                  .getMinutes()
                                  .toString()
                                  .padStart(2, "0")}</b>
                                            <br />
                                            Miejsce: <b>${
                                              currentMatch.venue
                                            }</b>
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                              `
                              }
      
                              <table
                                role="presentation"
                                align="left"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                class="force-row"
                                style="width: 600px"
                              >
                                <tr>
                                  <td
                                    class="one-column px-2"
                                    style="
                                      padding-top: 0;
                                      padding-bottom: 50px;
                                      padding-right: 35px;
                                      padding-left: 35px;
                                    "
                                  >
                                    <table
                                      role="presentation"
                                      width="100%"
                                      style="
                                        border-spacing: 0;
                                        font-family: 'Whitney A', 'Whitney B', Arial,
                                          sans-serif;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            width: 100%;
                                            color: #e6e6e6;
      
                                            font-family: 'Whitney A', 'Whitney B',
                                              Arial, sans-serif;
                                            font-size: 11px;
                                            line-height: 125%;
                                            line-height: 1.5 !important;
                                            text-align: left;
                                            font-weight: 400;
                                            border-radius: 10px;
                                            font-style: italic;
                                          "
                                        >
                                          <p style="margin: 0; margin-bottom: 12px">
                                            © 2024 Grove Street Ballers. Wszelkie
                                            prawa zastrzeżone.
                                          </p>
                                          <p style="margin: 0; margin-bottom: 12px">
                                            Grove Street Ballers jest zarejestrowanym
                                            znakiem towarowym.
                                          </p>
                                          <p style="margin: 0; margin-bottom: 12px">
                                            Aby zaraportować nadużycie lub uzyskać
                                            więcej informacji, skontaktuj się z nami
                                            pod adresem:&nbsp;<a
                                              href="mailto:grovestreetballerz@gmail.com"
                                              target="_blank"
                                              style="
                                                text-decoration: underline;
                                                color: #e6e6e6;
                                              "
                                              >grovestreetballerz@gmail.com</a
                                            >.
                                          </p>
                                          <p style="margin: 0">
                                            Jeśli nie chcesz już otrzymywać wiadomości
                                            e-mail od zespołu koszykarskiego "Grove
                                            Street Ballers", kliknij&nbsp;<a
                                              target="_blank"
                                              href="https://grov-street-website.vercel.app/"
                                              style="
                                                text-decoration: underline;
                                                color: #e6e6e6;
                                              "
                                              >zrezygnuj</a
                                            >.
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!-- End Content -->
                      </td>
                    </tr>
                  </table>
                  <!--[if (gte mso 9)|(IE)]>                     </td></tr></table>                     <![endif]-->
                </div>
              </td>
            </tr>
          </table>
          <!--/100% background wrapper-->
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            border="0"
            class="mbl-hide"
            style="
              border-spacing: 0;
              font-family: 'Whitney A', 'Whitney B', Arial, sans-serif;
              color: #666666;
            "
          >
            <tr>
              <td
                height="1"
                class="mbl-hide"
                style="
                  min-width: 600px;
                  font-size: 0px;
                  line-height: 0px;
                  padding-top: 0;
                  padding-bottom: 0;
                  padding-right: 0;
                  padding-left: 0;
                "
              >
                <img
                  height="1"
                  name="Cont_5"
                  src="https://image.info.cibc.com/lib/fe2d11727360047c731d75/m/1/06afd2bf-1bdb-41db-905b-c6d66f5164a1.png"
                  style="
                    min-width: 600px;
                    text-decoration: none;
                    border-style: none;
                    -ms-interpolation-mode: bicubic;
                    border-width: 0;
                  "
                  alt=""
                />
              </td>
            </tr>
          </table>
        </body>
      </html>
      `,
    });

    if (resendError) {
      console.error("There was error with trying to send email!", resendError);
      return new Response(JSON.stringify({ message: resendError }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify("working!"), { status: 200 });
  } catch (error: any) {
    console.error("Scraping failed:", error.message);
    return new Response(
      JSON.stringify({ message: "Scraping failed", error: error.message }),
      { status: 200 }
    );
  }
};
