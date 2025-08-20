package com.familypharmacy.service;

import com.familypharmacy.entities.Category;
import com.familypharmacy.exception.ResourceNotFoundException;
import com.familypharmacy.repo.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryRepo categoryRepo;


    @Override
    public void deleteCategory(int categoryId) {
        Category c=this.categoryRepo.findById(categoryId).orElseThrow(()->new ResourceNotFoundException("Category Not Found with Id ="+categoryId));
        this.categoryRepo.delete(c);
    }




    @Override
    public Category addCategory(Category category) {

        return this.categoryRepo.save(category);
    }

    @Override
    public Category getCategoryById(int categoryId) {
        return this.categoryRepo.findById(categoryId).orElseThrow(()->new ResourceNotFoundException("Category Not Found with Id ="+categoryId));
    }

    @Override
    public List<Category> allCategory() {
        return this.categoryRepo.findAll();
    }

    @Override
    public Category updateCategory(int categoryId, Category category) {
        Category c=this.categoryRepo.findById(categoryId).orElseThrow(()->new
                ResourceNotFoundException("Category Not Found with Id ="+categoryId));
        c.setCategoryName(category.getCategoryName());
        c.setCategoryDesc(category.getCategoryDesc());

        return this.categoryRepo.save(c);
    }
}
