package com.familypharmacy.service;

import java.util.List;

import com.familypharmacy.entities.Product;



public interface ProductService {
	
	
	public List<Product> getAllProduct();
	
	public List<Product> getProductByBatchNo(String productBatch);
	
	public Product getProductById(Long productId);
	
	public Product addProduct(Product product,int categoryId);
	
	public Product updateProduct(Long productId,int catId,Product product);
	
	public void deleteProduct(Long productId);

}
