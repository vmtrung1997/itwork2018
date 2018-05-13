
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const TTUngTuyen = new schema({
    id_TTUngTuyen:{type: Schema.ObjectId},
    id_Congviec: {type: Schema.ObjectId, ref: 'Congviec'},
    id_Ungvien: [{type: Schema.ObjectId, ref: 'UngVien'}]
});
// tao module 
const ttungtuyen = mongoose.model("TTUngTuyen",TTUngTuyen);
module.exports=ttungtuyen;