import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1 className=" m-50 text-center text-3xl font-medium">Oops!</h1>
      <h2 className=" m-50 text-center text-3xl font-medium">{err.status}</h2>
      <p className=" m-50 text-center text-3xl font-medium">{err.statusText || err.message}</p>
    </div>
  );
};


export default Error;