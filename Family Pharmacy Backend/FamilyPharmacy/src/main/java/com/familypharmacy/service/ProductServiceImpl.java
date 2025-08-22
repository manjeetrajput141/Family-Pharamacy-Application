package com.familypharmacy.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import com.familypharmacy.entities.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.familypharmacy.entities.Product;
import com.familypharmacy.repo.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private CategoryService categoryService;
	
//	private List<Product> list;
	

	public ProductServiceImpl() {
		//super();
		
//		list=new ArrayList<>();
//		Product p1=new Product();
//		p1.setpId("1");
//		p1.setProductBatch("PAR500");
//		p1.setProductName("Paracip 500");
//		p1.setProductDesc("This Product is a medicine and widely used for fevar and pain");
//		list.add(p1);
//		p1=null;
//		p1=new Product();
//		p1.setpId("2");
//		p1.setProductBatch("PAR650");
//		p1.setProductName("Paracip 650");
//		p1.setProductDesc("This Product is a medicine and widely used for fevar and pain");
//		list.add(p1);
//		p1=null;
//		p1=new Product();
//		p1.setpId("3");
//		p1.setProductBatch("VCK500");
//		p1.setProductName("Vicks Action 500");
//		p1.setProductDesc("This Product is a medicine and widely used for cough, cold,fevar and pain");
//		list.add(p1);
		
		
	}

	@Override
	public List<Product> getAllProduct() {
		List<Product> list = this.productRepository.findAll();
		return list;
	}

	@Override
	public List<Product> getProductByBatchNo(String productBatch) {
		
		List<Product> list = this.productRepository.findAll();
		List<Product> matchedProducts = list.stream()
                .filter(p -> p.getProductBatch().toLowerCase().contains(productBatch.toLowerCase()))
                .collect(Collectors.toList());
		
		
		return matchedProducts;
	}

	@Override
	public Product getProductById(Long productId) {

		Product p=null;
	
		 Optional<Product> product = this.productRepository.findById(productId);
		 if(!product.isEmpty()) {
			 p=product.get();
		 }
		 
		 
		 return p;
	}

	@Override
	public Product addProduct(Product product,int categoryId) {

	Category c=this.categoryService.getCategoryById(categoryId);
	product.setCategory(c);
		
		return this.productRepository.save(product);
	}

	@Override
	public Product updateProduct(Long productId,int categoryId, Product product) {
		Product p=this.productRepository.getById(productId);
		if(product.getProductBatch()!=null) {
			p.setProductBatch(product.getProductBatch());
		}
		if(product.getProductDesc()!=null) {


			p.setProductDesc(product.getProductDesc());
		}
		if(product.getProductName()!=null) {
			p.setProductName(product.getProductName());
		}
		if(product.getProductPrice() != p.getProductPrice()){
			p.setProductPrice(product.getProductPrice());

		}
		if(product.getProductQuantity() != null){
			p.setProductQuantity(product.getProductQuantity());
		}
		Category c=null;
		if(categoryId !=0){
			c=this.categoryService.getCategoryById(categoryId);

		}
		if(c!=null) {
			p.setCategory(c);
		}
		
		Product product2 = this.productRepository.save(p);
		
		return product2;
	}

	@Override
	public void deleteProduct(Long productId) {

		Optional<Product> product = this.productRepository.findById(productId);
		if(!product.isEmpty()) {
			this.productRepository.delete(product.get());
		}
		
	}

	@Override
	public List<Product> getAllMedicines() {

		return this.productRepository.findByCategoryId(1);
	}

	@Override
	public List<Product> getAllFoodItems() {
		return this.productRepository.findByCategoryId(2);
	}

	@Override
	public List<Product> getAllCosmetics() {
		return this.productRepository.findByCategoryId(4);
	}

	@Override
	public List<Product> getAllSuppliments() {
		return this.productRepository.findByCategoryId(3);
	}

}
