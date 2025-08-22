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
    private String productBatch;
    private String productName;
    private String productDesc;
    private String productQuantity;

    private String imageUrl;
    private int productPrice;
    private CategoryDto category;
}