import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { InfluencerRoute } from "./routes/index.js";

const app = express();
dotenv.config({ path: "./.env" });

app.use(bodyParser.json({limit:"20mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}))
app.use(cors())
app.use(morgan("dev"))

app.use("/influencer",InfluencerRoute)

app.get("/",(req,res)=>{
    res.status(201).json({message:"Welcome"})
})

const PORT=process.env.PORT || 4000

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(()=>{
    app.listen(PORT,()=>{
        console.log("connected")
    })
}).catch((err)=>{
    console.log({err})
});
