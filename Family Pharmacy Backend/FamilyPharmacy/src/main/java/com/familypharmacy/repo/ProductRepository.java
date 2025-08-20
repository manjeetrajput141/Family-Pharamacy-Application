package com.familypharmacy.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.familypharmacy.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

}
