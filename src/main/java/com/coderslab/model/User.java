/**
 * 
 */
package com.coderslab.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

/**
 * @author cyclingbd007
 *
 */
@Data
@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "userId", unique = true, nullable = false)
	private Integer userId;

	@Column(name = "name", length = 200)
	private String name;

	@Column(name = "mobile", length = 11)
	private String mobile;
}
