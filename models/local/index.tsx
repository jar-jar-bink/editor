import { Schema, models, model } from "mongoose";

const localSchema = new Schema({
    name: String,
});

const Locals = models.Local || model('Local', localSchema)

export default Locals;