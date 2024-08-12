import { user } from "../entities/users.entity.js";
async function createUser(adduser) {
  return await user.create(adduser).go();
}
async function getuserbyusername(username) {
  return await user.get({ username: username }).go();
}
export { createUser, getuserbyusername };
