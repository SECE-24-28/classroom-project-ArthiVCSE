import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [num, setNum] = useState(100);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <DataContext.Provider value={{ num, setNum, inc, dec }}>
      {children}
    </DataContext.Provider>
  );
};


export { DataProvider, DataContext };