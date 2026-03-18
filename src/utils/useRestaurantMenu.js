import { useEffect,useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const [menuData, setmenuData] = useState(null)

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
      const data = await fetch(MENU_URL + resId);

      const json = await data.text();

    //   console.log("MENU DATA:", json);

      setmenuData(json?.data)
  };
  return menuData;

};

export default useRestaurantMenu;