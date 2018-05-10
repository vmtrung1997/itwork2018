
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const TTTuyenDung = new schema({
    id_TTTuyenDung:{type:Number,required:true},
    
    ViTri:String,
    SoLuong:Number,
    Tuoi:Number,
    KiNang:Text,
    MoTaCongViec:Text,
    NgoaiNgu:String,
    TrinhDo:String,
    Luong:Number,
    PhucLoi:Text,
    ThoiGianLamViec:String,
    ThoiHanUngTuyen:Date,
    LienHe:Text

});
// tao module 
const tttuyendung = mongoose.model("TTTuyenDung",TTTuyenDung);
module.exports=tttuyendung;