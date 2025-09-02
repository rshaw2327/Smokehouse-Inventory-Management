const mongoose=require("mongoose");
const { type } = require("os");

const stockSchema = new mongoose.Schema({
    id: {
        type:Number,
        required:[true,"id required"],
        
    },

    categoryName : {
        type:String,
        required:[true,"name required"],
        trim:true,
    },

    quantity : {
        type:Number,
        required:[true,"quantity required"]
    }


})
module.exports=mongoose.model("stock",stockSchema)