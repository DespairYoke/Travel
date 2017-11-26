package cn.tedu.ttms.product.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.tedu.ttms.product.dao.ProductTypeDao;
import cn.tedu.ttms.product.service.ProductTypeService;
@Service
public class ProductTypeServiceImpl implements ProductTypeService {
	@Autowired
	private ProductTypeDao productTypeDao;
	@Override
	public List<Map<String, Object>> findObjects() {
		return productTypeDao.findObjects();
	}
}
