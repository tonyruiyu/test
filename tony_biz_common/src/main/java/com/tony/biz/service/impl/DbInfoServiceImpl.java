package com.tony.biz.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;
import com.tony.MyBatisUtil;
import com.tony.biz.service.DbInfoService;
import com.tony.easymvc.dal.DbInfoMapper;
import com.tony.easymvc.po.DbInfo;
import com.tony.easymvc.po.DbInfoExample;
import com.tony.pojo.Page;
import com.tony.pojo.SearchFilter;

@Service
public class DbInfoServiceImpl implements DbInfoService {

	@Resource
	DbInfoMapper dbInfoMapper;

	@Override
	public List<DbInfo> selectList(SearchFilter filter, Page<?> page) {
		DbInfoExample example = new DbInfoExample();
		MyBatisUtil.setAttributes(example, filter, DbInfo.class);
		long count = dbInfoMapper.countByExample(example);
		page.setTotalRecord((int) count);
		if (count < 1) {
			Lists.newArrayList();
		}
		int offsize = (page.getPageNo() - 1) * page.getPageSize();
		example.limit(page.getPageSize(), offsize);
		return dbInfoMapper.selectByExample(example);
	}

}
