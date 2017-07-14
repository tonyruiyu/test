/**
 * 
 */

function grid(grid_selector, pager_selector, options) {
	var defaultParam = {
		url : "",
		datatype : "json", // 数据来源，本地数据
		mtype : "GET",// 提交方式
		colNames : [],
		jsonReader : {
			root : "message.content",
			total : "message.totalPages",
			repeatitems : true,
			records : "message.totalElements"
		},
		colModel : [],
		viewrecords : true,
		rowNum : 20,
		rowList : [ 20, 100, 500, 1000 ],
		pager : pager_selector,
		altRows : true,
		multiselect : true,
		multiboxonly : true,
		caption : "列表",
		width : window.screen.availWidth - 282,
		height : $(this).height() - 260,
		loadComplete : function(data) {
			if (data.message == "52000") {
				window.location.href = "/" + ump.contextPath + "/login.html";
				return;
			}
			var table = this;
			setTimeout(function() {
				updatePagerIcons(table);
			}, 0);
			if (data && data.status && data.status == "error") {
				$.gritter.add({
					title : '提示',
					text : data.message,
					class_name : (data.status == "success" ? "gritter-info"
							: " gritter-error")
							+ ' gritter-center gritter-light'
				});
			}
		},
		gridComplete : function() {
		}
	};
	var gridParent = $(grid_selector).parent();
	// jqgrid 自适应宽度&高度
	$(window).resize(function() {
		$(grid_selector).setGridWidth($(gridParent).width());
		$(grid_selector).setGridHeight($(this).height() - 268);
	});

	$(grid_selector).jqGrid($.extend(defaultParam, options));
}

function gridPager(grid_selector, pager_selector, options) {
	$(grid_selector).jqGrid('navGrid', pager_selector,
			getAction("navbarOptions", options.navbarOptions),
			getAction("editAction", options.editAction),
			getAction("addAction", options.addAction),
			getAction("deleteAction", options.deleteAction),
			getAction("searchAction", options.searchAction),
			getAction("viewAction", options.viewAction));
}

/**
 * 导入Excel数据
 */
function impExcelData(url, flag, girdId, tmplateUrl) {
	$("#uploadUrl").val(url);
	$("#tmplateFlg").val(flag);
	$("#gridId").val(girdId);
	var t = $("#templateDownId");
	if (!tmplateUrl) {
		tmplateUrl = "mvc/getFileUploadTempLate";
	}
	t.attr("onclick", "getTmplate('" + tmplateUrl + "')");
}

function getTmplate(tmplateUrl) {
	var param = $('#tmplateFlg').val();
	window.open(tmplateUrl + "?templateFlg=" + param);
}

function fileUpload(url, gridId) {
	var files = $("#files").val();
	if (!files) {
		callAlertDialog('请选择文件!');
		return;
	}
	$("#impExcel").modal('hide');
	loadProgress();
	$.ajaxFileUpload({
		url : url,
		secureuri : false,
		fileElementId : 'files',
		dataType : 'text',
		success : function(data) {
			data = JSON.parse(data);
			if (data.status == "success") {
				// callInfoDialog(data.message);
			} else {
				callAlertDialog(data.message)
			}
			$('#Image_load').remove();
			$('#pageover').remove();
			$(gridId).trigger("reloadGrid");
		},
		error : function() {
			callAlertDialog("失败，请联系相关人员！");
			$('#Image_load').remove();
			$('#pageover').remove();
			$(gridId).trigger("reloadGrid");
		}
	})
}

/**
 * 显示loading画面
 * 
 * @param desc
 * @return
 */
function loadProgress(desc) {
	var tb_pathToImage = "app/images/loading.gif";
	imgLoader = new Image(); // image对象
	imgLoader.src = tb_pathToImage;
	$("body")
			.append(
					"<div id='Image_load' style='position: fixed; display:none;height: 30px;width: 200px;z-index:999;top: 30%;left: 50%;margin: -6px 0 0 -104px'><img src='"
							+ imgLoader.src + "' /></div>"); // page中增加Img
	$('#Image_load').show(); // show loader
	$("body")
			.append(
					"<div id='pageover' style='display: none; position: absolute; top: 0%; left: 0%; width: 100%; height: 100%; background-color: black; z-index:998; -moz-opacity: 0.7; opacity:.70; filter: alpha(opacity=70);' ></div>"); // 增加遮罩层
	$('#pageover').show();
}

function getAction(name, options) {
	var action = {
		navbarOptions : {
			edit : true,
			editicon : 'fa-pencil blue',
			add : true,
			addicon : 'fa-plus-circle purple',
			del : true,
			delicon : 'fa-trash-o red',
			search : true,
			searchicon : 'fa-search orange',
			refresh : true,
			refreshicon : 'fa-refresh green',
			view : true,
			viewicon : 'fa-search-plus grey'
		},
		addAction : {// new record form
			reloadAfterSubmit : true,
			closeAfterAdd : false,
			url : "",
			mtype : "GET",// 提交方式
			datatype : "json",

			beforeAjaxOptions : function(option) {
				option.dataType = "json";
				option.contentType = 'application/json';
				option.headers = {
					'Accept' : 'application/json',
					"Content-Type" : "application/json"
				};
				options.error = function(response) {
					var isSuccess = response.responseJSON != undefined ? response.responseJSON.status
							: "error";
					$.gritter
							.add({
								title : '出错了',
								text : (isSuccess == "success" || isSuccess == "error") ? response.responseJSON.message
										: response.responseText,
								class_name : (isSuccess == "success" ? "gritter-info"
										: " gritter-error")
										+ ' gritter-center gritter-light'
							});
				};
				delete option.data.oper;
				delete option.data.id;
				if (options.fileUpload) {
					option.data.fileUpload = options.fileUpload;
				}
				option.data = encodeURI(encodeURI(obj2JsonStr(option.data)));
				return option;
			},
			serializeEditData : function(data) {
				return param2obj(data);
			},
			modal : true,
			closeAfterReset : true,
			closeOnEscape : true,
			recreateForm : false,
			viewPagerButtons : false,
			beforeShowForm : function(e) {
				var form = $(e[0]);
				form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar')
						.wrapInner('<div class="widget-header" />');
				style_edit_form(form);
			},
			afterComplete : function(response, postData, form) {
				var isSuccess = response.responseJSON != undefined ? response.responseJSON.status
						: "error";
				var msgObj = response.responseJSON.message;
				var msg = msgObj;
				$.each(postData, function(key, value) {
					if (key != "oper") {
						$(form).find("#" + key).val(value);
					}
				});
				// 异常的统一处理
				if (msgObj instanceof Object) {
					msg = msgObj.message;
				} else if (msgObj instanceof String) {
					msg = msgObj;
				}
				if (isSuccess == "error")// add by huanbiao remove the dialog
											// for success（edit）
					$.gritter
							.add({
								title : '提示',
								text : msg,
								class_name : (response.responseJSON.status == "success" ? "gritter-info"
										: " gritter-error")
										+ ' gritter-center gritter-light'
							});
				if (response.responseJSON.status == "success") {
					$(form).parents(".ui-widget").find(
							".ui-jqdialog-titlebar-close").click();
				}
			}
		},
		editAction : {
			reloadAfterSubmit : true,
			closeAfterEdit : true,
			url : "",
			mtype : "GET",// 提交方式
			datatype : "json",
			beforeAjaxOptions : function(option) {
				option.dataType = "json";
				option.contentType = 'application/json';
				option.headers = {
					'Accept' : 'application/json',
					"Content-Type" : "application/json"
				};
				delete option.data.oper;
				if (options.fileUpload) {
					option.data.fileUpload = options.fileUpload;
				}
				// option.data = obj2JsonStr(option.data);
				option.data = encodeURI(encodeURI(obj2JsonStr(option.data)));
				return option;
			},
			serializeEditData : function(data) {
				return param2obj(data);
			},
			// top: 200, left: 400,
			modal : true,
			closeOnEscape : true,
			recreateForm : true,
			beforeShowForm : function(e) {
				var form = $(e[0]);
				form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar')
						.wrapInner('<div class="widget-header" />');
				style_edit_form(form);
			},
			afterComplete : function(response, postData, form) {
				var isSuccess = response.responseJSON != undefined ? response.responseJSON.status
						: "error";
				var msgObj = response.responseJSON.message;
				var msg = msgObj;
				$.each(postData, function(key, value) {
					if (key != "oper") {
						$(form).find("#" + key).val(value);
					}
				});
				// 异常的统一处理
				if (msgObj instanceof Object) {
					msg = msgObj.message;
				} else if (msgObj instanceof String) {
					msg = msgObj;
				}
				if (isSuccess == "error")// add by huanbiao remove the dialog
											// for success（edit）
					$.gritter
							.add({
								title : '提示',
								text : msg,
								class_name : (response.responseJSON.status == "success" ? "gritter-info"
										: " gritter-error")
										+ ' gritter-center gritter-light'
							});
			}
		},
		deleteAction : {
			// delete record form
			recreateForm : true,
			url : "",
			mtype : "GET",// 提交方式
			datatype : "json",
			beforeAjaxOptions : function(options) {
				options.dataType = "json";
				options.contentType = 'application/json';
				options.headers = {
					'Accept' : 'application/json',
					"Content-Type" : "application/json"
				};
				delete options.data.oper;
				// var ids = options.data.id.replace(new
				// RegExp(',',"gm"),'","');
				// options.data = '["&' + ids + '&"]';
				options.data = obj2JsonStr(options.data);
				return options;
			},
			serializeEditData : function(data) {
				return param2obj(data);
			},
			beforeShowForm : function(e) {
				var form = $(e[0]);
				if (form.data('styled'))
					return false;
				form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar')
						.wrapInner('<div class="widget-header" />')
				style_delete_form(form);
				form.data('styled', true);
			},
			afterComplete : function(response, postData, form) {
				var isSuccess = response.responseJSON != undefined ? response.responseJSON.status
						: "error";
				var msgObj = response.responseJSON.message;
				var msg = msgObj;
				$.each(postData, function(key, value) {
					if (key != "oper") {
						$(form).find("#" + key).val(value);
					}
				});
				// 异常的统一处理
				if (msgObj instanceof Object) {
					msg = msgObj.message;
				} else if (msgObj instanceof String) {
					msg = msgObj;
				}
				if (isSuccess == "error") // add by huangbiao for remove the
											// success dialog
					$.gritter
							.add({
								title : '提示',
								text : msg,
								class_name : (response.responseJSON.status == "success" ? "gritter-info"
										: " gritter-error")
										+ ' gritter-center gritter-light'
							});
			}
		},
		searchAction : {
			// search form
			closeAfterSearch : true,
			recreateForm : true,
			afterShowSearch : function(e) {
				var form = $(e[0]);
				form.closest('.ui-jqdialog').find('.ui-jqdialog-title').wrap(
						'<div class="widget-header" />')
				style_search_form(form);
			},
			afterRedraw : function() {
				style_search_filters($(this));
			},
			multipleSearch : true,
			showDownload : true,
		},
		viewAction : {
			// view record form
			recreateForm : true,
			beforeShowForm : function(e) {
				var form = $(e[0]);
				form.closest('.ui-jqdialog').find('.ui-jqdialog-title').wrap(
						'<div class="widget-header" />')
			}
		}
	};
	return $.extend(action[name], options);
}

function style_search_filters(form) {
	form.find('.delete-rule').val('');
	form.find('.add-rule').addClass('btn btn-xs btn-primary');
	form.find('.add-group').addClass('btn btn-xs btn-success');
	form.find('.delete-group').addClass('btn btn-xs btn-danger');
}

function style_search_form(form) {
	var dialog = form.closest('.ui-jqdialog');
	var buttons = dialog.find('.EditTable');
	buttons.find('.EditButton a[id*="_reset"]').addClass('btn btn-sm btn-info')
			.find('.ui-icon').attr('class', 'fa-retweet');
	buttons.find('.EditButton a[id*="_query"]').addClass(
			'btn btn-sm btn-inverse').find('.ui-icon').attr('class',
			'fa-comment-o');
	buttons.find('.EditButton a[id*="_search"]').addClass(
			'btn btn-sm btn-purple').find('.ui-icon')
			.attr('class', 'fa-search');
}

function style_edit_form(form) {
	// update buttons classes
	var buttons = form.next().find('.EditButton .fm-button');
	buttons.addClass('btn btn-sm').find('[class*="-icon"]').remove();// ui-icon,
	// s-icon
	buttons.eq(0).addClass('btn-primary').prepend('<i class="fa-check"></i>');
	buttons.eq(1).prepend('<i class="fa-times"></i>');

	buttons = form.next().find('.navButton a');
	buttons.find('.ui-icon').remove();
	buttons.eq(0).append('<i class="fa-chevron-left"></i>');
	buttons.eq(1).append('<i class="fa-chevron-right"></i>');
}

function style_delete_form(form) {
	var buttons = form.next().find('.EditButton .fm-button');
	buttons.addClass('btn btn-sm').find('[class*="-icon"]').remove();// ui-icon,
	// s-icon
	buttons.eq(0).addClass('btn-danger').prepend('<i class="fa-trash-o"></i>');
	buttons.eq(1).prepend('<i class="fa-remove"></i>')
}

function beforeEditCallback(e) {
	var form = $(e[0]);
	form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner(
			'<div class="widget-header" />')
	style_edit_form(form);
}

function updatePagerIcons(table) {
	var replacement = {
		'ui-icon-seek-first' : 'fa-angle-double-left bigger-140',
		'ui-icon-seek-prev' : 'fa-angle-left bigger-140',
		'ui-icon-seek-next' : 'fa-angle-right bigger-140',
		'ui-icon-seek-end' : 'fa-angle-double-right bigger-140'
	};
	$('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon')
			.each(function() {

				var icon = $(this);
				var $class = $.trim(icon.attr('class').replace('ui-icon', ''));
				if ($class in replacement)
					icon.attr('class', 'ui-icon ' + replacement[$class]);
			})
}

function beforeDeleteCallback(e) {
	var form = $(e[0]);
	if (form.data('styled'))
		return false;
	form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner(
			'<div class="widget-header" />')
	style_delete_form(form);
	form.data('styled', true);
}

function widgetToolbarToggle(obj) {
	var widgetToolbar = $(obj);
	widgetToolbar.parent().next(".widget-body").find(".widget-body-inner")
			.show();
	$(obj).parent().next(".widget-body").slideToggle(function() {
		if ($(this).is(':visible')) {
			widgetToolbar.find("i").removeClass().addClass("fa-chevron-up");
		} else {
			widgetToolbar.find("i").removeClass().addClass("fa-chevron-down");
		}
	});
}
