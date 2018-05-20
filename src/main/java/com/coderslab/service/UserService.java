/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.coderslab.service;

import com.coderslab.model.User;
import com.coderslab.repository.UserRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author cyclingbd007
 */
@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public void save(User user) {
		userRepository.save(user);
	}

	public List<User> findAll() {
		return userRepository.findAll();
	}

	public User findOne(Integer userId) {
		return userRepository.findOne(userId);
	}

}
