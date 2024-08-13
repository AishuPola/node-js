import { createUser, getuserbyusername } from "../services/users.service.js";
import bcrypt from "bcrypt";

//$2b$10$ES9xOXJz6vB8XH.lje0q/u this is the salt value, everytime it will create the salt value.

const genHashPassword = async (password) => {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
export async function createUserctr(request, response) {
  const data = request.body;
  if (data.password.length < 8) {
    response.status(400).send({ msg: "pass is too short" });
    return;
  }
  const userFromDb = await getuserbyusername(data.username);

  if (userFromDb.data) {
    response.status(400).send({ msg: "username already taken" });
    return;
  }
  const hashedPassword = await genHashPassword(data.password);
  try {
    await createUser({ username: data.username, password: hashedPassword });

    response.status(201).send(data);
  } catch (error) {
    response.status(500).send("fail to add user"); //something bad happend on serve is 500
  }
}
export async function loginUserctr(request, response) {
  const data = request.body;
  const userFromDb = await getuserbyusername(data.username);
  if (!userFromDb.data) {
    response.status(400).send({ msg: "invalid crendentials" });
    return;
  } else {
    const storedDbPassword = userFromDb.data.password;
    const providedPassword = data.password;

    const ispasswordcheck = await bcrypt.compare(
      storedDbPassword,
      providedPassword
    );
    console.log(ispasswordcheck);
    if (ispasswordcheck) {
      response.status(200).send({ msg: "login sucessfull" });
    } else {
      response.status(400).send({ msg: "invalid crendentails" });
    }
  }
}
