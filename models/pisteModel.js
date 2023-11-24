const { mongoose, Schema } = require("mongoose");

const pisteSchema = new Schema({
  title: { type: String, required: true },
  duration: { type: Number, required: true },
  id_album: { type: Schema.Types.ObjectId, ref: "Album", required: true },
});
const Piste = mongoose.model("Piste", pisteSchema);

module.exports = Piste;
