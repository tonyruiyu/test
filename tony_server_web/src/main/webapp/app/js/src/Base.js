/**
 * Created by yxt on 2015/4/29.
 */

var ump = {};


ump["treeRoot"] = "STOCK_ROOT";
/**
 * UMP 项目初始化
 */
ump.init = function(options){
    ump.contextPath = $.url.segment(0);
    ump.mvcContextPath = $.url.segment(0) + "/mvc";
    ump.title = "统一平台";
    ump.titleIcon = '<i class="fa fa-diamond"></i>';
    ump.titleId = "";
    ump.userCookie = "ump_user";

    ump = $.extend(ump,options);
    document.title = ump.title;
    var navBrand = $(".navbar-header .navbar-brand");
    navBrand.html(ump.titleIcon +" " + ump.title);
    navBrand.css({"background":"none","padding-left":"0"});
};

String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!=undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
                    var reg= new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
};


jQuery.url = function()
{
    var segments = {};
    var parsed = {};
    /**
     * Options object. Only the URI and strictMode values can be changed via the setters below.
     */
    var options = {
        url : window.location, // default URI is the page in which the script is running
        strictMode: false, // 'loose' parsing by default
        key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"], // keys available to query
        q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,  //less intuitive, more accurate to the specs
            loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // more intuitive, fails on relative paths and deviates from specs
        }
    };

    /**
     * Deals with the parsing of the URI according to the regex above.
     * Written by Steven Levithan - see credits at top.
     */
    var parseUri = function(){
        str = decodeURI( options.url );
        var m = options.parser[ options.strictMode ? "strict" : "loose" ].exec( str );
        var uri = {};
        var i = 14;
        while ( i-- ) {
            uri[ options.key[i] ] = m[i] || "";
        }
        uri[ options.q.name ] = {};
        uri[ options.key[12] ].replace( options.q.parser, function ( $0, $1, $2 ) {
            if ($1) {
                uri[options.q.name][$1] = $2;
            }
        });
        return uri;
    };

    /**
     * Returns the value of the passed in key from the parsed URI.
     *
     * @param string key The key whose value is required
     */
    var key = function( key ){
        if ( jQuery.isEmptyObject(parsed) ){
            setUp(); // if the URI has not been parsed yet then do this first...
        }
        if ( key == "base" ){
            if ( parsed.port !== null && parsed.port !== "" ){
                return parsed.protocol+"://"+parsed.host+":"+parsed.port+"/";
            }else{
                return parsed.protocol+"://"+parsed.host+"/";
            }
        }
        return ( parsed[key] === "" ) ? null : parsed[key];
    };

    /**
     * Returns the value of the required query string parameter.
     *
     * @param string item The parameter whose value is required
     */
    var param = function( item ){
        if ( jQuery.isEmptyObject(parsed) ){
            setUp(); // if the URI has not been parsed yet then do this first...
        }
        return ( parsed.queryKey[item] === null ) ? null : parsed.queryKey[item];
    };

    /**
     * 'Constructor' (not really!) function.
     *  Called whenever the URI changes to kick off re-parsing of the URI and splitting it up into segments.
     */
    var setUp = function(){
        parsed = parseUri();

        getSegments();
    };

    /**
     * Splits up the body of the URI into segments (i.e. sections delimited by '/')
     */
    var getSegments = function(){
        var p = parsed.path;
        segments = []; // clear out segments array
        segments = parsed.path.length == 1 ? {} : ( p.charAt( p.length - 1 ) == "/" ? p.substring( 1, p.length - 1 ) : p.substring( 1 ) ).split("/");
    };

    return {

        /**
         * Sets the parsing mode - either strict or loose. Set to loose by default.
         *
         * @param string mode The mode to set the parser to. Anything apart from a value of 'strict' will set it to loose!
         */
        setMode : function( mode ){
            options.strictMode = mode == "strict" ? true : false;
            return this;
        },

        /**
         * Sets URI to parse if you don't want to to parse the current page's URI.
         * Calling the function with no value for newUri resets it to the current page's URI.
         *
         * @param string newUri The URI to parse.
         */
        setUrl : function( newUri ){
            options.url = newUri === undefined ? window.location : newUri;
            setUp();
            return this;
        },

        /**
         * Returns the value of the specified URI segment. Segments are numbered from 1 to the number of segments.
         * For example the URI http://test.com/about/company/ segment(1) would return 'about'.
         *
         * If no integer is passed into the function it returns the number of segments in the URI.
         *
         * @param int pos The position of the segment to return. Can be empty.
         */
        segment : function( pos ){
            if ( jQuery.isEmptyObject(parsed) )
            {
                setUp(); // if the URI has not been parsed yet then do this first...
            }
            if ( pos === undefined )
            {
                return segments.length;
            }
            return ( segments[pos] === "" || segments[pos] === undefined ) ? null : segments[pos];
        },
        attr : key, // provides public access to private 'key' function - see above
        param : param // provides public access to private 'param' function - see above
    };
}();

/**
 * HashMap 的实现
 * @constructor
 */
function HashMap(){
    /**Map大小**/
    var size=0;
    /**对象**/
    var entry=new Object();
    /**Map的存put方法**/
    this.put=function(key,value){
        if(!this.containsKey(key)){
            size++;
            entry[key]=value;
        }
    }
    /**Map取get方法**/
    this.get=function(key){
        return this.containsKey(key) ? entry[key] : null;
    }
    /**Map删除remove方法**/
    this.remove=function(key){
        if(this.containsKey(key) && ( delete entry[key] )){
            size--;
        }
    }
    /**是否包含Key**/
    this.containsKey= function (key){
        return (key in entry);
    }
    /**是否包含Value**/
    this.containsValue=function(value){
        for(var prop in entry)
        {
            if(entry[prop]==value){
                return true;
            }
        }
        return false;
    }
    /**所有的Value**/
    this.values=function(){
        var values=new Array();
        for(var prop in entry)
        {
            values.push(entry[prop]);
        }
        return values;
    }
    /**所有的 Key**/
    this.keys=function(){
        var keys=new Array();
        for(var prop in entry)
        {
            keys.push(prop);
        }
        return keys;
    }
    /**Map size**/
    this.size=function(){
        return size;
    }
    /**清空Map**/
    this.clear=function(){
        size=0;
        entry=new Object();
    }
}


/**
 * 复写jQuery的Ajax 方法
 */
(function($){
    var ajax = $.ajax;

    $.ajax = function(opt){
        var fn = {
            error:function(XMLHttpRequest, textStatus, errorThrown){},
            success:function(data, textStatus){},
            complete : function (XMLHttpRequest, textStatus, responseText) {}
        };
        if(opt.error) fn.error=opt.error;
        if(opt.success) fn.success=opt.success;
        if(opt.complete) fn.complete = opt.complete;
        if(opt.context) fn.context = $.extend({},opt.context);

        //扩展增强处理
        var _opt = $.extend(opt,{
            error:function(XMLHttpRequest, textStatus, errorThrown){
                //错误方法增强处理
                var status = XMLHttpRequest.status;
                if(status == 404){
                    $.jGrowl('<h1 class="error" style="text-align: center"><i class="fa fa-frown-o fa-2x"></i> <strong>404</strong></h1>', {
                        sticky: true ,
                        theme:  'notification notification-red',
                        position:'center',
                        header:'<i class="fa fa-exclamation-triangle"></i><strong>错误</strong>'
                    });
                } else {
	                //console.log(arguments);
                	//console.log(errorThrown);
                    $.jGrowl('<h4 class="error" style="text-align: center"><i class="fa fa-frown-o fa-2x"></i> <strong>出错了,请联系管理员!</strong></h4>', {
                        sticky: true ,
                        theme:  'notification notification-red',
                        position:'center',
                        header:'<i class="fa fa-exclamation-triangle"></i><strong>提示</strong>'
                    });
                }
                fn.error.call(this,XMLHttpRequest, textStatus, errorThrown);
            },
            success:function(data, textStatus){
//            	if(typeof data=="string"){
//            		if(data.indexOf("52000")!=-1){
//            			window.location.href = "/" + ump.contextPath
//						+ "/login.html";
//            			return;
//            		}
//            	}
            	//校验是否登录
            	if (data.message == "52000" ) {
					window.location.href = "/" + ump.contextPath
							+ "/login.html";
					return;
				}
                //成功回调方法增强处理
                var status = data.status;
                if (status == "ERROR") {
                    $.jGrowl('<h4 class="error" style="text-align: center"><i class="fa fa-frown-o fa-2x"></i> <strong>'+data.message+'</strong></h4>', {
                        sticky: true ,
                        theme:  'notification notification-red',
                        position:'center',
                        header:'<i class="fa fa-exclamation-triangle"></i><strong>提示</strong>'
                    });
                    return;
                }
                fn.success.call(this, data, textStatus);
            },

            statusCode: {//传入statusCode对象，定义对状态码操作的方法
                900 : function() {//900为服务器返回的自定义状态码，说明当前操作没有权限
                    $.jGrowl("您没有权限进行此项操作，请联系管理员！");
                    return;
                }

            }
        });
        return ajax(_opt);
    };

    $.fn.form2json = function(){
        var serializedParams = this.serialize();
        var obj = paramString2obj(serializedParams);
        var str = decodeURIComponent(JSON.stringify(obj));
        return str; //$.parseJSON(str);
    };
})(jQuery);



function obj2JsonStr(o) {
    if (o == undefined) {
        return "";
    }
    var r = [];
    if (typeof o == "string")
        return "\""
            + o.replace(/([\"\\])/g, "\\$1").replace(/(\n)/g, "\\n")
                .replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
    if (typeof o == "object") {
        if (!o.sort) {
            for (var i in o)
                r.push("\"" + i + "\":" + obj2JsonStr(o[i]));
            if (!!document.all
                && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/
                    .test(o.toString)) {
                r.push("toString:" + o.toString.toString());
            }
            r = "{" + r.join() + "}"
        } else {
            for (var i = 0; i < o.length; i++)
                r.push(obj2JsonStr(o[i]))
            r = "[" + r.join() + "]";
        }
        return r;
    }
    return o.toString().replace(/\"\:/g, '":""');
}

function paramString2obj (serializedParams) {
    var obj={};
    function evalThem (str) {
        var attributeName = str.split("=")[0];
        var attributeValue = str.split("=")[1];
        if(!attributeValue){
            return ;
        }

        var array = attributeName.split(".");
        for (var i = 1; i < array.length; i++) {
            var tmpArray = Array();
            tmpArray.push("obj");
            for (var j = 0; j < i; j++) {
                tmpArray.push(array[j]);
            };
            var evalString = tmpArray.join(".");
            // alert(evalString);
            if(!eval(evalString)){
                eval(evalString+"={};");
            }
        };

        eval("obj."+attributeName+"='"+attributeValue+"';");

    };

    var properties = serializedParams.split("&");
    for (var i = 0; i < properties.length; i++) {
        evalThem(properties[i]);
    };

    return obj;
}


/**
 * 将 类似 "object.name":'test' 转成 'object':{name:'test'}
 * 将 类似 "object.name":'test1,test2,test3' 转成 object:[{name:'test1'},{name:'test2'},{name:'test3'}]
 * @param dataObj
 * @returns {___anonymous9165_9166}
 */
function param2obj (dataObj) {
    var obj={};
    function evalThem (key,value) {
        if(!value){
            return ;
        }
        var array = key.split(".");
        var valArray = (typeof value == "object") ? '':value.split(",");

        for (var i = 1; i < array.length; i++) {
            var tmpArray = Array();
            tmpArray.push("obj");
            for (var j = 0; j < i; j++) {
                tmpArray.push(array[j]);
            };
            var evalString = tmpArray.join(".");
            // alert(evalString);
            if(!eval(evalString)){
                if(valArray.length > 1){
                    eval(evalString+"=[];");
                }else{
                    eval(evalString+"={};");
                }

            }
        };
        if(valArray.length > 1){
            $.each(valArray,function(index,val) {
                var arrayObj = {};
                if(array.length > 1){
                    arrayObj[key.substr(key.indexOf(".")+1,key.length)] = val;
                }
                eval("obj."+(array.length > 1 ? key.substr(0,key.indexOf(".")):key)+"["+index+"]="+obj2JsonStr(arrayObj)+";");
            });
        }else{
            if(typeof value == "object"){
                eval("obj."+key+"="+obj2JsonStr(value)+";");
            }else{
                eval("obj."+key+"='"+value+"';");
            }
        }

    };
    $.each(dataObj,function(index,val) {
        evalThem(index,val);
    });

    return obj;
}

jQuery.extend({
    /**
     1. 设置cookie的值，把name变量的值设为value
     example $.cookie(’name’, ‘value’);
     2.新建一个cookie 包括有效期 路径 域名等
     example $.cookie(’name’, ‘value’, {expires: 7, path: ‘/’, domain: ‘jquery.com’, secure: true});
     3.新建cookie
     example $.cookie(’name’, ‘value’);
     4.删除一个cookie
     example $.cookie(’name’, null);
     5.取一个cookie(name)值给myvar
     var account= $.cookie('name');
     **/
    cookie: function(name, value, options) {
        if (typeof value != 'undefined') { // name and value given, set cookie
            options = options || {};
            if (value === null) {
                value = '';
                options.expires = -1;
            }
            var expires = '';
            if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                var date;
                if (typeof options.expires == 'number') {
                    date = new Date();
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                } else {
                    date = options.expires;
                }
                expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
            }
            var path = options.path ? '; path=' + options.path : '';
            var domain = options.domain ? '; domain=' + options.domain : '';
            var secure = options.secure ? '; secure' : '';
            document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
        } else { // only name given, get cookie
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
    }
});

/**
 * 单引号转成双引号
 */
String.prototype.replaceAll = function(reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi": "g")), replaceWith);
    } else {
        return this.replace(reallyDo, replaceWith);
    }
}
