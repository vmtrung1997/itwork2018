
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const TTCongTy = new schema({
    id_CongTy:{type:Schema.type.ObjectId,required:true},
    TenCongTy:String,
    Logo: Text,
    DiaChi:[String],  //có thể có nhiều địa điểm
    LoaiCongViec: {type: String, enum: ['Outsourse', 'Product']},
    SoLuong: Number,
    ThoiGian: String,
    OT: String,
    MoTa:Text
});
// tao module 
const ttcongty = mongoose.model("TTCongTy",TTCongTy);
module.exports=ttcongty;