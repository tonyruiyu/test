package com.tony;

public class CustomerContextHolder {
	private static final ThreadLocal<String> contextHolder = new ThreadLocal<String>();

	public static void setCustomerType(String customerType) {
		contextHolder.set(customerType);
	}

	public static String getCustomerType() {
		System.out.println((String) contextHolder.get());
		return (String) contextHolder.get();
	}

	public static void clearCustomerType() {
		contextHolder.remove();
	}
}
