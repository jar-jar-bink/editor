import connectMongo from "../../../database/connection";
import Clients from "../../../models/client";
import ua from "../../../database/locales/ua.json";
import de from "../../../database/locales/de.json";
import en from "../../../database/locales/en.json";

export default async function handler(req, res) {
  connectMongo();

  if (req.method === "POST") {
    // const existingLocalized = await Clients.findOne({ label: req.body.label });
    // if (existingLocalized) {
    //   res.status(400).json({ msg: "Local with this label already exist" });
    //   return;
    // }

    const data = await Clients.create({
      name: req.body.name,
    });

    // const data = await Clients.create({
    //   label: req.body.label,
    //   translates: en,
    // });

    res.status(200).json({ msg: "created", data: data });
    return;
  }

  if (req.method === "GET") {
    const data = await Clients.find();
    console.log(data);
    res.status(200).json({ msg: "created", data });
    return;
  }

  switch (req.method) {
    case "PATCH": {
      // const a = Object.keys(req.body.translates).reduce((acc, translate) => {
      //   return {
      //     ...acc,
      //     [`translates.${translate}`]: req.body.translates[translate],
      //   };
      // }, {});

      // .findOneAndUpdate(
      //   { label: req.body.label },{
      //     $set: req.body
      //   }
      // );
      const data = await Clients.findOneAndUpdate({ name: "AAA" }, {'c': "A444"}, {
        returnNewDocument: true,
        new: true,
        strict: false,
      });

      console.log(data);
      //const loc = await Clients.findOne({label: "ua"})

      res.status(200).json({ msg: "update", data });
      break;
    }

    case "DELETE": {
      console.log("DELETE")
      const data =  await Clients.updateOne({ name: 'AAA' }, { $unset: { c: 1 } })
      res.status(200).json({ msg: "update", data });
      return
    } 
  }
}
