package com.familypharmacy.DTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDto
{
    private int categoryId;
    private String categoryName;
    private String categoryDesc;
    // optionally skip products to avoid recursion
}