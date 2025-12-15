import axios from 'axios'
const api=axios.create({baseURL:"http://localhost:4000/api"})

export const getCourses=()=>api.get("/courses")
export const addCourses=(course)=>api.post("/courses",course)
export const updateCourses=(id,course)=>api.put(`/courses/${id}`,course)
export const deleteCourses=(id)=>api.delete(`/courses/${id}`)