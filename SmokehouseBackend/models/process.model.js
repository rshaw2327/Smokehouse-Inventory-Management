const mongoose = require("mongoose");

const processSchema = new mongoose.Schema({
    id :{
        type:Number,
        required:[true,"id required"]

    },
    categoryName : {
        type:String,
        required:[true,"name required"],
        trim:true,
    },
    type:{
        type:String,
        trim:true,
    },
    where:{
        type:String,
        trim:true,
    },
    countdown:{
        type:Number,
        required:[true,"countdown time required"]
    },
    status:{
        type:String,
        required:[true,"status required"]

    },
    quantity:{
        type:Number,
        required:[true,"quantity required"]

    },
    stockId :{
        type:Number,
        required:[true,"stockid required"]
    }
})

module.export = mongoose.model("process",processSchema)