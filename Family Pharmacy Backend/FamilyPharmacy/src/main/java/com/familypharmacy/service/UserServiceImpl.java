package com.familypharmacy.service;

import com.familypharmacy.entities.User;
import com.familypharmacy.exception.ResourceNotFoundException;
import com.familypharmacy.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;



    @Override
    public User getUserById(String userId) {
        return userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User not found with id "+userId));
    }

    @Override
    public List<User> getAllUser() {
        return userRepo.findAll();
    }

    @Override
    public User updateUser(String userId, User user) {
        User u=userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User not found with id "+userId));
        u.setUserEmail(user.getUserEmail());
        u.setUserName(user.getUserName());
        u.setUserPassword(user.getUserPassword());
        if(u.getRole().toLowerCase().equals("role_admin")){
            u.setRole(user.getRole());
            return this.userRepo.save(u);
        }
        u.setRole("normal");

        return this.userRepo.save(u);
    }

    @Override
    public void deleteUser(String userId) {
        User u=userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User not found with id "+userId));
        this.userRepo.delete(u);


    }

    @Override
    public User addUser(User user) {

        return this.userRepo.save(user);
    }
}
