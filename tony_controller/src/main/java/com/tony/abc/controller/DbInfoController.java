package com.tony.abc.controller;

import java.io.UnsupportedEncodingException;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.tony.biz.service.DbInfoService;
import com.tony.easymvc.dal.DbInfoMapper;
import com.tony.easymvc.po.DbInfo;
import com.tony.pojo.ExceptionConstants;
import com.tony.pojo.Page;
import com.tony.pojo.SearchFilter;

@Controller()
@RequestMapping("dbinfo")
public class DbInfoController extends BaseController {

	@Resource
	DbInfoMapper dbInfoMapper;
	@Resource
	DbInfoService dbInfoServiceImpl;

	@ResponseBody
	@RequestMapping("select")
	public String select(HttpServletRequest request) {
		Page<?> page = null;
		String errMsg = null;
		List<DbInfo> list = null;
		try {
			Map<String, String> paramMap = assembleSelectParam(request);
			SearchFilter filter = null;
			if (!StringUtils.isEmpty(paramMap.get("filters"))) {
				filter = JSON.parseObject(paramMap.get("filters"), SearchFilter.class);
			}
			page = assemblePageSelect(paramMap);
			list = dbInfoServiceImpl.selectList(filter, page);
		} catch (Exception e) {
			errMsg = e.getMessage();
			return assembleUnSelectResult(ExceptionConstants.ERROR_CODE, errMsg);
		}
		return assembleSelectResult(list, page);
	}

	@ResponseBody
	@RequestMapping("update")
	public String update(HttpServletRequest request) {
		try {
			Map<String, String> paramMap = assembleUnSelectParam(request);
			DbInfo bean = new DbInfo();
			BeanUtils.populate(bean, paramMap);
			int i = dbInfoMapper.updateByPrimaryKeySelective(bean);
			return assembleUnSelectResult(i, null);
		} catch (Exception e) {
			return assembleUnSelectResult(ExceptionConstants.ERROR_CODE, e.getMessage());
		}
	}

	@ResponseBody
	@RequestMapping("delete")
	public String delete(HttpServletRequest request) {
		try {
			Map<String, String> paramMap = assembleUnSelectParam(request);
			DbInfo bean = new DbInfo();
			BeanUtils.populate(bean, paramMap);
			int i = dbInfoMapper.deleteByPrimaryKey(bean.getId());
			return assembleUnSelectResult(i, null);
		} catch (Exception e) {
			return assembleUnSelectResult(ExceptionConstants.ERROR_CODE, e.getMessage());
		}
	}

	@ResponseBody
	@RequestMapping("add")
	public String add(HttpServletRequest request) {
		try {
			Map<String, String> paramMap = assembleUnSelectParam(request);
			DbInfo bean = new DbInfo();
			BeanUtils.populate(bean, paramMap);
			int i = dbInfoMapper.insertSelective(bean);
			return assembleUnSelectResult(i, null);
		} catch (Exception e) {
			return assembleUnSelectResult(ExceptionConstants.ERROR_CODE, e.getMessage());
		}
	}

}
