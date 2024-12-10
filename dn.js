const username = document.querySelector('.ten2')
const pass = document.querySelector('.matkhau2')


 function login(){
    if(username.value === "" || pass.value === ""){
        alert("hay nhap ten nguoi dung hoac mat khau")
    }
    else{
        const user = JSON.parse(localStorage.getItem(username.value));
        if(
            user.username === username.value &&
            user.password === pass.value
        )
        if (!user || !pass) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return false;
    }
    // So sánh mật khẩu
    if (user.password === pass.value) {
        alert("Đăng nhập thành công!");
        window.open("tt.html"); // Chuyển hướng đến trang tt.html
        return false;
    } else {
        alert("Sai mật khẩu hoặc tài khoản!");
        pass.value = ""; // Xóa nội dung ô nhập mật khẩu để người dùng nhập lại
        return false;
    }
    }
}