const Playlist = require("../models/playlistModel");

const addPlaylist = async (req, res) => {
  try {
    const newPlaylist = new Playlist(req.body);
    await newPlaylist.save();
    res.json(newPlaylist);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const userPlaylist = async (req, res) => {
  try {
    const playlists = await Playlist.find({
      user_id: req.params.id_user,
    }).populate("Pistes");
    res.json(playlists);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { addPlaylist, userPlaylist };
