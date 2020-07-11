// Coupon Code pop up message

var couponCd = document.querySelector('#button-addon3');

couponCd.addEventListener('click' , function(){
    var copCdvalue = document.querySelector('.form-control').value;
    if(copCdvalue.length == 0){
        alert('Please apply coupon code');
    } else {
        alert('Coupon Code Applied!!');
    }
});