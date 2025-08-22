package com.familypharmacy.helper;

import com.familypharmacy.DTO.CategoryDto;
import com.familypharmacy.DTO.ProductDto;
import com.familypharmacy.entities.Category;
import com.familypharmacy.entities.Product;

public class DTOConverter {

    public static ProductDto toProductDTO(Product product) {
        ProductDto dto = new ProductDto();
        dto.setProductId(product.getPId());
        dto.setProductBatch(product.getProductBatch());
        dto.setProductName(product.getProductName());
        dto.setProductDesc(product.getProductDesc());
        dto.setProductPrice(product.getProductPrice());
        dto.setProductQuantity(product.getProductQuantity());
        dto.setImageUrl(product.getImageUrl());

        // map category also
        if (product.getCategory() != null) {
            CategoryDto categoryDTO = new CategoryDto();
            categoryDTO.setCategoryId(product.getCategory().getCategoryId());
            categoryDTO.setCategoryName(product.getCategory().getCategoryName());
            categoryDTO.setCategoryDesc(product.getCategory().getCategoryDesc());

            dto.setCategory(categoryDTO);
        }

        return dto;
    }

    public static CategoryDto toCategoryDTO(Category category) {
        CategoryDto dto = new CategoryDto();
        dto.setCategoryId(category.getCategoryId());
        dto.setCategoryName(category.getCategoryName());
        dto.setCategoryDesc(category.getCategoryDesc());
        return dto;
    }
}
