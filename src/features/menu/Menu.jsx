// we want to fetch data for this component
// to do so we will use a loader function
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const data = useLoaderData();

  return (
    <ul className="devide-y divide-stone-200 px-2">
      {data.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// creating a loader function that will call our fetch function

export async function loader() {
  //this function will call our fetch function
  const menu = await getMenu();
  return menu;
}

export default Menu;
