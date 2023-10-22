import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchField() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  function onsubmitHandler(e) {
    e.preventDefault();
    if (e.target.value) return;
    navigate(`/order/${query}`);
  }
  return (
    <form onSubmit={onsubmitHandler}>
      <input
        type="text"
        placeholder="type the ID#"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchField;
