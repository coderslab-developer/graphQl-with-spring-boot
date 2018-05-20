/**
 * 
 */
package com.coderslab.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coderslab.model.User;

/**
 * @author cyclingbd007
 *
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}
