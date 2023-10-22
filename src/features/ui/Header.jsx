import { Link } from "react-router-dom";
import SearchField from "../order/SearchField";

function Header() {
  return (
    <header>
      <SearchField />
      <h1>hello from the header</h1>
      <Link to="/">fast Pizza</Link>
    </header>
  );
}

export default Header;
