//后退一步
$('.history').click(function () {
    history.go(-1);
});


//提交
$('.bottom').click(function() {
    var name= $('#name').val();
    var content=$('#conDetail').val();
    var phone=$('#tel').val();
    if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){
        alert("手机号码有误，请重填");
        return false;
    }
    $.ajax({
        url:C.interface.discount,
        type:'POST',
        dataType:'json',
        data:{
            name:name,
            phone:phone,
            content:content
        },
        success:function (data) {
            if(data.errorCode==200){
                alert('提交成功')
                $('#name').val('')
                $('#conDetail').val('')
                $('#tel').val('')
            }
        }


    })
});
