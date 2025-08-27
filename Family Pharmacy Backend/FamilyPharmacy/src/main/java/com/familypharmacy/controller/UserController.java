package com.familypharmacy.controller;


import com.familypharmacy.entities.User;
import com.familypharmacy.payloads.ApiResponse;
import com.familypharmacy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/normal/family/user")
public class UserController {

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUser(){

        return ResponseEntity.status(HttpStatus.OK).body(userService.getAllUser());
    }

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable String userId){

        return new ResponseEntity<>(userService.getUserById(userId),HttpStatus.OK);
    }

    //Adding Permission only for Admin Controller

//    @PostMapping("/add")
//    public ResponseEntity<User> addUser(@RequestBody User user){
//
//        user.setUserPassword(passwordEncoder.encode(user.getUserPassword()));
//        String userId= String.valueOf(UUID.randomUUID());
//        user.setUserId(userId);
//        user.setRole("ROLE_USER");
//        return ResponseEntity.status(HttpStatus.CREATED).body(this.userService.addUser(user));
//    }

    //Both Update and delete permission also goes to Admin Controller

//    @PutMapping("/update/{userId}")
//    public ResponseEntity<User> updateUser(@PathVariable String userId,@RequestBody User user){
//
//        return new ResponseEntity<>(this.userService.updateUser(userId,user), HttpStatus.OK);
//    }
//    @DeleteMapping("/delete/{userId}")
//    public ResponseEntity<ApiResponse> deleteUser(@PathVariable String userId){
//        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.builder().message("User Deleted successfully with id "+userId)
//                .status(HttpStatus.OK).success(true).build());
//    }



}
