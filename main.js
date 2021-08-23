age= prompt('Nhập tuổi của bạn')
setTimeout(function()  {
    if(age>=18) {alert('Bạn đã đủ tuổi để truy cập trang Web')}
    if(age<18) {alert("Bạn chưa đủ 18 tuổi! Vui lòng thoát ra!!")}
},1000);
