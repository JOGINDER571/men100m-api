const express=require("express");
const app=express();
const port=process.env.PORT ||8000;
require("./db/conn");
const MensRanking=require("./models/schema");
const router = require("./routers/mens");
app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log(`Your server is listening to the port no ${port}`);
});