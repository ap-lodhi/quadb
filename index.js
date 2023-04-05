const express = require("express");
const connectDb =require("./DataBase/db")
const {getData,getTickers} = require('./controllers/tickers')





// import express from "express"
// import connectDb from "../QuadB_Tech/DataBase/db";



const PORT = process.env.PORT || 8000 ;
const app = express()
app.use(express.json());



// fetch('https://api.wazirx.com/api/v2/tickers')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));

app.get('/', (req,res)=>{
    res.send("hii")

})


app.get('/tickers', getTickers);

connectDb().then(()=>{

    app.listen(PORT, ()=>{
    
        console.log(`listening on port ${PORT}`)
    })
})