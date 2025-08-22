package com.familypharmacy.controller;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

import com.familypharmacy.DTO.CategoryDto;
import com.familypharmacy.DTO.ProductDto;
import com.familypharmacy.helper.DTOConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.*;
import org.springframework.scheduling.config.TaskExecutionOutcome.Status;
import org.springframework.web.bind.annotation.*;

import com.familypharmacy.entities.Product;
import com.familypharmacy.service.ProductService;
import org.springframework.web.multipart.MultipartFile;

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


	//Simple post request withoout multipart file
//	@PostMapping("family/products/add/{categoryId}")
//	public ProductDto addProduct(@RequestBody Product product,@PathVariable int categoryId) {
//		return DTOConverter.toProductDTO(this.productService.addProduct(product,categoryId));
//
//	}


	//Advance Post Request wihtn Multipart file
	@PostMapping("family/products/add")
	public ResponseEntity<ProductDto> addProduct(
			@RequestParam("productBatch") String productBatch,
			@RequestParam("productName") String productName,
			@RequestParam("productDesc") String productDesc,
			@RequestParam("categoryId") int categoryId,
			@RequestParam("productPrice") int productPrice,
			@RequestParam("productQuantity") String productQuantity,

			@RequestParam("imageFile") MultipartFile file) {

		try {
			System.out.println("/Add Fire");
			System.out.println("File "+file.getOriginalFilename()+" batch "+productBatch+" name " +
					""+productName+" desc "+productDesc+" CAtegoryID "+categoryId+" Product PRice "+productPrice);
			// Save image in /static/images
			String uploadDir = "src/main/resources/static/images/";
			String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
			Path filePath = Paths.get(uploadDir + fileName);
			Files.write(filePath, file.getBytes());

			// Save product in DB
			Product product = new Product();
			product.setProductBatch(productBatch);
			product.setProductName(productName);
			product.setProductDesc(productDesc);
			product.setProductPrice(productPrice);
			product.setProductQuantity(productQuantity);

			product.setImageUrl(fileName);  // store only filename

			productService.addProduct(product,categoryId);

			return ResponseEntity.status(HttpStatus.OK).body(DTOConverter.toProductDTO(productService.addProduct(product,categoryId)));

		} catch (Exception e) {
			ProductDto p=new ProductDto();
			p.setProductId(2L);
			p.setProductName("Error");
			p.setProductBatch("ERR");
			e.printStackTrace();
		return ResponseEntity.status(500).body(new ProductDto());
		}
	}

	//Serving the images
	@GetMapping("family/products/images/{filename}")
	public ResponseEntity<Resource> getImage(@PathVariable String filename) throws IOException {
		Path path = Paths.get("src/main/resources/static/images/").resolve(filename);// path where images are stored
		Resource resource = new UrlResource(path.toUri());

		if (resource.exists() || resource.isReadable()) {
			System.out.println("/images fire and return images");
			return ResponseEntity.ok()
					.header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
					.contentType(MediaType.IMAGE_JPEG) // or detect dynamically
					.body(resource);
		} else {
			System.out.println("Error return");

			return ResponseEntity.notFound().build();
		}
	}

	
	@PutMapping("family/products/update/{pId}/{catId}")
	public ProductDto updateProduct(@PathVariable("pId") Long pId,@PathVariable("catId") int catId,
									@RequestParam("productBatch") String productBatch,
									@RequestParam("productName") String productName,
									@RequestParam("productDesc") String productDesc,

									@RequestParam("productPrice") int productPrice,
									@RequestParam("productQuantity") String productQuantity
									) {
		System.out.println("Working");
		Product p=new Product();
		p.setProductQuantity(productQuantity);
		p.setProductPrice(productPrice);
		p.setProductBatch(productBatch);
		p.setProductName(productName);
		p.setProductDesc(productDesc);
		return DTOConverter.toProductDTO(this.productService.updateProduct(pId,catId, p));
		
	}
	
	@DeleteMapping("family/products/delete/{pId}")
	public void deleteProduct(@PathVariable Long pId) {
		this.productService.deleteProduct(pId);
	}
	
	@GetMapping("family/products/medicines")
	public ResponseEntity<List<ProductDto>> getAllMedicines(){

		return ResponseEntity.status(HttpStatus.OK).body(this.productService.getAllMedicines()
				.stream().map(DTOConverter::toProductDTO).collect(Collectors.toList()));
	}
	@GetMapping("family/products/cosmetics")
	public ResponseEntity<List<ProductDto>> getAllCosmetics(){

		return ResponseEntity.status(HttpStatus.OK).body(this.productService.getAllCosmetics()
				.stream().map(DTOConverter::toProductDTO).collect(Collectors.toList()));
	}
	@GetMapping("family/products/fooditems")
	public ResponseEntity<List<ProductDto>> getAllFoodItems(){

		return ResponseEntity.status(HttpStatus.OK).body(this.productService.getAllFoodItems()
				.stream().map(DTOConverter::toProductDTO).collect(Collectors.toList()));
	}
	@GetMapping("family/products/suppliments")
	public ResponseEntity<List<ProductDto>> getAllSuppliments(){

		return ResponseEntity.status(HttpStatus.OK).body(this.productService.getAllSuppliments()
				.stream().map(DTOConverter::toProductDTO).collect(Collectors.toList()));
	}
}
