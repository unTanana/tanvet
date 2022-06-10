import { LoaderFunction, redirect } from "@remix-run/node";

const loader: LoaderFunction = async () => {
  return redirect("/home");
};

export { loader };
