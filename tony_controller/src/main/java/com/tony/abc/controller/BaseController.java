package com.tony.abc.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Collection;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONException;
import com.alibaba.fastjson.JSONObject;
import com.tony.pojo.Constants;
import com.tony.pojo.ExceptionConstants;
import com.tony.pojo.Page;

/**
 * TODO controller 层通用方法
 */
public class BaseController {

	/**
	 * TODO 组装查询入参
	 * 
	 * @param request
	 * @return
	 */
	protected Map<String, String> assembleSelectParam(HttpServletRequest request) {
		Map<String, String> paraMap = new ConcurrentHashMap<>();
		paraMap = assembleRequestParam(request);
		String isCollSearch = paraMap.get("_search");
		String multipleSearchStr = paraMap.get("filters");
		// 如果不是条件查询则直接返回
		if (!Boolean.valueOf(isCollSearch)) {
			return paraMap;
		}
		if (StringUtils.isNotBlank(multipleSearchStr)) {
			com.alibaba.fastjson.JSONObject multipleJson = com.alibaba.fastjson.JSONObject
					.parseObject(multipleSearchStr, com.alibaba.fastjson.JSONObject.class);
			List<JSONObject> multipleSubJsons = JSON.parseArray(multipleJson.get("rules").toString(), JSONObject.class);
			for (JSONObject jsonObject : multipleSubJsons) {
				String op = jsonObject.get("op").toString();
				String field = jsonObject.get("field").toString();
				if ("ew".equals(op)) { // 结束时间
					field = "end" + field;
				}
				try {
					paraMap.put(field, URLDecoder.decode(jsonObject.get("data").toString(), "utf-8"));
				} catch (UnsupportedEncodingException e) {
					e.printStackTrace();
				}
			}
		}
		return paraMap;
	}

	/**
	 * 组装Request参数
	 * 
	 * @param request
	 * @return
	 * @throws UnsupportedEncodingException
	 */
	protected Map<String, String> assembleRequestParam(HttpServletRequest request) {
		Map<String, String> paraMap = new ConcurrentHashMap<>();
		Enumeration<String> eles = request.getParameterNames();
		while (eles.hasMoreElements()) {
			String key = eles.nextElement();
			paraMap.put(key, request.getParameter(key));
		}
		return paraMap;
	}

	/**
	 * TODO 组装分页查询
	 * 
	 * @param paraMap
	 * @return
	 */
	protected Page<?> assemblePageSelect(Map<String, String> paraMap) {
		String pageNo = paraMap.get(Constants.PAGE_OBJECT);
		String rows = paraMap.get(Constants.ROWS_OBJECT);
		return assemblePageSelect(pageNo, rows);
	}

	protected Page<?> assemblePageSelect(Integer pageNo, Integer rows) {
		Page<?> page = new Page<>();
		page.setPageNo(pageNo);
		page.setPageSize(rows);
		return page;
	}

	protected Page<?> assemblePageSelect(String pageNo, String rows) {
		return assemblePageSelect(Integer.parseInt(pageNo), Integer.parseInt(rows));
	}

	/**
	 * TODO 组装非查询时返回结果格式
	 * 
	 * @param code
	 *            成功失败标识 ExceptionConstants.SUCCESS_CODE
	 *            ExceptionConstants.ERROR_CODE
	 * @param message
	 *            返回给前台的消息文本
	 * @return
	 */
	protected String assembleUnSelectResult(String code, String message) {
		JSONObject resultObj = new JSONObject();
		if (ExceptionConstants.SUCCESS_CODE.equals(code)) {
			resultObj.put("status", ExceptionConstants.SUCCESS_CODE);
			resultObj.put("message", message != null ? message : ExceptionConstants.SUCCESS_MESSAGE);
		} else {
			resultObj.put("status", ExceptionConstants.ERROR_CODE);
			resultObj.put("message", message != null ? message : ExceptionConstants.ERROR_MESSAGE);
		}
		return resultObj.toString();
	}

	/**
	 * TODO 组装查询时返回结果格式
	 * 
	 * @param obj
	 * @param page
	 * @return
	 */
	protected String assembleSelectResult(List<?> obj, Page<?> page) {
		JSONObject resultObj = new JSONObject();
		JSONObject innerObj = new JSONObject();
		innerObj.put("totalPages", page == null ? 1 : page.getTotalPage());
		innerObj.put("totalElements", page == null ? 0 : page.getTotalRecord());
		innerObj.put("size", page == null ? 0 : page.getPageSize());
		if (obj != null && obj instanceof Collection) {
			innerObj.put("content", JSONArray.toJSON(obj));
		} else {
			innerObj.put("content", JSONArray.toJSON(obj));
		}
		resultObj.put("message", innerObj);
		return resultObj.toString();
	}
	
    /**
     * TODO 组装非查询时返回结果格式
     * 
     * @param succCount
     *            成功操作的数据量（大于0说明成功）
     * @param code
     *            返回给前台的消息CODE
     * @return
     */
    protected String assembleUnSelectResult(int succCount, String code) {
        JSONObject resultObj = new JSONObject();
        if (succCount > 0) {
            resultObj.put("status", "success");
            resultObj.put(
                    "message",
                    code != null ? code : ExceptionConstants.SUCCESS_MESSAGE);
        } else {
            resultObj.put("status", "error");
            resultObj.put(
                    "message",
                    code == null ? ExceptionConstants.ERROR_MESSAGE : code);
        }
        return resultObj.toString();
    }
    
    /**
     * TODO 组装非查询入参
     * 
     * @param request
     * @return
     * @throws UnsupportedEncodingException
     */
    @SuppressWarnings({ "unchecked" })
    protected Map<String, String> assembleUnSelectParam(
            HttpServletRequest request) throws UnsupportedEncodingException {
        Map<String, String> paraMap = new ConcurrentHashMap<>();
        Enumeration<String> eles = request.getParameterNames();
        while (eles.hasMoreElements()) {
            String key = null;
            try {
                key = URLDecoder.decode(eles.nextElement(), "utf-8");
                paraMap.putAll(JSON.parseObject(key, HashMap.class));
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            } catch (JSONException e) {

            }
        }
        return paraMap;
    }



}
