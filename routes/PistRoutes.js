const PistRouter = require("express").Router();
const {
  allPists,
  postPist,
  putPist,
  removePist,
} = require("../controllers/PistController");

PistRouter.get("/all", allPists);
PistRouter.post("/create", postPist);
PistRouter.put("/:id/edit", putPist);
PistRouter.delete("/:id/delete", removePist);

module.exports = PistRouter;
