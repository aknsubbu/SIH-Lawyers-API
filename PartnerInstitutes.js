const mongoose=require("mongoose");

const PartnerInst=new mongoose.Schema({
    "_id":{ type:String ,required:true},
    "name":{ type:String ,required:true},
    "location":{ type:String ,required:true},
    "contactDetails":{
        "phone":{ type:String ,required:true},
        "email":{ type:String ,required:true},
    }
});

module.exports=mongoose.model("PartnerInst",PartnerInst);