import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <Provider store = {appStore}>
    <div>
      <Navbar />
      <Outlet />
    </div>
    </Provider>
  );
};

export default App;
