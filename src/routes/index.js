const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.get("/new-movie", (req, res) => {
  res.render("new-movie");
});

router.post("/new-movie", (req, res) => {
  console.log(req.body);
  res.send("received");
});

module.exports = router;
