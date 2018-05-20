/**
 * 
 */
package com.coderslab.controller;

import static graphql.Scalars.GraphQLString;
import static graphql.schema.GraphQLFieldDefinition.newFieldDefinition;
import static graphql.schema.GraphQLObjectType.newObject;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coderslab.service.UserService;

import graphql.ExecutionResult;
import graphql.GraphQL;
import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import graphql.schema.GraphQLList;
import graphql.schema.GraphQLObjectType;
import graphql.schema.GraphQLSchema;

/**
 * @author cyclingbd007
 *
 */
@RestController
@RequestMapping("/rest")
public class UserRestController {

	@Autowired
	private UserService userService;

	@PostMapping("/users")
	public Map<String, Object> getAllUsers(@RequestBody Map body) {

		GraphQLObjectType UserQL = newObject().name("user")
				.field(newFieldDefinition().type(GraphQLString).name("userId"))
				.field(newFieldDefinition().type(GraphQLString).name("name"))
				.field(newFieldDefinition().type(GraphQLString).name("mobile")).build();

		GraphQLObjectType Query = newObject().name("query")
				.field(newFieldDefinition().name("users").type(new GraphQLList(UserQL)).dataFetcher(new DataFetcher() {

					@Override
					public Object get(DataFetchingEnvironment environment) {
						return userService.findAll();
					}
				})).build();

		GraphQLSchema schema = GraphQLSchema.newSchema().query(Query).build();

		String query = (String) body.get("query");
		ExecutionResult executionResult = new GraphQL(schema).execute(query, (Object) null);
		Map<String, Object> result = new LinkedHashMap<>();
		if (executionResult != null && executionResult.getErrors() != null && !executionResult.getErrors().isEmpty()) {
			result.put("errors", executionResult.getErrors());
		}
		result.put("data", executionResult != null ? executionResult.getData() : null);
		return result;
	}
}
