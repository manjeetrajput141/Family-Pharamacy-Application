package com.familypharmacy.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class FamilyPharmacyController {
	
	
	@GetMapping("/all")
	public String getAllProduct() {
		return "All Products";
	}

}
