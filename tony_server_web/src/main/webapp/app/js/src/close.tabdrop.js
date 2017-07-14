/**
 * Created by yxt on 2015/5/12.
 */
+function( $ ) {

    //CLOSE TAB DROP CLASS DEFINITION
    // ====================

    $.extend($.fn.tabdrop.prototype,{
        //添加 Tab
        add:function(tab){
            var me = this;
            var tabDropDropDown = $(".dropdown.pull-right.tabdrop");
            var label = tab.menuName;
            var tabId = "content_" + tab.id;
            var url = tab.url;
            if(label === "首页"){
                $("#li_users-tab").tab('show');
                return;
            }
            if($("#" + tabId).length > 0){
                $("#li_" + tabId).tab('show');
                $("#" + tabId).load(tab.url);
                return;
            }
            $(".tile-body.tab-content").append('<ul id="' + tabId + '" class="tab-pane fade">' + label + '</ul>');
            if(!tabDropDropDown.hasClass("hide")){
                $(".dropdown.pull-right.tabdrop ul.dropdown-menu").append('<li><a href="#'+tabId+'" data-toggle="tab" id="li_'+tabId+'"><i class="'+ tab.icon +'"></i> '+label+'</a><span class="label label label-transparent-black tab-close"><i class="fa fa-times"></i></span></li>');
            }else {
                $(".nav.nav-tabs.tabdrop").append('<li><a href="#' + tabId + '" data-toggle="tab" id="li_'+tabId+'"><i class="'+ tab.icon +'"></i> ' + label + '</a><span class="label label label-transparent-black tab-close"><i class="fa fa-times"></i></span></li>');
            }
            $("#li_" + tabId).tab('show');
            //TODO 根据菜单上的配置选择数据的加载方式
            $("#" + tabId).load(tab.url,function(XMLHttpRequest, textStatus, errorThrown){
                if(textStatus == "error"){
                    me.del($("#li_" + tabId).next().find("i").parents("li")[0]);
                }
            });

            //添加 新增的 Tab 关闭事件
            $("#li_"+ tabId).next("span").click(function(){
                var tab = $(this).parents("li");
                me.del($(tab[0]));
            });
        },
        //删除 Tab
        del:function(tab){
            var me = this;
            var prev = $(tab).prev();
            var tabId = $(tab).find("a").attr("href");
            if("" != tabId || "#" != tabId){
                $(tabId).remove();
            }
            var dropdownMenu = $(tab).parents("ul.dropdown-menu");
            if($(dropdownMenu).children().length == 1){
                prev = $(dropdownMenu).parents("ul.nav.nav-tabs.tabdrop").last();
            }
            if($(tab).hasClass("active")){
                prev.find("a").tab("show");
            }
            $(tab).remove();
            me.layout();
        }
    });


}( window.jQuery );
