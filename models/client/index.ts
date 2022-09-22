import { Schema, models, model } from "mongoose";

const childSchema = new Schema({});

const blogSchema = new Schema({
  langLabel: String,
  meta: {
    votes: Number,
    favs: Number,
  },
});

const Clients = models.test33 || model("test33", blogSchema);

export default Clients;
