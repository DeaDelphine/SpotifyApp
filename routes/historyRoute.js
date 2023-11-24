const HistoryRouter = require("express").Router();
const {
  allHistorys,
  postHistory,
  putHistory,
  removeHistory,
} = require("../controllers/HistoryController");

HistoryRouter.get("/all", allHistorys);
HistoryRouter.post("/create", postHistory);
HistoryRouter.put("/:id/edit", putHistory);
HistoryRouter.delete("/:id/delete", removeHistory);

module.exports = HistoryRouter;
