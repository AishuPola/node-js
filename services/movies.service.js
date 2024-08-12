import { Movies } from "../entities/movies.entity.js";
async function createMovies(addMovie) {
  await Movies.create(addMovie).go();
}

async function getAllMovies() {
  return (await Movies.scan.go()).data;
}

async function editMoviesById(existingData, updatedata) {
  return await Movies.put({
    ...existingData.data,
    ...updatedata,
  }).go();
}

async function deleteMovieById(id) {
  await Movies.delete({ movieId: id }).go();
}

async function getMovieById(id) {
  return await Movies.get({ movieId: id }).go();
}
export {
  createMovies,
  getAllMovies,
  editMoviesById,
  deleteMovieById,
  getMovieById,
};
