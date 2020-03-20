package com.example.jetty_jersey.ws;

import java.util.ArrayList;
import com.example.datanucleus.dao.*;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
// A COMPLETER + JAVADOC
@Path("/user")
public class UserRessourceStub {
	
		@GET
		@Produces(MediaType.APPLICATION_JSON)
		@Path("/getuser")
		public List<User> getUser() {
			List<User> listUser = new ArrayList<User>();
			User u1 = new User("Toulouse");
			User u2 = new User("Tchoupi");
			listUser.add(u1);
			listUser.add(u2);
			return listUser;
		}
	
		@GET 
		@Produces(MediaType.APPLICATION_JSON)
		@Path("/searchfriend")
		public List<User> searchFriend(String n) {
			User u1 = new User("Mael");
			User u2 = new User("Clement");
			List<User> listUser = new ArrayList<User>();
			listUser.add(u1);
			listUser.add(u2);
			return listUser;
		}
		
		@PUT
		@Produces(MediaType.APPLICATION_JSON)
		@Path("/addfriend")
		public Response addFriend(User n) {
			return Response.ok().build();
		}

		@DELETE
		@Consumes(MediaType.APPLICATION_JSON)
		@Path("/deletefriend")
		public Response deleteFriend(User u) {
			return Response.ok().build();
		}
}
