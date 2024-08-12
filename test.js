// await Movies.create({
//   movieId: "99",
//   name: "Vikram",
//   poster:
//     "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   rating: 8.4,
//   summary:
//     "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   trailer: "https://www.youtube.com/embed/OKBMCL-frPU",
// }).go();
import bcrypt from "bcrypt";
const password = "Password@123";
const NO_OF_ROUNDS = 10;
const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
const hashedPassword = await bcrypt.hash(password, salt);
console.log(salt);
//$2b$10$ES9xOXJz6vB8XH.lje0q/u this is the salt value, everytime it will create the salt value.
console.log(hashedPassword);
