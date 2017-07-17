//@ sourceURL=queryLockedStockGrid.js
function queryLockedStockloadData() {
	var basePath = "/" + ump.mvcContextPath;
	var modularPath = {
		selectUrl : basePath + "/dbinfo/select",
		updateUrl : basePath + "/dbinfo/update",
		addUrl : basePath + "/dbinfo/add",
		deleteUrl : basePath + "/dbinfo/delete"
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
		width : 0,
		key : true,
		hidden:true,
		editable : true,
		searchoptions : {
			sopt : [ "eq" ]
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
		}
	} ];

	grid(grid_selector, pager_selector, {
		url : modularPath.selectUrl,
		datatype : "local",
		multiselect : true,
		colNames : colNames,
		colModel : colModel,
		caption : "仓库锁定库存查询"
	});

	gridPager(grid_selector, pager_selector, {
		navbarOptions : {
			add : true,
			edit : true,
			del : true,
			view : false,
			refresh : true
		},
		editAction : editAction,
		addAction : addAction,
		deleteAction : deleteAction,
		selectAction : selectAction,
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
			view : false,
			viewicon : 'fa-search-plus grey'
		}
	});

	$(grid_selector).jqGrid('setGridParam', {
		datatype : 'json'
	});

}

queryLockedStockloadData();
