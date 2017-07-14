/**
 * Created by yxt on 2015/4/20.
 */

//add by huangbiao 禁止鼠标滚动事件=================start
//var scrollFunc=function(e){
//    e=e || window.event;
//    if(e.wheelDelta && event.ctrlKey){
//        event.returnValue=false;
//    }else if(e.detail){
//        event.returnValue=false;
//    }
//};
//
///*注册事件*/
//if(document.addEventListener){
//    $(document).on('DOMMouseScroll',scrollFunc,false);
//}
//window.onmousewheel=document.onmousewheel=scrollFunc;
//add by huangbiao 禁止鼠标滚动事件=================start

var tabs = {};
var widthLess1024 = function () {
    if ($(window).width() < 1024) {
        $("#sidebar, #navbar").addClass("collapsed");
        //$("#navigation").find(".dropdown.open").removeClass("open");
        $("#navigation").find(".dropdown-menu.animated").removeClass("animated");
        if ($("#sidebar").hasClass("collapsed")) {
            $("#content").animate({
                left : "0px",
                paddingLeft : "65px"
            }, 150,function(){
                tabs.layout();
            });
        } else {
            $("#content").animate({
                paddingLeft : "65px"
            }, 150,function(){
                tabs.layout();
            });
        }
    } else {
        $("#sidebar, #navbar").removeClass("collapsed");
        if ($("#sidebar").hasClass("collapsed")) {
            $("#content").animate({
                left : "210px",
                paddingLeft : "265px"
            }, 150,function(){
                tabs.layout();
            });
        } else {
            $("#content").animate({
                paddingLeft : "265px"
            }, 150,function(){
                tabs.layout();
            });
        }
    }
};
var widthLess768 = function () {
    if ($(window).width() < 768) {
        if ($(".collapsed-content .search").length === 1) {
            $("#main-search").appendTo(".collapsed-content .search");
        }
        if ($(".collapsed-content li.user").length === 0) {
            $(".collapsed-content li.search").after($("#current-user"));
        }
    } else {
        $("#current-user").show();
        if ($(".collapsed-content .search").length === 2) {
            $(".nav.refresh").after($("#main-search"));
        }
        if ($(".collapsed-content li.user").length === 1) {
            $(".quick-actions >li:last-child").before($("#current-user"));
        }
    }
};


$(function () {
    // Initialize tabDrop
    tabs = $('.tabdrop').tabdrop({text: '<i class="fa fa-th-list"></i>'}).data('tabdrop');
    
    initMenu();

    $("#mmenu").mmenu({
        position : "right",
        zposition : "next",
        moveBackground : false
    });
    
    initScroll();
    
    $("#sidebar .sidebar-toggle").on("click", function () {
        var d = $(this).data("toggle");
        $(d).toggleClass("collapsed");
    });

    $("#mmenu").on("opened.mm", function () {
        $("#content").getNiceScroll().hide();
        tabs.layout();
    });
    $("#mmenu").on("closed.mm", function () {
        $("#content").getNiceScroll().show();
        tabs.layout();
    });


    //主题切换
    $("#color-schemes li a").click(function () {
        var d = $(this).attr("class");
        var e = $("body").attr("class").split(" ").pop();
        $("body").removeClass(e).addClass(d);
    });

    $("#navigation .menu > li").hover(function () {
        $(this).addClass("hovered");
        $("#sidebar").addClass("open");
    }, function () {
        $(this).removeClass("hovered");
        $("#sidebar").removeClass("open");
    });

    $("#navigation .dropdown.open").data("closable", false);
    $("#navigation .dropdown").on({
        "shown.bs.dropdown" : function () {
            $(this).data("closable", false);
            $("#sidebar").getNiceScroll().resize();
        },
        click : function (d) {
            $(this).data("closable", true);
           /* if (!$(this).hasClass("open")) {
                $("li.dropdown.open").removeClass("open");
            }*/
            if ($("#sidebar").hasClass("collapsed")) {
                d.stopPropagation();
            }
            $("#sidebar").getNiceScroll().resize();
        },
        "hide.bs.dropdown" : function () {
            return $(this).data("closable");
            $("#sidebar").getNiceScroll().resize();
        }
    });

    $("#navigation .dropdown").on("show.bs.dropdown", function (d) {
        $(this).find(".dropdown-menu").addClass("animated fadeInLeft");
    });

    $(".sidebar-collapse a").on("click", function () {
        $("#sidebar, #navbar").toggleClass("collapsed");
        $("#navigation").find(".dropdown.open").removeClass("open");
        $("#navigation").find(".dropdown-menu.animated").removeClass("animated");
        $("#sidebar > li.collapsed").removeClass("collapsed");
        if ($("#sidebar").hasClass("collapsed")) {
            if ($(window).width() < 1024) {
                $("#content").animate({
                    left : "0px"
                }, 150,function(){
                    tabs.layout();
                });
            } else {
                $("#content").animate({
                    paddingLeft : "65px"
                }, 150,function(){
                    tabs.layout();
                });
            }
        } else {
            if ($(window).width() < 1024) {
                $("#content").animate({
                    left : "210px"
                }, 150,function(){
                    tabs.layout();
                });
            } else {
                $("#content").animate({
                    paddingLeft : "265px"
                }, 150,function(){
                    tabs.layout();
                });
            }
        }
    });

    widthLess1024();
    widthLess768();
    
    $(window).resize(function () {
        widthLess1024();
        widthLess768();

    });

    $(".page-refresh").click(function () {
        location.reload();
    });
    
    function b(d) {
        $(d).block({
            message : '<div class="el-reloader"></div>',
            overlayCSS : {
                opacity : 0.6,
                cursor : "wait",
                backgroundColor : "#000000"
            },
            css : {
                padding : "5px",
                border : "0",
                backgroundColor : "transparent"
            }
        });
    }
    function c(d) {
        $(d).unblock();
    }
    $(".tile-header .controls .refresh").click(function () {
        var d = $(this).parent().parent().parent();
        b(d);
        window.setTimeout(function () {
            c(d);
        }, 1000);
        return false;
    });
    $(".tile-header .controls .remove").click(function () {
        $(this).parent().parent().parent().addClass("animated fadeOut");
        $(this).parent().parent().parent().attr("id", "el_remove");
        setTimeout(function () {
            $("#el_remove").remove();
        }, 500);
        return false;
    });


/*// Sample 1
    $.jGrowl("Hello world!");
// Sample 2
    $.jGrowl("Stick this!", { sticky: true });
// Sample 3
    $.jGrowl("A message with a header", { header: 'Important' });
// Sample 4
    $.jGrowl("A message that will live a little longer.", { life: 10000 });
// Sample 5
    $.jGrowl("A message with a beforeOpen callback and a different opening animation.", {
        beforeClose: function(e,m) {
            alert('About to close this notification!');
        },
        animateOpen: {
            height: 'show'
        }
    });
var html = ' test............. ';
    $('#test1').jGrowl(html, {
        header:"Theme of alert",
        closer: false,
        theme:'fade in notification notification-success',
        sticky: true
    });*/

});


function initMenu(){
	var user = JSON.parse($.cookie(ump.userCookie));
	var userName = "";
	if(user){
	    userName = user.userName;
	} else {
		//window.location.href = "login.html";
	}
    $(".menu").menu({
        ajaxOption:{
        	url:"/" + ump.contextPath+"/app/data/m.json"
            //url:"/" + ump.contextPath +"/app/data/m.json"
			//url:"/" + ump.contextPath+"/rest/permission/service/userMenu/getMenuTreeByParentAndUser/?userCode=" + user.userName + "&parentMenuCode="+ump.treeRoot
        },
        afterActive:function(tab){
            tabs.add(tab);
            //tab页字体颜色设置  sky
            $("#li_content_" + $(tab).attr("id")).attr("style", "color:black");
            tabs.layout();
        }
    }).data("menu").load();

    //Tab 的关闭事件
    $(".tabdrop .tab-close i").click(function(){
        var tab = $(this).parents("li");
        tabs.del(tab);
    });
}

/**
 * 初始化滚动条
 */
function initScroll(){
    $("#sidebar").niceScroll({
        cursorcolor : "#000000",
        zindex : 999999,
        bouncescroll : true,
        cursoropacitymax : 0.4,
        cursorborder : "",
        cursorborderradius : 0,
        cursorwidth : "7px",
        //railalign : "right",
        autohidemode : false,
        railoffset : {
            top : 45,
            left : 0
        }
    });

    $("#content").niceScroll({
        cursorcolor : "#000000",
        zindex : 999999,
        bouncescroll : true,
        cursoropacitymax : 0.4,
        cursorborder : "",
        cursorborderradius : 7,
        cursorwidth : "7px",
        background : "rgba(0,0,0,.1)",
        //autohidemode : false,
        railpadding : {
            top : 5,
            right : 0,
            left : 2,
            bottom : 0
        }
    });

    $(".tab-content.mm-panel").niceScroll({
        cursorcolor : "#000000",
        zindex : 999999,
        bouncescroll : true,
        cursoropacitymax : 0.4,
        cursorborder : "",
        cursorborderradius : 0,
        cursorwidth : "7px",
        railalign : "right",
        railoffset : {
            top : 45,
            left : 0
        }
    });
}


$(window).load(function () {
    $("#loader").delay(500).fadeOut(300);
    $(".mask").delay(800).fadeOut(300, function () {
        widthLess1024();
        widthLess768();
    });
});
