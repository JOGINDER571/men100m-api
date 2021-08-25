const express=require("express");
const router =new express.Router();
const MensRanking=require("../models/schema");

//create api
router.post("/mens",async(req,res)=>{
    try{
        const createData=new MensRanking(req.body);
        const insertMens=await createData.save();
        res.status(201).send(insertMens);
    }catch(e){
        res.status(400).send(e);
    }
});
//read api
router.get("/mens",async(req,res)=>{
    try{
        const getMens=await MensRanking.find({}).sort({"ranking":1});
        res.status(201).send(getMens);
    }catch(e){
        res.status(400).send(e);
    }
});
//read api individual
router.get("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMen=await MensRanking.findById(_id);
        res.status(201).send(getMen);
    }catch(e){
        res.status(400).send(e);
    }
});
//update api 
router.patch("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updateMen=await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(updateMen);
    }catch(e){
        res.status(500).send(e);
    }
});
//delete api 
router.delete("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const deleteMen=await MensRanking.findByIdAndDelete(req.params.id);
        res.send(deleteMen);
    }catch(e){
        res.status(500).send(e);
    }
});

module.exports=router;