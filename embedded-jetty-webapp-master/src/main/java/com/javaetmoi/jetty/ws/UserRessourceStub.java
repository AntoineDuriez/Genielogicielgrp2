package com.javaetmoi.jetty.ws;

import java.util.ArrayList;
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
public class UserRessourceStub {
		@GET
		@Produces(MediaType.APPLICATION_JSON)
		@Path("/user")
		public List<User> getUser() {
			List<User> listUser = new ArrayList<User>();
			User u1 = new User("Toulouse", null, null);
			User u2 = new User("Tchoupi", null, null);
			listUser.add(u1);
			listUser.add(u2);
			return listUser;
		}

		@GET
		@Consumes(MediaType.APPLICATION_JSON)
		@Path("/user")
		public User searchFriend(String n) {
			User u = new User("Mael", null, null);
			return u;
		}
		
		@PUT
		@Consumes(MediaType.APPLICATION_JSON)
		@Path("/user/{friendList}")
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
