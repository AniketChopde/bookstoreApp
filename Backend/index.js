import  express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookroute from "./router/book.router.js"
import cors from "cors";
import userroute from "./router/user.router.js"
const app = express()



dotenv.config();
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URL = process.env.MongoURL
// connect to mongoDB 
try {
    mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    console.log("connect to mongo")
} catch (error) {
    console.log("error",error)
    
}
//define routes
app.use("/book",bookroute)
app.use("/user",userroute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})