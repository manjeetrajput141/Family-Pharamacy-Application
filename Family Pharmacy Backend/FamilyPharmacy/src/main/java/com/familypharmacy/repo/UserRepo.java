package com.familypharmacy.repo;

import com.familypharmacy.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



public interface UserRepo extends JpaRepository<User,String> {

    public User findByUserEmail(String userEmail);
}
