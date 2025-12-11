import { useState } from "react";
import "./App.css";
import AddStudent from "./AddStudent";
import SearchStudent from "./SearchStudent";
import Body from "./Body";
import StudentContext from "./context/StudentContext";

function App() {
  const [stuList, setStuList] = useState([
    { id: 1, sname: "Jack", fee: true },
    { id: 2, sname: "Smith", fee: false },
    { id: 3, sname: "Victor", fee: true }
  ]);

  const [newstu, setNewStu] = useState("");
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    const newList = stuList.filter((stu) => stu.id !== id);
    setStuList(newList);
  };

  const handleChange = (id) => {
    const newList = stuList.map((stu) =>
      stu.id === id ? { ...stu, fee: !stu.fee } : stu
    );
    setStuList(newList);
  };

  const addItem = (item) => {
    const sz = stuList.length - 1;
    const nid = stuList.length ? stuList[sz].id + 1 : 1;
    const newObj = { id: nid, sname: item, fee: false };
    const newList = [...stuList, newObj];
    setStuList(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newstu);
    setNewStu("");
  };

  return (
    <StudentContext.Provider
      value={{stuList,setStuList,newstu,setNewStu,search,setSearch,handleDelete,handleChange,handleSubmit
      }}
    >
      <h1>Students List</h1>
      <AddStudent />
      <SearchStudent />
      <Body />
    </StudentContext.Provider>
  );
}
export default App;