const express = require("express");
const path = require("path");
const hbs = require("hbs");
// Utils
const globalData = require("./utils/global");
const countryData = require("./utils/country");

const app = express();
const port = process.env.PORT || 3000;

//middleware function
app.set("view engine","hbs");
app.use(express.static("public"))

// setup hbs partials

app.get("/",(req,res)=>{
     res.render("data")
})

// send utils data;

app.get("/global",(req,res)=>{
    globalData((data,err)=>{
        if(data){
            res.send(data)
        }else{
            res.send(err)
        }
    })
})

app.get("/countries",(req,res)=>{
    if(!req.query.country){
        res.send({error:"please provide a country name"});
    }else{
        countryData(req.query.country,(data,err)=>{
            if(!data){
                res.send(err)
            }else{
                res.send(data);
            }
        })
    }

})

app.listen(port,()=>{
    console.log("server is up and running")
})