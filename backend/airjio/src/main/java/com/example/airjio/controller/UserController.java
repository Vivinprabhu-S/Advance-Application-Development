package com.example.airjio.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/airjio/user")
@PreAuthorize("hasRole('USER')")
public class UserController {
    @GetMapping
    @PreAuthorize("hasAuthority('user:READ')")
    public String get(){
        return "GET:: user controller";
    }
    @PostMapping
    public String post(){
        return "POST:: user controller";
    }
    @PutMapping
    public String put(){
        return "PUT:: user controller";
    }
    @DeleteMapping
    public String delete(){
        return "DELETE:: user controller";
    }
}
