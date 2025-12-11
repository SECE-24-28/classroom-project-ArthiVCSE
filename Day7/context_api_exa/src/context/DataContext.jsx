import { Children, createContext, useState} from "react";
const DataContext=createContext();

const Dataprovider=({children})=>
{
    const [name,setName]=useState("Prem");
    const [count,setCount]=useState(100);
    const demo=()=>
    {
        return "India"
    }
    return(
        <DataContext.Provider value={{name,setName,count,setCount,demo}}>
            {
                Children
            }
        </DataContext.Provider>
    );
};

export default DataContext;
