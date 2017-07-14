/**
 * 项目初始化
 * Created by yxt on 2015/1/15.
 */

function initProfile(user){
	//TODO 直接跳转至 login.html
	if(user === undefined || user == null){
		//window.location.href="/" + ump.contextPath + "/login.html";
	}
	var profileHtml = user.userName;
	//var profileHtml = "HQ01UD240-TEST";
	$("#current-user>a").html(profileHtml);
	var logout = $("#logOut").find("a");
	logout.attr("href","javascript:logout()");
}

function logout(){
	$.cookie(ump.userCookie,null);
	//window.location.href="/" + ump.contextPath + "/login.html";
}

var path = {};

var business = {};

$(document).ready(function(){
	ump.init({
		title:'统一平台',
		titleId:'systemTitle'
	});
	path = initPath("/" + ump.contextPath);
	/*$.getLoginUser = function(){
		var user = JSON.parse($.cookie(ump.userCookie));
		return user;
	};*/
	//var user = $.getLoginUser();//JSON.parse($.cookie(ump.userCookie));
	//初始化个人 User Profile
	//initProfile(user);

    /*$.ajax({
		//type: "get",//使用get方法访问后台
		dataType: "json",//返回json格式的数据
		url: path.system.query + "/list",//要访问的后台地址
		async:false,
		success:function(data){
			$.each(data.message,function(index,val) {
				business[val.businessCode] = val.businessName;
			});
		}
	});*/
});




function formatBusiness(businessCode){
	if(business[businessCode] === undefined) return "";
	return business[businessCode];
}

function initPath(contextPath){
	var path = {
		user:{
			query: contextPath + "/rest/user/",
			edit: contextPath + "/rest/user/",
			deleteUrl:contextPath + "/rest/user/",
			add:contextPath + "/rest/user/",
			list:contextPath + "/rest/user/list",
			getDubboUsers:contextPath + "/rest/permission/user/getDubboUsers/"
		},
		system:{
			query: contextPath + "/rest/system/",
			edit: contextPath + "/rest/system/",
			deleteUrl:contextPath + "/rest/system/",
			add:contextPath + "/rest/system/",
			list:contextPath + "/rest/system/list"
		},
		menu:{
			query: contextPath + "/rest/menu/",
			edit: contextPath + "/rest/menu/",
			deleteUrl:contextPath + "/rest/menu/",
			add:contextPath + "/rest/menu/"
		},
		role:{
			query: contextPath + "/rest/permission/role/",
			edit: contextPath + "/rest/permission/role/",
			deleteUrl:contextPath + "/rest/permission/role/",
			add:contextPath + "/rest/permission/role/"
		},
		roleHasMenu:{
			query: contextPath + "/rest/roleHasMenu/",
			edit: contextPath + "/rest/roleHasMenu/",
			deleteUrl:contextPath + "/rest/roleHasMenu/",
			add:contextPath + "/rest/roleHasMenu/add/list"
		},
		permission:{
			query: contextPath + "/rest/permission/resource/",
			edit: contextPath + "/rest/permission/resource/",
			deleteUrl:contextPath + "/rest/permission/resource/",
			add:contextPath + "/rest/permission/resource/"
		},
		permissionMenu:{
			query: contextPath + "/rest/permission/menu/",
			edit: contextPath + "/rest/permission/menu/",
			deleteUrl:contextPath + "/rest/permission/menu/",
			add:contextPath + "/rest/permission/menu/"
		},
		permissionButton:{
			query: contextPath + "/rest/permission/button/",
			edit: contextPath + "/rest/permission/button/",
			deleteUrl:contextPath + "/rest/permission/button/",
			add:contextPath + "/rest/permission/button/"
		},
		permissionMenuButton:{
			query: contextPath + "/rest/permission/menuButton/",
			edit: contextPath + "/rest/permission/menuButton/",
			deleteUrl:contextPath + "/rest/permission/menuButton/",
			add:contextPath + "/rest/permission/menuButton/"
		},
		permissionRole:{
			query: contextPath + "/rest/permission/role/",
			edit: contextPath + "/rest/permission/role/",
			deleteUrl:contextPath + "/rest/permission/role/",
			add:contextPath + "/rest/permission/role/",
			list:contextPath + "/rest/permission/role/list"
		},
			userRole:{
				query: contextPath + "/rest/permission/userRole/",
				edit: contextPath + "/rest/permission/userRole/",
				deleteUrl:contextPath + "/rest/permission/userRole/",
				add:contextPath + "/rest/permission/userRole/"
			},
			roleData:{
				query: contextPath + "/rest/permission/roleData/",
				edit: contextPath + "/rest/permission/roleData/",
				deleteUrl:contextPath + "/rest/permission/roleData/",
				add:contextPath + "/rest/permission/roleData/"
			},
			permissionMenu:{
				query: contextPath + "/rest/permission/menu/",
				edit: contextPath + "/rest/permission/menu/",
				deleteUrl:contextPath + "/rest/permission/menu/",
				add:contextPath + "/rest/permission/menu/"
			},
			permissionButton:{
				query: contextPath + "/rest/permission/button/",
				edit: contextPath + "/rest/permission/button/",
				deleteUrl:contextPath + "/rest/permission/button/",
				add:contextPath + "/rest/permission/button/"
			},
			permissionMenuButton:{
				query: contextPath + "/rest/permission/menuButton/",
				edit: contextPath + "/rest/permission/menuButton/",
				deleteUrl:contextPath + "/rest/permission/menuButton/",
				add:contextPath + "/rest/permission/menuButton/"
			},
			permissionRole:{
				query: contextPath + "/rest/permission/role/",
				edit: contextPath + "/rest/permission/role/",
				deleteUrl:contextPath + "/rest/permission/role/",
				add:contextPath + "/rest/permission/role/",
				list:contextPath + "/rest/permission/role/list"
			},
		warning:{
			userGroup:{
				query: contextPath + "/rest/warning/userGroup/",
				edit: contextPath + "/rest/warning/userGroup/",
				deleteUrl:contextPath + "/rest/warning/userGroup/",
				add:contextPath + "/rest/warning/userGroup/"
			},
			msgHis:{
				query: contextPath + "/rest/warning/msgHis/",
				edit: contextPath + "/rest/warning/msgHis/",
				deleteUrl:contextPath + "/rest/warning/msgHis/",
				add:contextPath + "/rest/warning/msgHis/"
			},
			msgWait:{
				query: contextPath + "/rest/warning/msgWait/",
				edit: contextPath + "/rest/warning/msgWait/",
				deleteUrl:contextPath + "/rest/warning/msgWait/",
				add:contextPath + "/rest/warning/msgWait/"
			},
			msgWaitDetail:{
				query: contextPath + "/rest/warning/msgWaitDetail/",
				findByMsgWait:contextPath + "/rest/warning/msgWaitDetail/findByMsgWait/"
			},
			sendSetting:{
				query: contextPath + "/rest/warning/sendSetting/",
				edit: contextPath + "/rest/warning/sendSetting/",
				deleteUrl:contextPath + "/rest/warning/sendSetting/",
				add:contextPath + "/rest/warning/sendSetting/"
			},
			setting:{
				query: contextPath + "/rest/warning/setting/",
				edit: contextPath + "/rest/warning/setting/",
				deleteUrl:contextPath + "/rest/warning/setting/",
				add:contextPath + "/rest/warning/setting/"
			}

		},
		schedule:{
			job:{
				query: contextPath + "/rest/schedule/job/",
				edit: contextPath + "/rest/schedule/job/",
				deleteUrl:contextPath + "/rest/schedule/job/",
				add:contextPath + "/rest/schedule/job/",
				stop:contextPath + "/rest/schedule/job/pauseJob/",
				start:contextPath + "/rest/schedule/job/resumeJob/",
				execute:contextPath + "/rest/schedule/job/triggerJob/"
			},
			executorLog:{
				query: contextPath + "/rest/schedule/executorLog/"
			},
			currentJob:{
				query: contextPath + "/rest/schedule/job/"
			},
			jobStatus:{
				query: contextPath + "/rest/schedule/job/jobStatus",
				deleteUrl: contextPath + "/rest/schedule/jobdel/"
			}
		},
		deploy:{
			server:{
				query: contextPath + "/rest/deploy/server/",
				edit: contextPath + "/rest/deploy/server/",
				deleteUrl:contextPath + "/rest/deploy/server/",
				add:contextPath + "/rest/deploy/server/",
				list:contextPath + "/rest/deploy/server/list"
			},
			container:{
				query: contextPath + "/rest/deploy/container/",
				edit: contextPath + "/rest/deploy/container/",
				deleteUrl:contextPath + "/rest/deploy/container/",
				add:contextPath + "/rest/deploy/container/"
			},
			project : {//项目
				query : contextPath + "/rest/deploy/project/",
				edit : contextPath + "/rest/deploy/project/",
				deleteUrl : contextPath + "/rest/deploy/project/",
				add : contextPath + "/rest/deploy/project/",
				list: contextPath + "/rest/deploy/project/list"
			},
			application : {//应用
				query : contextPath + "/rest/deploy/application/",
				edit : contextPath + "/rest/deploy/application/",
				deleteUrl : contextPath + "/rest/deploy/application/",
				add : contextPath + "/rest/deploy/application/"
			},
			deploywar : {//WAR包
				query : contextPath + "/rest/deploy/deploywar/",
				edit : contextPath + "/rest/deploy/deploywar/",
				deleteUrl : contextPath + "/rest/deploy/deploywar/",
				add : contextPath + "/rest/deploy/deploywar/"
			},
			manager:{
				query: contextPath + "/rest/deploy/manager/",
				edit: contextPath + "/rest/deploy/manager/",
				deleteUrl:contextPath + "/rest/deploy/manager/",
				add:contextPath + "/rest/deploy/manager/",
				deploy:contextPath + "/rest/deploy/manager/"
			},
			configFile:{
				query: contextPath + "/rest/deploy/configFile/",
				edit: contextPath + "/rest/deploy/configFile/",
				deleteUrl:contextPath + "/rest/deploy/configFile/",
				add:contextPath + "/rest/deploy/configFile/",
				deploy:contextPath + "/rest/deploy/configFile/"
			},
			issueManager:{
				query: contextPath + "/rest/deploy/issueManager/",
				edit: contextPath + "/rest/deploy/issueManager/",
				deleteUrl:contextPath + "/rest/deploy/issueManager/",
				add:contextPath + "/rest/deploy/issueManager/",
				deploy:contextPath + "/rest/deploy/issueManager/"
			},
			changelog:{
				query: contextPath + "/rest/deploy/changelog/",
				edit: contextPath + "/rest/deploy/changelog/",
				deleteUrl:contextPath + "/rest/deploy/changelog/",
				add:contextPath + "/rest/deploy/changelog/",
				deploy:contextPath + "/rest/deploy/changelog/"
				},
				environment:{
					query: contextPath + "/rest/deploy/environment/",
					edit: contextPath + "/rest/deploy/environment/",
					deleteUrl:contextPath + "/rest/deploy/environment/",
					add:contextPath + "/rest/deploy/environment/",
					deploy:contextPath + "/rest/deploy/environment/",
					list:contextPath + "/rest/deploy/environment/list"
				},
				stage:{
					query: contextPath + "/rest/deploy/project/environment/",
					edit: contextPath + "/rest/deploy/project/environment/",
					deleteUrl:contextPath + "/rest/deploy/project/environment/",
					add:contextPath + "/rest/deploy/project/environment/",
					deploy:contextPath + "/rest/deploy/project/environment/"
			}
		},
        configure:{
            module:{
                query: contextPath + "/rest/configure/module/",
                edit: contextPath + "/rest/configure/module/",
                deleteUrl:contextPath + "/rest/configure/module/",
                add:contextPath + "/rest/configure/module/",
                publishBusinessSystem:contextPath + "/rest/configure/module/publishBusinessSystem",
                publishOneModule:contextPath + "/rest/configure/module/publishOneModule",
                selectModuleDeployManage:contextPath + "/rest/configure/module/selectModuleDeployManage/"
            },
            param:{
                query: contextPath + "/rest/configure/param/",
                edit: contextPath + "/rest/configure/param/",
                deleteUrl:contextPath + "/rest/configure/param/",
                add:contextPath + "/rest/configure/param/",
                undeployedParam:contextPath + "/rest/configure/param/undeployedParam/",
                deploySelfParam:contextPath + "/rest/configure/param/deploySelfParam/",
                selectShareParam:contextPath + "/rest/configure/param/selectShareParam/"
            },
            paramHistory:{
                query: contextPath + "/rest/configure/paramHistory/",
                edit: contextPath + "/rest/configure/paramHistory/",
                deleteUrl:contextPath + "/rest/configure/paramHistory/",
                add:contextPath + "/rest/configure/paramHistory/",
                selectSelfModule:contextPath + "/rest/configure/paramHistory/selectSelfModule/",
                selectSelfModuleParam:contextPath + "/rest/configure/paramHistory/selectSelfModuleParam/",
                queryByParamId:contextPath + "/rest/configure/paramHistory/queryByParamId/"
            },
            deployCurrent:{
                query: contextPath + "/rest/configure/deployCurrent/",
                edit: contextPath + "/rest/configure/deployCurrent/",
                deleteUrl:contextPath + "/rest/configure/deployCurrent/",
                add:contextPath + "/rest/configure/deployCurrent/"
            },
            deployManage:{
                query: contextPath + "/rest/configure/deployManage/",
                edit: contextPath + "/rest/configure/deployManage/",
                deleteUrl:contextPath + "/rest/configure/deployManage/",
                add:contextPath + "/rest/configure/deployManage/"
            },
            paramReferenceRelationShip:{
                query: contextPath + "/rest/configure/paramReferenceRelationShip/",
                edit: contextPath + "/rest/configure/paramReferenceRelationShip/",
                deleteUrl:contextPath + "/rest/configure/paramReferenceRelationShip/",
                add:contextPath + "/rest/configure/paramReferenceRelationShip/",
                saveReference:contextPath + "/rest/configure/paramReferenceRelationShip/saveReference/"
            },
            paramKeyDubbo:{
                query: contextPath + "/rest/configure/paramKeyDubbo/",
                edit: contextPath + "/rest/configure/paramKeyDubbo/",
                deleteUrl:contextPath + "/rest/configure/paramKeyDubbo/",
                add:contextPath + "/rest/configure/paramKeyDubbo/"
            },
            paramBusiness:{
                query: contextPath + "/rest/configure/paramBusiness/",
                edit: contextPath + "/rest/configure/paramBusiness/",
                deleteUrl:contextPath + "/rest/configure/paramBusiness/",
                add:contextPath + "/rest/configure/paramBusiness/"
            }
        },
        process:{
			pos:{
				querySum: contextPath + "/rest/order/pos/sumCount",
				queryException:contextPath + "/rest/order/pos/exceptionSumCount",
				listSum: contextPath + "/rest/order/sumList?type=POS",
				listException: contextPath + "/rest/order/exceptionList?type=POS"
			},
			order:{
				querySum: contextPath + "/rest/order/order/sumCount",
				queryException:contextPath + "/rest/order/order/exceptionSumCount",
				queryError:contextPath + "/rest/order/order/errorOrderCount",
				listSum: contextPath + "/rest/order/sumList?type=ORDER",
				listException: contextPath + "/rest/order/exceptionList?type=ORDER",
				listError: contextPath + "/rest/order/orderErrorList"
			},
			b2c : {
				querySum: contextPath + "/rest/order/b2c/sumCount",
				queryException:contextPath + "/rest/order/b2c/exceptionSumCount",
				listSum: contextPath + "/rest/order/sumList?type=B2C",
				listException: contextPath + "/rest/order/exceptionList?type=B2C"
			},
			channel : {
				querySum: contextPath + "/rest/order/channel/sumCount",
				queryException:contextPath + "/rest/order/channel/exceptionSumCount",
				listSum: contextPath + "/rest/order/sumList?type=CHANNEL",
				listException: contextPath + "/rest/order/exceptionList?type=CHANNEL"
			},
			product : {
				querySum: contextPath + "/rest/order/product/sumCount",
				queryException:contextPath + "/rest/order/product/exceptionSumCount",
				listSum: contextPath + "/rest/order/delivery/sumList?type=PRODUCT",
				listException: contextPath + "/rest/order/delivery/exceptionList?type=PRODUCT"
			},
			wms:{
				querySum: contextPath + "/rest/order/wms/sumCount",
				queryException:contextPath + "/rest/order/wms/exceptionSumCount",
				listSum: contextPath + "/rest/order/delivery/sumList?type=WMS",
				listException: contextPath + "/rest/order/delivery/exceptionList?type=WMS"
			},
			finance:{
				querySum: contextPath + "/rest/order/finance/sumCount",
				queryException:contextPath + "/rest/order/finance/exceptionSumCount",
				listSum: contextPath + "/rest/order/delivery/sumList?type=FINANCE",
				listException: contextPath + "/rest/order/delivery/exceptionList?type=FINANCE"
			},
			delivery:{
				querySum: contextPath + "/rest/order/delivery/sumCount",
				queryException:contextPath + "/rest/order/delivery/exceptionSumCount",
				listSum: contextPath + "/rest/order/delivery/sumList?type=DELIVERY",
				listException: contextPath + "/rest/order/delivery/exceptionList?type=DELIVERY"
			},
			entry:{
				querySum: contextPath + "/rest/return/entry/sumCount",
				queryException:contextPath + "/rest/return/entry/exceptionSumCount",
				listSum: contextPath + "/rest/return/sumList?type=ENTRY",
				listException: contextPath + "/rest/return/exceptionList?type=ENTRY"
			},
			returnSettle:{
				querySum: contextPath + "/rest/return/settle/sumCount",
				queryException:contextPath + "/rest/return/settle/exceptionSumCount",
				listSum: contextPath + "/rest/return/sumList?type=SETTLE",
				listException: contextPath + "/rest/return/exceptionList?type=SETTLE"
			},
			returnSales:{
				querySum: contextPath + "/rest/return/sales/sumCount",
				queryException:contextPath + "/rest/return/sales/exceptionSumCount",
				listSum: contextPath + "/rest/return/sumList?type=SALES",
				listException: contextPath + "/rest/return/exceptionList?type=SALES"
			},
			returnDay:{
				querySum: contextPath + "/rest/return/day/sumCount",
				queryException:contextPath + "/rest/return/day/exceptionSumCount",
				listSum: contextPath + "/rest/return/sumList?type=DAY",
				listException: contextPath + "/rest/return/exceptionList?type=DAY"
			},
			erpEntry:{
				querySum: contextPath + "/rest/return/erpEntry/sumCount",
				queryException:contextPath + "/rest/return/erpEntry/exceptionSumCount",
				listSum: contextPath + "/rest/return/sumList?type=ERPENTRY",
				listException: contextPath + "/rest/return/exceptionList?type=ERPENTRY"
			},
			settle:{
				querySum: contextPath + "/rest/settle/settle/sumCount",
				queryException:contextPath + "/rest/settle/settle/exceptionSumCount",
				listSum: contextPath + "/rest/settle/sumList?type=SETTLE",
				listException: contextPath + "/rest/settle/exceptionList?type=SETTLE"
			},
			settleSales:{
				querySum: contextPath + "/rest/settle/sales/sumCount",
				queryException:contextPath + "/rest/settle/sales/exceptionSumCount",
				listSum: contextPath + "/rest/settle/sumList?type=SALES",
				listException: contextPath + "/rest/settle/exceptionList?type=SALES"
			},
			settleDay:{
				querySum: contextPath + "/rest/settle/day/sumCount",
				queryException:contextPath + "/rest/settle/day/exceptionSumCount",
				listSum: contextPath + "/rest/settle/sumList?type=DAY",
				listException: contextPath + "/rest/settle/exceptionList?type=DAY"
			}
		}
	};
	return path;
}
/**
 * 导出excel
 * @param url
 * @param excelName
 * @param excelTitle
 * @param obj
 */
function exportExcel(url,excelName,excelTitle,obj){
	var ajaxUrl =url + 'exportExcel';
	var colNamesArray = $(obj).jqGrid('getGridParam','colNames');
	var columnArray = $(obj).jqGrid('getGridParam','colModel');
	var columnNames = '';
	var dbColumnNames = '';
	for(var i = 2;i<columnArray.length-1;i++){
		if(columnArray[i].hidden==true){
			continue;
		}
		dbColumnNames +=columnArray[i].name+',';
		columnNames +=colNamesArray[i]+',';
	}
	columnNames +=colNamesArray[colNamesArray.length-1];
	dbColumnNames +=columnArray[columnArray.length-1].name;
	window.open(ajaxUrl+"?columnNames="+columnNames+"&dbColumnNames="+dbColumnNames+"&excelName="+excelName+"&excelTitle="+excelTitle);
}

/**
 * 复制功能
 * @param grid_selector
 * @param url
 */
function copyOperation(grid_selector,url){
	var ids = $(grid_selector).jqGrid('getDataIDs');
	for(var i=0;i < ids.length;i++){
		var cl = ids[i];
		var optTemplate = '<div title="{0}" style="float:left;margin-left:8px;cursor:{1};" class="ui-pg-div" id="jInitPwd_Button_{2}" onclick="{3}(\'{4}\',\'{5}\',\'{6}\');" onmouseover="jQuery(this).addClass(\'ui-state-hover\');" onmouseout="jQuery(this).removeClass(\'ui-state-hover\');"><span class="ui-icon {7}"></span></div>';
		var copy = optTemplate.format("复制","pointer",cl,"copyWithoutSerializeEditData",grid_selector,cl,url,"fa-files-o");
		$(grid_selector).jqGrid('setRowData',ids[i],{opt_copy:copy});
	}
}
/**
 * 复制功能的具体实现函数
 * @param jqgridId
 * @param id
 * @param url
 */
function copyWithoutSerializeEditData(jqgridId,id,url){
	$(jqgridId).jqGrid("editGridRow",id,
		getAction("addAction",{
			url:url,
			//width:600,
			editCaption:"复制记录",
			caption:'复制记录',
			beforeShowForm:function(e){
				var form = $(e[0]);
				form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />');
				style_edit_form(form);
			}
		})
	);
	$("#tr_creater").hide();
	$("#flag option:first").remove();
}


//对Date的扩展，将 Date 转化为指定格式的String
//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
//例子：
//(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
//(new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
Date.prototype.format = function(fmt) { // author: meizz
	var o = {
		"M+" : this.getMonth() + 1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
		"S" : this.getMilliseconds()
	// 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
					: (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
};
