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


function incrementValue()
{
    var value = parseInt(document.getElementById("item1").value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById("item1").value = value;     
    }
}
function decrementValue()
{
    var value = parseInt(document.getElementById("item1").value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById("item1").value = value;
    }

}

function incrementValue2()
{
    var value = parseInt(document.getElementById("item2").value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById("item2").value = value;     
    }
}
function decrementValue2()
{
    var value = parseInt(document.getElementById("item2").value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById("item2").value = value;
    }

}

function incrementValue3()
{
    var value = parseInt(document.getElementById("item3").value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById("item3").value = value;     
    }
}
function decrementValue3()
{
    var value = parseInt(document.getElementById("item3").value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById("item3").value = value;
    }

}