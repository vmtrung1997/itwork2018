const mongoose = require("mongoose");
const schema = mongoose.Schema;
const HoSo = new schema({
    id_HoSo:{type:Schema.type.ObjectId,required:true},
    TrinhDo:String,
    Truong:String,
    ChucVuHienTai:String,
    ChuyenNganh:String,
    NamTotNghiep:{type:Number,min:1950, max:2150},
    KiNang:Text,
    ChungChi:String,
    NgoaiNgu:String,
    SoThich:Text,
    TinhCach:Text,
    id_UngTuyen:{type:Schema.type.ObjectId,ref:'TuyenDung'},
    id_UngVien:{type:Schema.type.ObjectId,ref:'UngVien'},
    HinhAnh:Text
    
});
// tao module 
const hoso = mongoose.model("HoSo",HoSo);
module.exports=hoso;