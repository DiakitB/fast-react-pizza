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
        className="focus: rounded-full px-3 py-2
         text-sm outline-none placeholder:text-stone-800 
         focus:ring sm:focus:w-72"
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchField;
