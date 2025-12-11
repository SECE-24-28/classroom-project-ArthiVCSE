import React, { useContext } from "react";
import StudentContext from "./context/StudentContext";

const SearchStudent = () => {
  const { search, setSearch } = useContext(StudentContext);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchStudent;