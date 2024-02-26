const express = require("express");
const router = express.Router();

const {
  addMessage,
  getMessage,
  updateMessage,
  showAllMessages,
  dealOfMessage
} = require("../controllers/message");

router.post("/add", addMessage);
router.put("/update/:id", updateMessage);
router.get("/getall/", showAllMessages);
router.get("/getbyid/:id", getMessage);
router.delete("/dealOfMessage/:id", dealOfMessage);

module.exports = router;