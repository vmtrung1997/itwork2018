const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UngVien = new schema({
    
});
// tao module 
const ungvien = mongoose.model("UngVien",UngVien);
module.exports=ungvien;

//model này dùng để lưu thông tin tất cả các ứng viên hay user khi tạo tài khoản trên page