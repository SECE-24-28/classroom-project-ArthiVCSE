import React, { useContext } from "react";
import StudentContext from "./context/StudentContext";

const Student = ({ stu }) => {
  const { handleChange, handleDelete } = useContext(StudentContext);

  return (
    <li>
      <input
        type="checkbox" checked={stu.fee} onChange={() => handleChange(stu.id)}
      />
      <label>{stu.sname}</label>
      <button onClick={() => handleDelete(stu.id)}>Delete</button>
    </li>
  );
};

export default Student;