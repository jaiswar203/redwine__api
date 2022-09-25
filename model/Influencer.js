import mongoose from "mongoose";

const influencerSchema=mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    platform:{
        type:Array,
        required:true ,
        default:[]
    },
    reason:{
        type: Array,
        required:true,
        default:[]
    },
    keyChannel:{
        instagram:String,
        youtube:String
    },
    follower:{
        type:String,
        required:true
    },
    genre:{
        type:Array,
        required:true,
        default:[]
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    prevbrand:{
        type:String,
        required:true
    }
})


const InfluencerModal=mongoose.model("influencer",influencerSchema)

export default InfluencerModal