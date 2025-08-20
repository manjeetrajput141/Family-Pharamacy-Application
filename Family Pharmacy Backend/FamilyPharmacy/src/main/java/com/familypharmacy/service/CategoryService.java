package com.familypharmacy.service;

import com.familypharmacy.entities.Category;

import java.util.List;

public interface CategoryService {

    public Category addCategory(Category category);
    public Category getCategoryById(int categoryId);
    public List<Category> allCategory();
    public Category updateCategory(int categoryId,Category category);
    public void deleteCategory(int categoryId);
}
