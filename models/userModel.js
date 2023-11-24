const { mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  playlists: [{type: Schema.Types.ObjectId, ref:'Playlist'}]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
