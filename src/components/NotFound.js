import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
       <p>Oops! Page not found</p>
        <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;