
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const TTUngTuyen = new schema({
    id_TTUngTuyen:{type: Schema.type.ObjectId},
    id_Congviec: {type: Schema.type.ObjectId, ref: 'Congviec'},
    id_Ungvien: [{type: Schema.type.ObjectId, ref: 'UngVien'}]
});
// tao module 
const ttungtuyen = mongoose.model("TTUngTuyen",TTUngTuyen);
module.exports=ttungtuyen;