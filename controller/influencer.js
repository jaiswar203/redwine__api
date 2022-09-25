import { InfluencerModal } from "../model/index.js"

export const createInfluencer=async(req,res)=>{
    const body=req.body
    const {email,phone}=body
    
    const isInfluencerExist=await InfluencerModal.findOne({$or:[{phone,email}]})

    
    if(isInfluencerExist) return res.status(401).json({message:"Influencer Already Exists"})


    try {
        const createUser= await InfluencerModal.create(body)
        await createUser.save()

        res.status(201).json({message:"Influencer Created Successfuly",data:createUser})
    } catch (error) {
        console.log({error})
        res.status(500).json({message:"Error Occured"})
    }
}

export const getALlInfluencer=async(req,res)=>{
    const AllInfleucner=await InfluencerModal.find()

    res.status(201).json({message:"Fetched",data:AllInfleucner})
}