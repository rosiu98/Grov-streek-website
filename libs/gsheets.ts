import { google } from "googleapis";

export interface SheetData {
  content: string;
  pageURL: string;
  postMediaContent: string;
  reactions: string;
  comments: string;
  postLink: string;
}

export async function getGoogleSheetsData(range: string) {
  const auth = await google.auth.getClient({
    projectId: "facebook-4-recent-posts",
    credentials: {
      type: "service_account",
      private_key: process.env.GOOGLE_PRIVATE_KEY,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      token_url: "https://oauth2.googleapis.com/token",
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: range,
  });

  const rawData: any[][] | null | undefined = data.data.values;

  if (rawData) {
    const keys: string[] = rawData[0].map((key) =>
      key.toLowerCase().replace(/\s+/g, "")
    ); // Standardizing keys
    const formattedData: SheetData[] = [];

    for (let i = 1; i < rawData.length; i++) {
      const obj: SheetData = {
        content: rawData[i][0] || "",
        pageURL: rawData[i][1] || "",
        postMediaContent: rawData[i][2] || "",
        reactions: rawData[i][3] || "",
        comments: rawData[i][4] || "",
        postLink: rawData[i][6] || "",
      };
      formattedData.push(obj);
    }

    return formattedData;
  }

  return null;
}
