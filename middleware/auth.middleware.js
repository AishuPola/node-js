const auth = (request, response, next) => {
  const token = request.header("x-auth-token");
  console.log(token);
};
export { auth };
