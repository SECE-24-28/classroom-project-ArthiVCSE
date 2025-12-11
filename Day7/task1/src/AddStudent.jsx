import React, { useContext } from "react";
import StudentContext from "./context/StudentContext";

const AddStudent = () => {
  const { newstu, setNewStu, handleSubmit } = useContext(StudentContext);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New Student"
          value={newstu}
          onChange={(e) => setNewStu(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddStudent;