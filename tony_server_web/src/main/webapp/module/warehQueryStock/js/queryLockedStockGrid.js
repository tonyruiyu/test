//@ sourceURL=queryLockedStockGrid.js
function queryLockedStockloadData() {
	var basePath = "/" + ump.mvcContextPath;
	var modularPath = {
		selectUrl : basePath + "/dbinfo/select",
		updateUrl : basePath + "/updateChannelActivityDetail",
		addUrl : basePath + "/addChannelActivityDetail",
		deleteUrl : basePath + "/deleteChannelActivityDetail"
	}
	var search_selector = "#queryLockedStockSearch";
	var grid_selector = "#queryLockedStockTable";
	var pager_selector = "#queryLockedStockPager";

	var editAction = {
		url : modularPath.updateUrl
	};
	var addAction = {
		url : modularPath.addUrl
	};
	var deleteAction = {
		url : modularPath.deleteUrl
	};
	var selectAction = {
		url : modularPath.selectUrl
	};

	var colNames = [ 'id', '链接字符串', '用户名称', '密码' ];

	var colModel = [ {
		name : 'id',
		index : 'id',
		width : 50,
		editable : true,
		editrules : {
			required : true
		},
		searchoptions : {
			sopt : [ "eq" ]
		},
		searchrules : {
			required : true
		}
	}, {
		name : 'jdbcUrl',
		index : 'jdbcUrl',
		editable : true,
		width : 150,
		editrules : {
			required : true
		},
		searchoptions : {
			sopt : [ "eq" ]
		},
		searchrules : {
			required : true
		}
	}, {
		name : 'username',
		index : 'username',
		editable : true,
		width : 150,
		editrules : {
			required : true
		},
		searchoptions : {
			sopt : [ "eq" ]
		},
		searchrules : {
			required : true
		}
	}, {
		name : 'password',
		index : 'password',
		width : 250,
		editable : true,
		editrules : {
			required : true
		},
		searchoptions : {
			sopt : [ "eq" ]
		},
		searchrules : {
			required : true
		}
	} ];

	grid(grid_selector, pager_selector, {
		url : modularPath.selectUrl,
		datatype : "local",
		multiselect : false,
		rownumbers : true,
		colNames : colNames,
		colModel : colModel,
		caption : "仓库锁定库存查询"
	});

	gridPager(grid_selector, pager_selector, {
		navbarOptions : {
			add : true,
			edit : true,
			del : false,
			view : false,
			refresh : false
		},
		editAction : editAction,
		addAction : addAction,
		deleteAction : deleteAction,
		selectAction : selectAction,
		navbarOptions : {
			edit : false,
			editicon : 'fa-pencil blue',
			add : true,
			addicon : 'fa-plus-circle purple',
			del : true,
			delicon : 'fa-trash-o red',
			search : true,
			searchicon : 'fa-search orange',
			refresh : false,
			refreshicon : 'fa-refresh green',
			view : false,
			viewicon : 'fa-search-plus grey'
		}
	});

	$(grid_selector).jqGrid('setGridParam', {
		datatype : 'json'
	});

}

queryLockedStockloadData();
