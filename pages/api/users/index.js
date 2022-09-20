import connectMongo from "../../../database/connection";
import ua from "../../../database/locales/ua.json";
import de from "../../../database/locales/de.json";
import en from "../../../database/locales/en.json";

const mockObj = {
    ua,
    de,
    en
}

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  const { method } = req;
  switch (method) {
    case "GET":
      res.status(201).json({ method, name: "GET Request", data: mockObj[req.query.locale] });
      break;
    case "POST":
      res.status(200).json({ method, name: "POST Request" });
      break;
    case "PUT":
      res.status(200).json({ method, name: "PUT Request" });
      break;
    case "DELETE":
      res.status(200).json({ method, name: "DELETE Request" });
      break;
    default:
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
      );
      break;
  }
}
