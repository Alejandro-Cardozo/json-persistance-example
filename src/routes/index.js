const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello there! Shrek here.");
});

module.exports = router;
