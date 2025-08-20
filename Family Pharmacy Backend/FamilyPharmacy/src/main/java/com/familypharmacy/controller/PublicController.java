package com.familypharmacy.controller;


import java.util.List;
import java.util.stream.Collectors;

import com.familypharmacy.DTO.ProductDto;
import com.familypharmacy.helper.DTOConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.config.TaskExecutionOutcome.Status;
import org.springframework.web.bind.annotation.*;

import com.familypharmacy.entities.Product;
import com.familypharmacy.service.ProductService;

@CrossOrigin
@RestController
@RequestMapping("/normal/")
public class PublicController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("family/products/all")
	public ResponseEntity<List<ProductDto>> getAllProduct() {
		
		
		return new ResponseEntity<>(this.productService.getAllProduct().stream().map(DTOConverter::toProductDTO).collect(Collectors.toList()), HttpStatusCode.valueOf(200));
	}
	
	@GetMapping("family/products/batch/{pBatch}")
	public ResponseEntity<List<ProductDto>> getProductByBatch(@PathVariable("pBatch") String productBatch) {
		
		System.out.println(productBatch);
		return new ResponseEntity<>(this.productService.getProductByBatchNo(productBatch).stream().map(DTOConverter::toProductDTO).collect(Collectors.toList()),(HttpStatusCode.valueOf(200)));
	}
	
	@GetMapping("family/products/id/{pId}")
	public ResponseEntity<ProductDto> getProductById(@PathVariable("pId") Long productId) {
		
		System.out.println(productId);
		Product product=this.productService.getProductById(productId);
		ProductDto dto=DTOConverter.toProductDTO(product);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
	}
	
	@PostMapping("family/products/add/{categoryId}")
	public ProductDto addProduct(@RequestBody Product product,@PathVariable int categoryId) {
		return DTOConverter.toProductDTO(this.productService.addProduct(product,categoryId));
	}
	
	@PutMapping("family/products/update/{pId}/{catId}")
	public ProductDto updateProduct(@PathVariable("pId") Long pId,@PathVariable("catId") int catId,@RequestBody Product product) {
		return DTOConverter.toProductDTO(this.productService.updateProduct(pId,catId, product));
		
	}
	
	@DeleteMapping("family/products/delete/{pId}")
	public void deleteProduct(@PathVariable Long pId) {
		this.productService.deleteProduct(pId);
	}
	
	

}
