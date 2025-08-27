package com.familypharmacy.service;


import com.familypharmacy.entities.User;

import java.util.List;

public interface UserService {

    public User getUserById(String userId);
    public List<User> getAllUser();
    public User updateUser(String userId,User user);
    public void deleteUser(String userId);
    public User addUser(User user);



}

