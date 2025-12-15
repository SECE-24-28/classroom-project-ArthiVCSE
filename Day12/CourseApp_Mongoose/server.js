const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const app=express()
const PORT=4000

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/mycourse").then(()=>{
    console.log("DB Connection success...")
}).catch((err)=>console.log(err))

const mycourse=require("./models/CourseModel")

//Post
app.post("/api/course",async(req,res)=>{
    try{
        const {title,duration}=req.body
        const course=new mycourse({title,duration})
        await course.save()
        res.status(201).json(course)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
    
})

//Get all courses
app.get("/api/courses",async(req,res)=>{
    try{
        const courses=await mycourse.find()
        res.json(courses)
    }
    catch{
        res.status(500).json({message:error.message})
    }
})

//Get One course
app.get("/api/course/:id",async(req,res)=>{
    try{
        const course=await mycourse.findById(req.params.id)
        if(!course){
            return res.status(404).json({message:"Course Not Found"})
        }
        res.json(course)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

//Put
app.put("/api/course/:id",async(req,res)=>{
    try{
        const {title,duration}=req.body
        const updatedcourse=await mycourse.findByIdAndUpdate(req.params.id,{title,duration},{new:true})
        if(!updatedcourse){
            return res.status(404).json({message:"Course Not Found"})
        }
        res.json(updatedcourse)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})


//Delete
app.delete("/api/course/:id",async(req,res)=>{
    try{
        const deletedcourse=await mycourse.findByIdAndDelete(req.params.id)
        if(!deletedcourse){
            return res.status(404).json({message:"Course Not Found"})
        }
        res.json({message:"Deleted successfully"})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

app.listen(PORT,()=>console.log(`Server is Running on PORT ${PORT}`))
