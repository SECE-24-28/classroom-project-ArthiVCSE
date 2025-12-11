import { createContext, useState ,useEffect} from 'react';
import { format } from 'date-fns';
import api from '../api/Post';

const DataContext = createContext()
export const DataProvider=({children})=>
{

  const [posts, setPosts] = useState([])
  const [search,setSearch]=useState("")
  const [searchResult,setSearchResult]=useState([])
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')

useEffect(()=>
  {
    const fetData=async()=>{
      try{
      const res= await api.get('/feedback')
      //console.log(res.data)
      setPosts(res.data)}
      catch(err){
        console.log(err)
      }
    }
    fetData();
  },[])


  useEffect(()=>
  {
    const filtered=posts.filter((post)=> (post.title).includes(search))
  
    setSearchResult(filtered)
  },[posts,search]
  )

  const handleSubmit=(e)=>{
    e.preventDefault()
    const id=(posts.length)?(Number(posts[posts.length-1].id)+1):(1)
    const dateTime=format(new Date(),'MMM dd,yyyy pp')

    //newObj={id:id,title:title,dateTime:datetime,body:body}
    const newObj={id,title,dateTime,body}

    api.post("/feedback",newObj)
    const newList=[...posts,newObj]
    setPosts(newList)

    setTitle('')
    setBody('')
  }
  return (
    <DataContext.Provider value={{posts,searchResult,title,setTitle,body,setBody,search,setSearch,handleSubmit}}>
        {children}
    </DataContext.Provider>
  )

}

export default DataContext