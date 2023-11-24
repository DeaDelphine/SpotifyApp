const AlbumRouter = require("express").Router();
const {
  allAlbums,
  postAlbum,
  putAlbum,
  removeAlbum,
} = require("../controllers/AlbumController");

AlbumRouter.get("/all", allAlbums);
AlbumRouter.post("/create", postAlbum);
AlbumRouter.put("/:id/edit", putAlbum);
AlbumRouter.delete("/:id/delete", removeAlbum);

module.exports = AlbumRouter;
