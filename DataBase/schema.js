// import mongoose from "mongoose";
const mongoose = require("mongoose")


const tickersSchema = mongoose.Schema({
    name: String,
    last: Number,
    buy: Number,
    sell: Number,
    volume: Number,
    base_unit: String,
},{
    timestamps:true
})

const Tickers = mongoose.model("Tickers", tickersSchema)
module.exports=Tickers
