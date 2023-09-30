const mongoose=require("mongoose");

const RehabCourses = new mongoose.Schema({
    "_id":{ type:String ,required:true},
    "title":{ type:String ,required:true},
    "content":{type:String,required:true},
    "category":{ type:String ,required:true},
    "partnerInstitue":{ type:mongoose.Schema.Types.ObjectId ,required:true},
    "createdAt":{ type:String ,required:true},

})

module.exports=mongoose.model("RehabCourses",RehabCourses);