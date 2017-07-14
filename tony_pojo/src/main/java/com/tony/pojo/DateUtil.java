package com.tony.pojo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 日期帮助工具
 * 
 */
public class DateUtil {

	/**
	 * 传入两个日期（String）时间段，及日期格式 比较当前时间是否在此时间段中
	 * 
	 * @param startTimeString
	 * @param endTimeString
	 * @param formatString
	 * @return
	 */
	public static boolean isInTwoTimes(String startTimeString, String endTimeString, String formatString) {

		Date thisTime = DateUtil.string2Date(DateUtil.date2String(new Date(), formatString), formatString);

		Date startTime = DateUtil.string2Date(startTimeString, formatString);

		Date endTime = DateUtil.string2Date(endTimeString, formatString);

		if (startTime.getTime() <= thisTime.getTime() && endTime.getTime() >= thisTime.getTime()) {
			return true;
		}

		return false;
	}

	/**
	 * 日期对象转换成指定格式的字符串
	 * 
	 * @param date
	 * @param format
	 *            指定的日期格式
	 * @return
	 */
	public static String date2String(Date date, String format) {
		if (date == null) {
			return null;
		}
		SimpleDateFormat sdf = new SimpleDateFormat(format);
		return sdf.format(date);
	}

	/**
	 * 把一定格式的日期字符串 转换成为日期对象
	 * 
	 * @param dateString
	 * @param format
	 * @return
	 */
	public static Date string2Date(String dateString, String format) {

		if (dateString == null) {
			return null;
		}

		SimpleDateFormat sdf = new SimpleDateFormat(format);
		try {
			return sdf.parse(dateString);
		} catch (ParseException e) {
			throw new RuntimeException(e);
		}
	}

	/**
	 * 获得比当前时间早 【seconds】 秒 的时间对象
	 * 
	 * @param seconds
	 * @return
	 */
	public static Date getDateBefore(int seconds, Date date) {
		Date before = new Date(date.getTime() - ((long) seconds * 1000));
		return before;
	}

	/**
	 * 获得比当前时间晚【seconds】 秒 的时间对象
	 * 
	 * @param seconds
	 * @return
	 */
	public static Date getDateAfter(int seconds, Date date) {
		Date after = new Date(date.getTime() + ((long) seconds * 1000));
		return after;
	}

}
