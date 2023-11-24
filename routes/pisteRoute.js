const { newPiste } = require("../controllers/pisteController");

const router = require("express").Router();

router.post("/new", newPiste);

module.exports = router;
