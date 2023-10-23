import { Link } from "react-router-dom";
import SearchField from "../order/SearchField";
import Username from "../user/Username";

function Header() {
  return (
    <header
      className="boder-storne-500 flex
     items-center justify-between 
     border-b-8 bg-yellow-500 px-4 py-3 uppercase sm:px-6"
    >
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchField />
      <Username />
    </header>
  );
}

export default Header;
