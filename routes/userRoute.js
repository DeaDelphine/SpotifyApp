const { create, getUsers } = require("../controllers/userController");

const router = require("express").Router();

router.post("/create", create);
router.get("/all", getUsers);

module.exports = router;
