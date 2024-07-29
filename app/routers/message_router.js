const { Router } = require("express");
const {
  sendMessage,
  sendBulkMessage,
} = require("../controllers/message_controller");
const MessageRouter = Router();

MessageRouter.get("/", (req, res) => {
  res.send("Welcome to the message router");
});
MessageRouter.all("/send-message", sendMessage);
MessageRouter.all("/send-bulk-message", sendBulkMessage);

module.exports = MessageRouter;
