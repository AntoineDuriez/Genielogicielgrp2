package com.example.jetty_jersey.ws;

import java.util.ArrayList;
import com.example.datanucleus.dao.*;
import com.example.datanucleus.dao.stub.UserDaoStub;
import com.example.jetty_jersey.ws.ExampleResource.ExampleClass;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
// A COMPLETER + JAVADOC
@Path("/user")
public class UserRessourceStub {
	
		@GET
		@Produces(MediaType.APPLICATION_JSON)
		@Path("/getuser")
		public List<User> getUser() {
			List<User> listUser = new ArrayList<User>();
			User u1 = new User("Toulouse", new ArrayList<User>(), new ArrayList<Map>());
			User u2 = new User("Tchoupi", new ArrayList<User>(), new ArrayList<Map>());
			listUser.add(u1);
			listUser.add(u2);
			return listUser;
		}
	/*
		@POST
		@Consumes(MediaType.APPLICATION_JSON)
		@Path("/getuser")
		public void retrieveExample(List<User> instance) {
			System.out.println(instance.toString());
		}
*/
		@GET
		@Produces(MediaType.APPLICATION_JSON)
		@Path("/search")
		public User searchFriend(String n) {
			User u = new User("Mael", new ArrayList<User>(), new ArrayList<Map>());
			return u;
		}
		
		@PUT
		@Consumes(MediaType.APPLICATION_JSON)
		@Path("/friendList")
		public boolean addFriend(User u) {
			return true;
		}

		@DELETE
		@Consumes(MediaType.APPLICATION_JSON)
		@Path("/user/{friendList}")
		public boolean deleteFriend(User u) {
			return true;
		}

	
}
