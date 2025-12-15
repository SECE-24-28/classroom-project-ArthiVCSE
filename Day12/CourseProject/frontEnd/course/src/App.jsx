import { useState,useEffect  } from 'react'
import './App.css'
import { getCourses, addCourses, updateCourses, deleteCourses } from './api/CourseApi'

function App() {
  const [courses, setCourses] = useState([])
  const [duration,setDuration]=useState("")
  const [title,setTitle]=useState("")

const fetchCourse = async () => {
  const res = await getCourses();
  setCourses(res.data);
}

  useEffect(()=>{
    fetchCourse()
  },[])

  const handleSubmit=async(e)=>{
    e.preventDefault()
    await addCourses({title,duration})
    fetchCourse();
    setTitle('')
    setDuration('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/><br></br>
        <input type="text" value={duration} onChange={(e)=>setDuration(e.target.value)}/>
        <button>Add Course</button>
      </form>

<ul>
  {
    courses.map(course => (
      <li>{course.title} - {course.duration}</li>
    ))
  }
</ul>
    </>
  )
}

export default App
