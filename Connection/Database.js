const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://wwwxyzbadhran678:badhran@cluster0.qh7ke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));