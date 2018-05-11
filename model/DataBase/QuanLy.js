import { Z_BINARY } from "zlib";

const mongoose = require("mongoose");
const schema = mongoose.Schema;
const QuanLy = new schema({
    id_QuanLy:{type:Schema.type.ObjectId,required:true},
    ChucVu:String,
    CongViec:Text,
    HoTen:String,
    NgaySinh:Date,
    TenTaiKhoan:{type:String,required:true},
    MatKhau:{type:String,minlength:8},
    DiaChi:String,
    Sodt:{type:Number,enum: [9, 11,]},
    mail:String,
    HinhAnh:Text,
    GioiTinh:Boolean
});
// tao module 
const quanly = mongoose.model("QuanLy",QuanLy);
module.exports=quanly;