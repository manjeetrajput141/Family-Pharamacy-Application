package com.familypharmacy.controller;


import com.familypharmacy.DTO.CategoryDto;
import com.familypharmacy.entities.Category;
import com.familypharmacy.entities.User;
import com.familypharmacy.helper.DTOConverter;
import com.familypharmacy.payloads.ApiResponse;
import com.familypharmacy.service.CategoryService;
import com.familypharmacy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/normal/")
public class CategoryController {


    @Autowired
    private CategoryService categoryService;

    @GetMapping("family/category/all")
    public ResponseEntity<List<CategoryDto>> getAllCategory(){

        return ResponseEntity.status(HttpStatus.OK).body(categoryService.allCategory().stream().map(DTOConverter::toCategoryDTO).collect(Collectors.toList()));
    }

    @GetMapping("family/category/{categoryId}")
    public ResponseEntity<CategoryDto> getCategoryById(@PathVariable int categoryId){

        return new ResponseEntity<>(DTOConverter.toCategoryDTO(categoryService.getCategoryById(categoryId)),HttpStatus.OK);
    }

    //Adding Permission only for Admin Controller

    @PostMapping("family/category/add")
    public ResponseEntity<CategoryDto> addCategory(@RequestBody Category category){


        return ResponseEntity.status(HttpStatus.CREATED).body(DTOConverter.toCategoryDTO(this.categoryService.addCategory(category)));
    }

//    Both Update and delete permission also goes to Admin Controller

    @PutMapping("family/category/update/{categoryId}")
    public ResponseEntity<CategoryDto> updateCategory(@PathVariable int categoryId,@RequestBody Category category){

        return new ResponseEntity<>(DTOConverter.toCategoryDTO(this.categoryService.updateCategory(categoryId,category)), HttpStatus.OK);
    }
    @DeleteMapping("family/category/delete/{categoryId}")
    public ResponseEntity<ApiResponse> deleteCategory(@PathVariable int categoryId){
        this.categoryService.deleteCategory(categoryId);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.builder().message("Category Deleted successfully with id "+categoryId)
                .status(HttpStatus.OK).success(true).build());
    }



}
