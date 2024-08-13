// const { v4: uuidv4 } = require("uuid");
// const express = require("express"); //importing express
// var cors = require("cors");
import express from "express";
import cors from "cors";

const app = express();
import moviesRouter from "./routes/movies.routes.js";
import usersRouter from "./routes/users.routes.js";
const PORT = process.env.PORT || 4000;

//app.use->will apply the middleware to all apis.
//
app.use(cors()); //for all the ,ethods cors is allowed
app.use(express.json());
app.use("/movies", moviesRouter);
app.use("/users", usersRouter);
//for all particular methods, we can keep in betwwen them
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩"); //call back funtion we have req and res
});
///movies to get movies
// app.get("/movies", function (request, response) {
//   response.send(movies); //call back funtion we have req and res
// });
///movies/99|: makes the id variable
// app.get("/movies/:id", function (request, response) {
//   const { id } = request.params;

//   let res = movies.find((movie) => movie.id == id);
//   if (res) {
//     response.send(res);
//   } else {
//     response.status(404).send("movie not found");
//   }
// });

// app.delete("/movies/:id", function (request, response) {
//   const { id } = request.params;
//   // console.log(id)
//   const res = movies.find((m) => m.id == id);
//   if (res) {
//     movies = movies.filter((m) => m.id != id);
//     response.send({ msg: "deleted successfully", data: res });
//   } else {
//     response.status(404).send({ msg: "Movie not found" });
//   }
// });
//body->json|middleware
//convert body into json

// app.post("/movies", express.json(), function (request, response) {
//   const data = request.body;
//   console.log(data);
//   //   console.log(uuidv4());
//   data.id = uuidv4();
//   movies.push(data);
//   response.send(data);
// });

//mix of get and push
// app.put("/movies/:id", express.json(), function (request, response) {
//   const { id } = request.params;
//   const data = request.body;

//   const movieIdx = movies.findIndex((mv) => mv.id == id);
//   if (movieIdx >= 0) {
//     movies[movieIdx] = { ...movies[movieIdx], ...data };
//     response.send(movies[movieIdx]);
//   } else {
//     response.status(404).send({ msg: "Movie not found" });
//   }
//   console.log(id, data, movieIdx);
// });

//express is converting the array of objects into json format
// /movies->movies should be displayed
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); //if this line is not there, app doesnot work, it tells which port it shuld listen to do.
