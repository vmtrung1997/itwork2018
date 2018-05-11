const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UngVien = new schema({
    id_UngVien:{type:Number,required:true},
    TenTaiKhoan:{type:String,required:true}, //tên hiển thị trên web
    MatKhau:{type:String,minlength:8},  // mật khẩu đăng nhập
    Mail:String, //email đăng nhập
    AnhDaiDien:Text,
    FileCV:Text //file cv bao gồm tất cả thông tin của ứng viên
});
// tao module 
const ungvien = mongoose.model("UngVien",UngVien);
module.exports=ungvien;

//model này dùng để lưu thông tin tất cả các ứng viên hay user khi tạo tài khoản trên page