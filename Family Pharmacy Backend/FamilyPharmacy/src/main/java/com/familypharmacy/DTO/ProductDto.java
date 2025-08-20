package com.familypharmacy.DTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.core.annotation.AliasFor;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {


    private Long productId;
    private String productName;
    private String productDesc;
    private CategoryDto category;
}