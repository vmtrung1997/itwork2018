
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const TTCongTy = new schema({
    id_CongTy:{type:Schema.type.ObjectId,required:true},
    TenCongTy:String,
    DiaChi:String,
    MoTa:Text,
    LienHe:Text

});
// tao module 
const ttcongty = mongoose.model("TTCongTy",TTCongTy);
module.exports=ttcongty;