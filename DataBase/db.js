const  mongoose = require("mongoose")
// import mongoose from "mongoose"


async function connectDb(){
    // return new Promise((resolve, reject)=>{
        // const uri = 'mongodb://127.0.0.1:27017/tickers'

        try{
            
          await  mongoose.connect("mongodb://127.0.0.1:27017/tickers")
          console.log("successfully connected")
        } catch(error){
            console.error('Error connecting to MongoDB:', error);
        }

      
        
}

// export default connectDb;
module.exports=connectDb