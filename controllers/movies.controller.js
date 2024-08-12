import {
  createMovies,
  getAllMovies,
  editMoviesById,
  deleteMovieById,
  getMovieById,
} from "../services/movies.service.js";

async function getAllMoviesCtrl(request, response) {
  try {
    response.send(await getAllMovies());
  } catch (error) {
    //call back funtion we have req and res
    response.send("movies not loaded");
  }
}
async function getMovieByIdCtrl(request, response) {
  const { id } = request.params;
  try {
    const res = await getMovieById(id);
    res.data
      ? response.send(res.data)
      : response.status(404).send("movie not found");
  } catch (error) {
    console.log(error);
    response.status(500).send("fail to retrireve movie");
  }
}
async function deleteMovieByIdCtrl(request, response) {
  const { id } = request.params;
  // console.log(id)
  try {
    const res = await getMovieById(id);
    if (res.data) {
      await deleteMovieById(id);
      response.send({ msg: "deleted successfully", data: res.data });
    } else {
      response.status(404).send({ msg: "Movie not found" });
    }
  } catch (error) {
    response.status(500).send("deleted failed");
  }
}
async function AddMoviesCtrl(request, response) {
  const data = request.body;
  const addMovie = {
    ...data,
    movieId: uuidv4(),
  };
  try {
    await createMovies(addMovie);

    response.status(201).send(addMovie);
  } catch (error) {
    response.status(500).send("fsil to add movie"); //something bad happend on serve is 500
  }
  // data.movieId = uuidv4();
}
async function editMoviesByIdctrl(request, response) {
  const { id } = request.params;
  const updatedata = request.body; //updated data
  try {
    const existingData = await getMovieById(id);
    if (existingData.data) {
      const result = await editMoviesById(existingData, updatedata);
      response.send(result);
    } else {
      response.status(404).send({ msg: "Movie not found" });
    }
  } catch (error) {
    response.status(500).send("failed to edit the movie");
  }
  // console.log(id, data, movieIdx);
}
export {
  getAllMoviesCtrl,
  getMovieByIdCtrl,
  deleteMovieByIdCtrl,
  AddMoviesCtrl,
  editMoviesByIdctrl,
};
