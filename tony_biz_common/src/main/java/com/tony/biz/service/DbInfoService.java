package com.tony.biz.service;

import java.util.List;

import com.tony.easymvc.po.DbInfo;
import com.tony.pojo.Page;
import com.tony.pojo.SearchFilter;

public interface DbInfoService {

	List<DbInfo> selectDbInfo(SearchFilter filter, Page<?> page);

}
