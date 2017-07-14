/**
 * Created by yxt on 2015/5/8.
 */

(function ($) {
    var me = {};
    var Menu = function(element, options) {
        this.element = $(element);
        if(options != undefined && options != null && options.ajaxOption != undefined  && options.ajaxOption != null){
            $.extend(this.ajaxOption,options.ajaxOption);
        }
        delete options.ajaxOption;
        $.extend(this,options);
        me = this;
    };
    var menuElement = {
        parentTemplate:'<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" id="{0}" style="color:black">' +
            '<i class="{1}"></i> {2}' +
            '<b class="fa fa-plus dropdown-plus"></b>' +
            '</a>',
        menuTemplate :'<li class="{0}">' +
            '<a href="{1}" id="{2}" style="color:black">' +
            '    <i class="{3}"></i>' +
            '    {4}' +
            '</a>' +
            '</li>'
    };

    function menuToMap(menuList){
        if(menuList == null || menuList == "" || menuList == {} || menuList.length == 0) return;
        $.each(menuList,function(i,val){
            me.menuMap.put(val.id,val);
            menuToMap(val.children);
        });
    }


    Menu.prototype = {
        constructor: Menu,
        autoLoad:true,
        ajaxOption:{
            type: "get",//使用get方法访问后台
            dataType: "json",//返回json格式的数据
            url: "/" + ump.contextPath+"/app/data/menu.json",//要访问的后台地址
            async: false,
            success:function(data){
                me.loadSuccess(arguments);
				me.menuData = data.message;
                me.menuMap = new HashMap();
                menuToMap(me.menuData);
            },
            error:function(data){
                me.loadError(arguments);
            }
        },
        setTitle:function(title){
            this.title = title;
            return this;
        },
        getTitle:function(){
            return this.title;
        },

        /**
         * 加载数据
         * @param data 传入的数据 如果传入了数据，则不进行 ajax 数据加载
         */
        load:function(data){
            if(me.menuData != null && me.menuData != undefined){
                return;
            }
            if(typeof data === "Object"){
                me.menuData = data;
            }else{
                me.beforeLoad();
                $.ajax(me.ajaxOption);
                me.afterLoad();
                me.show();
            }
            me.createEle();
        },
        /**
         * 加载数据前操作
         */
        beforeLoad:function(){},
        /**
         * 加载数据之后操作
         */
        afterLoad:function(){},
        /**
         * 数据加载成功
         */
        loadSuccess:function(args){},
        /**
         * 数据加载失败
         */
        loadError:function(args){},
        /**
         * 创建菜单的 Element
         */
        createEle:function(args){
            var data = this.menuData;
        },
        afterShow:function(){},
        beforShow:function(){},
        show:function(){
            var apendMenuHtml = function(data){
                var menuHtml = "";
                $.each(data, function(i,val){
                    if(val.children == null || val.children.length == 0){
						menuHtml += menuElement.menuTemplate.format("","/" + ump.contextPath + "/" + val.url,val.id,val.icon,val.menuName);
                    }else{
                        menuHtml += menuElement.parentTemplate.format(val.id,val.icon,val.menuName);
                        menuHtml += '<ul class="dropdown-menu">';
                        menuHtml += apendMenuHtml(val.children);
                        menuHtml += '</ul></li>';
                    }
                });
                return menuHtml;
            };
            var html = apendMenuHtml(me.menuData);
            me.element.html(html);
            $(me.element).find("li a").on("click",function(e) {
                //$(me.element).find(".active").removeClass("active");  //delete by huangbiao
                var parentMenu = $(e.target).parents(".dropdown");
                var li = $(e.target).parents("li")[0];

                //3) 点击的菜单已经打开的话，不在打开新的菜单 start
                var currentMenu = $(li).find("a").attr("id");
                var theTabs = tabs.element.find("a");
                vm.newTabFlg = true;
                for(var i = 0; i < theTabs.length; i++){
                    var tabsId = $(theTabs[i]).attr("id");
                    if(!!tabsId && tabsId.indexOf(currentMenu) != -1){
                        $(li).find("a").attr("href",$(theTabs[i]).attr("href"));
                        vm.newTabFlg = false;
                    }
                }

                $(li).addClass("active");
                if (!$(li).hasClass("dropdown")) {
                    try {
                        me.setActive($(e.target));
                    } catch (ex) {
                        console.log(ex);

                        console.log(ex.getStack());
                    }
                    e.preventDefault();
                }
                //1) add by huangbiao for 选中菜单后给背景颜色的功能 start
                $(me.element).find(".defineBgColor").removeClass("defineBgColor");
                if (li.getAttribute("class") == "active") {
                    $(li).addClass("defineBgColor");
                }
                //add by huangbiao for 选中菜单后给背景颜色的功能 end
                //2)modify by huangbiao for 添加打开之后再次点击则关闭的功能 start
                //新增的代码  add ========start
                if (parentMenu.length > 0) {
                    $(parentMenu).addClass("active");
                    if (!$("#sidebar").hasClass("collapsed") && !$(li).hasClass("open")) {
                        if ($(parentMenu).hasClass("dropdown"))$(parentMenu).addClass("open");
                    } else {
                        $(li).removeClass("open");
                        $(li).removeClass("active")
                    }
                    $(parentMenu).data("closable", false);
                    e.stopPropagation();
                }
                //新增的代码  add ========end
                //原来的代码  delete ========start
                // $(me.element).find("li.dropdown.open").removeClass("open");
                //if(parentMenu.length > 0){
                //    $(parentMenu).addClass("active");
                //    if (!$("#sidebar").hasClass("collapsed")) {
                //        if($(parentMenu).hasClass("dropdown"))$(parentMenu).addClass("open");
                //    }
                //    $(parentMenu).data("closable", false);
                //    e.stopPropagation();
                //}
                //原来的代码  delete ========end
                //modify by huangbiao for 添加打开之后再次点击则关闭的功能 end
            });
        },
        /**
         * 设置激活
         * @param menuNode 菜单Id或菜单的Node
         */
        setActive:function(menuNode) {
            var currentMenu = typeof menuNode === "String" ? $("#" + menuNode) : menuNode;
            var menuId = menuNode.attr("id");
            var menuTab = me.menuMap.get(menuId);
            //modify by huangbiao for 打开某个菜单，查询出数据之后，再重新点击这个菜单，整个页面初始化的问题 start
            //delete start
            //me.afterActive(menuTab);
            //delete end
            // add start
            if (vm.newTabFlg) {
                me.afterActive(menuTab);
            }else{
                var id = menuTab.id;
                $("#li_content_" + id).click();
            }
            // add end
            //modify by huanbiao  for  打开某个菜单，查询出数据之后，再重新点击这个菜单，整个页面初始化的问题 end
        },
        afterActive:function(menuNode){
           /* var tabDropDropDown = $(".dropdown.pull-right.tabdrop");
             var label = menuNode.text();
             var nodeId = menuNode.attr("id");
             if(!tabDropDropDown.hasClass("hide")){
             $(".dropdown.pull-right.tabdrop ul.dropdown-menu").append('<li><a href="#content_'+nodeId+'" data-toggle="tab" id="li_'+nodeId+'">'+label+'</a><span class="label label label-transparent-black tab-close"><i class="fa fa-times"></i></span></li>');
             }else {
             $(".nav.nav-tabs.tabdrop").append('<li><a href="#content_' + nodeId + '" data-toggle="tab">' + label + '</a><span class="label label label-transparent-black tab-close"><i class="fa fa-times"></i></span></li>');
             me.afterActiveTest();
             }
             $(".tile-body.tab-content").append('<ul id="content_' + nodeId + '" class="tab-pane fade">' + label + '</ul>');
             $("#li_" + nodeId).tab('show');*/
        },
        /**
         * 打开菜单
         * @param menuNode
         */
        openMenu:function(menuNode){
            var node = typeof menuNode === "String" ? $("#"+menuNode):menuNode;
            this.setActive(node);
        }
    };

    /**
     * 扩展 Jquery 对象为 Menu
     * @param option
     */
    $.fn.menu = function(option){
        return this.each(function () {
            var $this = $(this),
                data = $this.data('menu'),
                options = typeof option === 'object' && option;
            if (!data)  {
                $this.data('menu', (data = new Menu(this, $.extend({}, $.fn.menu.defaults,options))));
            }
            if (typeof option == 'string') {
                data[option]();
            }
            if(data.autoLoad){
                data.load(options.data);
            }
        });
    };

    $.fn.menu.defaults = {
        title:'菜单'
    };

    $.fn.menu.Constructor = Menu;

})(jQuery);

//add  by huangbiao
var vm = {};
vm.newTabFlg = true;
