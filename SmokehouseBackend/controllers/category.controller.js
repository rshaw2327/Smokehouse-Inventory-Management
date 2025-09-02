const category = require("../models/category.model")

exports.createCategory=async(req,res,next)=>{
    const category = await category.create(req.body)
    if(!category){
        return res.status(500).json({
            success:false,
            message:"cannot create category"
        })
    }
    return res.status(201).json({
        success:true,
        message:"category created successfully",
        category

    })
}