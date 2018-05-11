const mongoose = require("mongoose");
const schema = mongoose.Schema;
        ObjectId    = Schema.ObjectId;
const Congviec = new schema({
    Ten: String,
    Luong : Number,
    Vitri: String,
    Mota: String,
    id_Congty :{type:ObjectId, ref : 'TTCongty'},
    id_PhanloaiCV: [ //Phân loại công việc theo Skill [PHP, SQL, iOS, Swift, Tester]
        {
            id: { type:ObjectId, ref: 'PhanLoaiCV'},
            Ten: String
        }
    ],
    createdOn: { type: Date, 'default': Date.now }
});
// tao module 
const congviec = mongoose.model("Congviec",Congviec);
module.exports=congviec;

//model này dùng để lưu thông tin tất cả các ứng viên hay user khi tạo tài khoản trên page