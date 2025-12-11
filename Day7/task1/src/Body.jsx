import React, { useContext } from "react";
import Student from "./Student";
import StudentContext from "./context/StudentContext";

const Body = () => {
  const { stuList, search } = useContext(StudentContext);

  return (
    <div>
      <ul>
        {stuList
          .filter((list) => list.sname.includes(search))
          .map((stu) => (
            <Student key={stu.id} stu={stu} />
          ))}
      </ul>
    </div>
  );
};

export default Body;