package com.tony;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.alibaba.fastjson.JSONObject;
import com.tony.pojo.Constants;
import com.tony.pojo.DateUtil;
import com.tony.pojo.SearchFilter;
import com.tony.pojo.SearchRule;

/**
 * MyBatis查询工具类
 * 
 * @author TanYibin
 */
public class MyBatisUtil {
	/**
	 * 自动设置查询条件
	 * 
	 * @param example
	 *            Example
	 * @param filter
	 *            参数对象里面获取的filters
	 * @param queryClass
	 *            Bean对应的.class
	 */
	public static <T> void setAttributes(T example, SearchFilter filter, Class<?> queryClass) {
		try {
			Class<?> clazz = example.getClass();
			if (filter != null && filter.getGroupOp().equalsIgnoreCase("AND")) {
				Method createCriteria = clazz.getDeclaredMethod("createCriteria");
				Object objectCreateCriteria = createCriteria.invoke(example);
				Class<?> clazzCriteria = objectCreateCriteria.getClass();
				for (SearchRule searchRule : filter.getRules()) {
					if (!StringUtils.isEmpty(searchRule.getData())) {
						String methodFullName;
						StringBuilder methodName = new StringBuilder(searchRule.getField());
						methodName.setCharAt(0, Character.toUpperCase(methodName.charAt(0)));
						Field field;
						Method method;
						switch (searchRule.getOp()) {
						case Constants.Opration.EQ:
							String[] groupString = searchRule.getData().split(",");
							List<String> groupList = new ArrayList<>();
							Collections.addAll(groupList, groupString);
							if (groupString.length > 1) {
								methodFullName = "and" + methodName.toString() + "In";
								method = clazzCriteria.getDeclaredMethod(methodFullName, List.class);
								method.invoke(objectCreateCriteria, groupList);
							} else {
								methodFullName = "and" + methodName.toString() + "EqualTo";
								field = queryClass.getDeclaredField(searchRule.getField());
								method = clazzCriteria.getDeclaredMethod(methodFullName, field.getType());
								method.invoke(objectCreateCriteria,
										convertType(searchRule.getData(), field.getType(), searchRule.getOp()));
							}
							break;
						case Constants.Opration.GE:
							methodFullName = "and" + methodName.toString() + "GreaterThanOrEqualTo";
							field = queryClass.getDeclaredField(searchRule.getField());
							method = clazzCriteria.getDeclaredMethod(methodFullName, field.getType());
							method.invoke(objectCreateCriteria,
									convertType(searchRule.getData(), field.getType(), searchRule.getOp()));
							break;
						case Constants.Opration.LE:
							methodFullName = "and" + methodName.toString() + "LessThanOrEqualTo";
							field = queryClass.getDeclaredField(searchRule.getField());
							method = clazzCriteria.getDeclaredMethod(methodFullName, field.getType());
							method.invoke(objectCreateCriteria,
									convertType(searchRule.getData(), field.getType(), searchRule.getOp()));
							break;
						case Constants.Opration.LT:
							methodFullName = "and" + methodName.toString() + "LessThan";
							field = queryClass.getDeclaredField(searchRule.getField());
							method = clazzCriteria.getDeclaredMethod(methodFullName, field.getType());
							method.invoke(objectCreateCriteria,
									convertType(searchRule.getData(), field.getType(), searchRule.getOp()));
							break;
						case Constants.Opration.GT:
							methodFullName = "and" + methodName.toString() + "GreaterThan";
							field = queryClass.getDeclaredField(searchRule.getField());
							method = clazzCriteria.getDeclaredMethod(methodFullName, field.getType());
							method.invoke(objectCreateCriteria,
									convertType(searchRule.getData(), field.getType(), searchRule.getOp()));
							break;
						default:
							break;
						}
					}
				}
			}
			if (filter != null && filter.getGroupOp().equalsIgnoreCase("OR")) {
				for (SearchRule searchRule : filter.getRules()) {
					if (!StringUtils.isEmpty(searchRule.getData())) {
						Method or = clazz.getDeclaredMethod("or");
						Object objectOr = or.invoke(example);
						Class<?> clazzCriteria = objectOr.getClass();
						String methodFullName;
						Field field;
						Method method;
						StringBuilder methodName = new StringBuilder(searchRule.getField());
						methodName.setCharAt(0, Character.toUpperCase(methodName.charAt(0)));
						switch (searchRule.getOp()) {
						case Constants.Opration.EQ:
							String[] groupString = searchRule.getData().split(",");
							List<String> groupList = new ArrayList<>();
							Collections.addAll(groupList, groupString);
							if (groupString.length > 1) {
								methodFullName = "and" + methodName.toString() + "In";
								method = clazzCriteria.getDeclaredMethod(methodFullName, List.class);
								method.invoke(objectOr, groupList);
							} else {
								methodFullName = "and" + methodName.toString() + "EqualTo";
								field = queryClass.getDeclaredField(searchRule.getField());
								method = clazzCriteria.getDeclaredMethod(methodFullName, field.getType());
								method.invoke(objectOr,
										convertType(searchRule.getData(), field.getType(), searchRule.getOp()));
							}
							break;
						case Constants.Opration.GE:
							methodFullName = "and" + methodName.toString() + "GreaterThanOrEqualTo";
							field = queryClass.getDeclaredField(searchRule.getField());
							method = clazzCriteria.getDeclaredMethod(methodFullName, field.getType());
							method.invoke(objectOr,
									convertType(searchRule.getData(), field.getType(), searchRule.getOp()));
							break;
						case Constants.Opration.LE:
							methodFullName = "and" + methodName.toString() + "LessThanOrEqualTo";
							field = queryClass.getDeclaredField(searchRule.getField());
							method = clazzCriteria.getDeclaredMethod(methodFullName, field.getType());
							method.invoke(objectOr,
									convertType(searchRule.getData(), field.getType(), searchRule.getOp()));
							break;
						case Constants.Opration.LT:
							methodFullName = "and" + methodName.toString() + "LessThan";
							field = queryClass.getDeclaredField(searchRule.getField());
							method = clazzCriteria.getDeclaredMethod(methodFullName, field.getType());
							method.invoke(objectOr,
									convertType(searchRule.getData(), field.getType(), searchRule.getOp()));
							break;
						case Constants.Opration.GT:
							methodFullName = "and" + methodName.toString() + "GreaterThan";
							field = queryClass.getDeclaredField(searchRule.getField());
							method = clazzCriteria.getDeclaredMethod(methodFullName, field.getType());
							method.invoke(objectOr,
									convertType(searchRule.getData(), field.getType(), searchRule.getOp()));
							break;
						default:
							break;
						}
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private static <T> Object convertType(String srcStr, Class<T> clazz, String flg) {
		if (clazz == Date.class) {
			if (flg.equalsIgnoreCase(Constants.Opration.GE)) {
				srcStr = srcStr + " 00:00:00";
			} else if (flg.equalsIgnoreCase(Constants.Opration.LE)) {
				srcStr = srcStr + " 23:59:59";
			}
			return DateUtil.string2Date(srcStr, "yyyy-MM-dd HH:mm:ss");
		} else if (clazz == String.class) {
			return srcStr;
		} else {
			return JSONObject.parseObject(srcStr, clazz);
		}
	}
}
