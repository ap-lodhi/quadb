const axios =require("axios")

const Tickers = require("../DataBase/schema")
// import fetch from 'node-fetch';
// import Tickers from "../DataBase/schema";


// https://api.wazirx.com/api/v2/tickers


async function getData(){
    axios.get('https://api.wazirx.com/api/v2/tickers')
    .then(response => {
        Tickers.insertMany(response.data)
      
    })
    .catch(error => {
      console.log(error);
    });
    return res.send({
        response:'added',
        message:"data is  Crated Successufuly"
    })
    
}

async function getTickers(re,res){
    let  data = await Tickers.find().limit(10)
    console.log(data.btcinr)
    return res.send(JSON.stringify(data))
}





module.exports={getData,getTickers}

