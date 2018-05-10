
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const TTUngTuyen = new schema({
    id_TTUngTuyen:{type:Number,required:true},
    ViTri:String,
    ThoiGianBD:Date,
    QuyenLoi:Text,
    HinhThucCongViec:{type:String,enum:['Part time','Full time']},
    SoNamKinhNghiem:Number,
    KiNang:Text
});
// tao module 
const ttungtuyen = mongoose.model("TTUngTuyen",TTUngTuyen);
module.exports=ttungtuyen;