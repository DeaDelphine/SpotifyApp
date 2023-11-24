const { mongoose, Schema } = require("mongoose");

const playlistSchema = new Schema({
  name: String,
  audioPist: {
    type: Schema.Types.ObjectId,
    ref: 'Pist'
},
    userPlay: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const playlist = mongoose.model("playlist", playlistSchema);
module.exports = playlist;