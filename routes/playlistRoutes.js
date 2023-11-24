const PlaylistRouter = require("express").Router();
const {
  allPlaylists,
  postPlaylist,
  putPlaylist,
  removePlaylist,
} = require("../controllers/playlistController");

PlaylistRouter.get("/all", allPlaylists);
PlaylistRouter.post("/create", postPlaylist);
PlaylistRouter.put("/:id/edit", putPlaylist);
PlaylistRouter.delete("/:id/delete", removePlaylist);

module.exports = PlaylistRouter;
