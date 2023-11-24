const {
  addPlaylist,
  userPlaylist,
} = require("../controllers/playlistController");

const router = require("express").Router();

router.post("/new", addPlaylist);
router.get("/:id_user", userPlaylist);

module.exports = router;
