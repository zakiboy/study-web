$(function(){
	$('#entry').click(function(){
		if($('#loginName').val()==''){
			$('.mask,.dialog').show();
			$('.dialog .dialog-bd p').html('请输入管理员账号!');
		}else if($('#password').val()==''){
			$('.mask,.dialog').show();
			$('.dialog .dialog-bd p').html('请输入管理员密码!');
		}else{
			var param = new Object();
			param.loginName = $('#loginName').val();
			param.password = $('#password').val();
			param.remember = $('#remember').is(":checked");
			console.log($.param(param))
			$.ajax({
			  type: 'POST',
			  url: REAL_URL + "web/admin/login",
			  data: $.param(param),
			  dataType: 'json',
			  success: function(result){
				  console.log(result)
				  if (result.code === '210') {
					  $('.mask,.dialog').show();
					  $('.dialog .dialog-bd p').html(result.message);
					  $('#btnAffirm').click(function(){
						  location.href=LOCAL_INDEXURL;
					  });
					  $('#btnClose').click(function(){
						  location.href=LOCAL_INDEXURL;
					  });
					  $('#btnFork').click(function(){
						  location.href=LOCAL_INDEXURL;
					  });
				  }else {
					  $('.mask,.dialog').show();
					  $('.dialog .dialog-bd p').html(result.message);
				  }
			  },
			  error:function(result){
				  $('.mask,.dialog').show();
				  $('.dialog .dialog-bd p').html(result.message);
			  }
			});
		}
	});
});
