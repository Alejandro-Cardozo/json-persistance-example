const { Router } = require("express");
const router = Router();
const fs = require("fs");
const uuid = require("uuid/v4");

const json_movies = fs.readFileSync("src/movies.json", "utf-8");
let movies = JSON.parse(json_movies);

router.get("/", (req, res) => {
  res.render("index.ejs", {
    movies
  });
});

router.get("/new-movie", (req, res) => {
  res.render("new-movie");
});

router.post("/new-movie", (req, res) => {
  const { title, director, image, description } = req.body;
  if (!title || !director || !image || !description) {
    res.status(400).send("Please complete each field in the form");
    return;
  }
  let newMovie = {
    id: uuid(),
    title,
    director,
    image,
    description
  };
  movies.push(newMovie);
  const json_movies = JSON.stringify(movies);
  fs.writeFileSync("src/movies.json", json_movies, "utf-8");
  res.redirect("/");
});

router.get("/delete/:id", (req, res) => {
  movies = movies.filter(movie => movie.id != req.params.id);
  const json_movies = JSON.stringify(movies);
  fs.writeFileSync("src/movies.json", json_movies, "utf-8");
  res.redirect("/");
});

module.exports = router;
