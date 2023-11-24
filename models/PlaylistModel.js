const { mongoose, Schema } = require("mongoose");

const playlistSchema = new Schema({
  name: { type: "string", required: true },
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  pistes: [{ type: Schema.Types.ObjectId, ref: "Piste" }],
});

const Playlist = mongoose.model("Playlist", playlistSchema);
module.exports = Playlist;
