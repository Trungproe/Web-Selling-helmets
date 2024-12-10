const usernamedki = document.querySelector('.ten');
const passdki = document.querySelector('.matkhau');
const btndki = document.querySelector('.dki');

btndki.addEventListener("click" , (e)=>{
    e.preventDefault();
    if(
        usernamedki.value === "" ||
        passdki.value ===""
    ){
        alert("hay nhap tten nguoi dung và mat khau ");
    }else{
        const user = {
            username: usernamedki.value,
            password: passdki.value,
        };
        let json = JSON.stringify(user);
        localStorage.setItem(usernamedki.value, json);
        alert("dang ky thanh cong");
        window.location.href = "DN.HTML";
    }
});
