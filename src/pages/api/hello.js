import connectMongo from "../../database/connection";
import Clients from "../../models/client";
import ua from "../../database/locales/ua.json";
import de from "../../database/locales/de.json";
import en from "../../database/locales/en.json";

export default async function handler(req, res) {
  connectMongo();

  if (req.method === "POST") {
      let localize = req.body


      if(req.body.langLabel === 'en') {
        localize.comments = en
      } 

      const data = Clients.add({translateColletion: en})
      res.status(200).json({msg: "created" , data });
      return
  }

  if (req.method === "GET") {

    const data = await Clients.find()
    console.log(data)
    res.status(200).json({msg: "created" , data});
    return
}

  res.status(200).json({ name: "John Doe" });
}
