const mongoose=require("mongoose");
const { type } = require("os");

const categorySchema = new mongoose.Schema({
    srNo: {
        type:Number,
        required:[true,"id required"],
        
    },

    categoryID : {
        type:Number,
        required:[true,"id required"],
    },
    categoryName : {
        type:String,
        required:[true,"name required"],
        trim:true,


    }
})
module.exports=mongoose.model("category",categorySchema)