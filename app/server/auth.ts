export const isAuthorized = (request: Request) => {
  // get auth header
  const authHeader = request.headers?.get("Authorization");
  if (!authHeader) {
    return false;
  }

  const base64 = authHeader.replace("Basic ", "");
  const [username, password] = Buffer.from(base64, "base64")
    .toString()
    .split(":");

  console.log("INCOMING: ", username, password);

  console.log("PROCESS", process.env.USERNAME, process.env.PASSWORD);
  return username === process.env.USERNAME && password === process.env.PASSWORD;
};
