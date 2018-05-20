package com.coderslab;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.coderslab.model.User;
import com.coderslab.repository.UserRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class GraphQlWithSpringBootApplicationTests {

	@Autowired
	UserRepository userRepository;

	@Test
	public void createSomeUser() {
		for (int i = 1; i <= 10; i++) {
			User user = new User();
			user.setName("name " + i);
			user.setMobile("01515634889");

			userRepository.save(user);
		}
	}

}
