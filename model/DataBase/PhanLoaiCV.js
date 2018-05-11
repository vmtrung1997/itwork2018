
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const TTUngTuyen = new schema({
    id_Phanloai:{type: Schema.ObjectId},
    Ten : String
});
// tao module 
const ttungtuyen = mongoose.model("TTUngTuyen",TTUngTuyen);
module.exports=ttungtuyen;