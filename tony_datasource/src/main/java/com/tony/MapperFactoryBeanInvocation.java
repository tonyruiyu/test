package com.tony;

import java.lang.annotation.Annotation;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

import org.mybatis.spring.mapper.MapperFactoryBean;

public class MapperFactoryBeanInvocation<T> extends MapperFactoryBean<T> implements InvocationHandler {

	@Override
	public T getObject() throws Exception {
		T t = super.getObject();
		return getProxyObject(t);
	}

	private T t;

	@SuppressWarnings("unchecked")
	private T getProxyObject(T t) {
		this.t = t;
		return ((T) Proxy.newProxyInstance(t.getClass().getClassLoader(), t.getClass().getInterfaces(), this));
	}

	public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {

		Annotation ann_type = proxy.getClass().getAnnotation(ReadOnly.class);
		if (ann_type == null)
			ann_type = proxy.getClass().getAnnotation(Writer.class);

		Annotation ann_method = method.getAnnotation(ReadOnly.class);
		if (ann_method == null) {
			ann_method = method.getAnnotation(Writer.class);
		}

		if ((ann_method != null && ann_method instanceof Writer) || (ann_type != null && ann_type instanceof Writer)) {
			CustomerContextHolder.setCustomerType(DataSourceMap.MASTER);
		} else {
			CustomerContextHolder.setCustomerType(DataSourceMap.SLAVER);
		}

		try {
			 System.out.println(CustomerContextHolder.getCustomerType() + "------");
			 return method.invoke(t, args);
		} finally {
			//防止内存泄漏
			CustomerContextHolder.clearCustomerType();
		}
	}

}
