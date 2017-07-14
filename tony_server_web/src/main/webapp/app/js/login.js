/**
 * Created by yxt on 2015/1/21.
 */
$(document).ready(function() {
	ump.init({
		title:'统一平台',
		titleId:'systemTitle'
	});
	//ump.proxy.put("base", "http://yxt.com:8080/ump_resource_web/rest/");
	var username = $.cookie("ump_username");
	$("#login-username").val(username);
	$("#login-username").focus();
	$(document).keypress(function(event){
	    var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == '13'){
	        login();
			return false;
	    }
	});
});

function show_box(id) {
	$('.widget-box.visible').removeClass('visible');
	$('#' + id).addClass('visible');
	$("#login-username").focus();
	$("#lost-mail").focus();
	$("#register-mail").focus();
}

function login() {
	var input = $("#login-form input");
	for (var i = 0; i < input.length; i++) {
		var value = input[i].value;
		if (value == '') {
			$.gritter.add({
				title : '提示',
				text : input[i].placeholder + "不能为空！",
				class_name : 'gritter-error gritter-center  gritter-light'
			});
			return;
		}
	}
	var username = input[0].value;
	var form = $("#login-form");
	var basePath = "/" + ump.mvcContextPath;
	var options = {
		// proxy:'base',
		contentType : 'application/json',
		headers : {
			'Accept' : 'application/json'
		},
		url : basePath + '/user/login?' + form.serialize(),
		type : 'post',
		success : function(data) {
			if (data.status == "success" || data.status == "SUCCESS") {
				var user = data.message;
				var historyUser = $.cookie(ump.userCookie);
				if (!historyUser)
					$.cookie(ump.userCookie, null);
				$.cookie(ump.userCookie, JSON.stringify(user));
				window.location.href = "index.html";
				if(document.getElementById("login-remember").checked){
					$.cookie("ump_username", username,{expires:7});
				}
			} else {
				$.gritter.add({
					title : '提示',
					text : data.message,
					class_name : 'gritter-error gritter-center  gritter-light'
				});
			}
		},
		error : function(data) {
			$.gritter.add({
				title : '提示',
				text : data,
				class_name : 'gritter-error gritter-center  gritter-light'
			});
		}
	};
	$.ajax(options);
	// 在jsonp 的时候，使用此封装 ump.form.submit(form,options);
}

function findPassword() {
	var form = $("#findPassword-form");
	var basePath = "/" + ump.mvcContextPath;
	var options = {
		// proxy:'base',
		contentType : 'application/json',
		headers : {
			'Accept' : 'application/json'
		},
		url : basePath + '/user/findPassword?' + form.serialize(),
		type : 'post',
		success : function(data) {
			if (data.status == "ERROR") {
				$.gritter.add({
					title : '提示',
					text : data.message,
					class_name : 'gritter-error gritter-center  gritter-light'
				});
			} else {
				$.gritter.add({
					title : '提示',
					text : data.message,
					class_name : 'gritter-info gritter-center  gritter-light'
				});
			}

		},
		error : function(data) {
			$.gritter.add({
				title : '提示',
				text : data,
				class_name : 'gritter-error gritter-center  gritter-light'
			});
		}
	};
	$.ajax(options);
}

function register() {
	var input = $("#register-form input");
	for (var i = 0; i < input.length; i++) {
		var value = input[i].value;
		if (value == '') {
			$.gritter.add({
				title : '提示',
				text : input[i].placeholder + "不能为空！",
				class_name : 'gritter-error gritter-center  gritter-light'
			});
			return;
		}
	}
	var password = $('#register-form input[type=password]');
	if(password.length==2){
		if(password[0].value!=password[1].value){
			$.gritter.add({
				title : '提示',
				text : "两次输入的 密码不一致！",
				class_name : 'gritter-error gritter-center  gritter-light'
			});
			return;
		}
	}
	var form = $("#register-form");
    //console.log(form.serialize());
	// var formData = form.
	/*
	 * var users = [ {"name":"Jersey","site":"http://jersey.java.net"},
	 * {"age":33,"phone":"158158158","name":"Foo"},
	 * {"name":"JSON-P","site":"http://jsonp.java.net"} ];
	 * console.log(obj2JsonStr(users));
	 * 
	 * 
	 * $.ajax({ type: "POST",//使用get方法访问后台 dataType: "jsonp",//返回json格式的数据 url:
	 * "http://localhost:8080/jersey-examples-json-processing-webapp/document/multiple",//要访问的后台地址
	 * data: obj2JsonStr(users),//要发送的数据 contentType : 'application/json',
	 * headers : { 'Accept' : 'application/json',
	 * "Content-Type":"application/json" }, success:function(data){
	 * console.log(arguments); }, error:function(data){ console.log(arguments); }
	 * });
	 * 
	 * return;
	 */
	var basePath = "/" + ump.mvcContextPath;
	var options = {
        data:form.form2json(),
        contentType : 'application/json',
        headers : {
            'Accept' : 'application/json'
        },
		// proxy:'base',
		url : basePath + '/user/register',
		type : 'post',
		success : function(data) {
			$.gritter.add({
				title : '提示',
				text : "注册成功",
				class_name : 'gritter-info gritter-light'
			});
			show_box("login-box");
            position();
		},
		error : function(data) {
			$.gritter.add({
				title : '提示',
				text : data,
				class_name : 'gritter-error gritter-center  gritter-light'
			});
		}
	};
	$.ajax(options);
	//ump.form.ajax(form, options);
}

//登录界面内容垂直居中
function position(){
	var position = $("#position");
	var positionHeight =$("#position").height();
	position.css({
		"top":"50%",
		"margin-top":-positionHeight/2+'px'
	});
}
position();
