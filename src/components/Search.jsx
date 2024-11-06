import { useState } from "react";

const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  const handleClear = () => {
    setValue("");
    cb("");
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="search"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          className="btn red"
          style={{ position: "absolute", top: 0, right: "60px" }}
          onClick={handleSubmit}
          aria-label="Search"
          title="Search"
        >
          <i className="large material-icons">search</i>
        </button>
        <button
          className="btn red"
          style={{ position: "absolute", top: 0, right: 0 }}
          onClick={handleClear}
          aria-label="Clear"
          title="Clear"
        >
          <i className="large material-icons">clear</i>
        </button>
      </div>
    </div>
  );
};

export default Search;
