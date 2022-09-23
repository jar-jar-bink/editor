import { Schema, models, model } from "mongoose";
import en from "../../database/locales/en.json";
import * as GenerateSchema from "generate-schema";

const schema = GenerateSchema.json("localize", en);

const testSchema = new Schema({
  label: String,
  translates: schema.properties,
});

const tchema = new Schema({
  name: String,
  age: Number
}, { strict: false });

const Clients = models.test5 || model("test5", tchema);

export default Clients;
