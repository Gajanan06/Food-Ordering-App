import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className=" mt-50 text-center text-3xl font-medium">404</h1>
       <p className=" text-center text-3xl font-medium">Oops! Page not found</p>
        <Link  className=" ml-145 text-3xl font-medium underline" to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;