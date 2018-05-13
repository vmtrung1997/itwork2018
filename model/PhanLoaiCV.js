
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const PhanLoaiCV = new schema({
    id_Phanloai:{type: Schema.ObjectId},
    Ten : String
});
// tao module 
const PhanLoaiCV = mongoose.model("PhanLoaiCV",PhanLoaiCV);
module.exports=PhanLoaiCV;