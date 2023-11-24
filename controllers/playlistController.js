const Playlist = require("../models/PlaylistModel");

const allPlaylists = async (req, res) => {
  try {
    let playlists = await Playlist.find().populate('audioPist', 'userPlay');
    res.send(playlists);
  } catch (error) {
    console.error(error);
  }
};
const postPlaylist = async (req, res) => {
  const { name, audioPist, userPlay } = req.body;
  try {
    let newPlaylist = new Playlist({ name, audioPist, userPlay });
    await newPlaylist.save();
    res.send(newPlaylist);
  } catch (err) {
    console.error(err);
  }
};
const putPlaylist = async (req, res) => {
  const { Playlistname, email } = req.body;
  try {
    let Playlist = Playlist.findOneAndUpdate(
      { _id: req.params.id },
      { Playlistname, email },
      { new: true }
    );
    res.send({ message: "Playlist successfully updated", Playlist });
  } catch (err) {
    console.error(err);
  }
};
const removePlaylist = async (req, res) => {
  await Playlist.findOneAndDelete(req.params.id);
  res.send({ message: "Playlist deleted successfully" });
};

module.exports = { allPlaylists, postPlaylist, putPlaylist, removePlaylist };
