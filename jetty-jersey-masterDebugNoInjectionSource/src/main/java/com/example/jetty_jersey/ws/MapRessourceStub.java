package com.example.jetty_jersey.ws;

import java.util.ArrayList;  
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import com.example.datanucleus.dao.*;
//Bouchon webservice Map
@Path("/map")
public class MapRessourceStub {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/getmap")
	public List<Map> getMaps() {
		List<Map> listMap = new ArrayList<Map>();
		Map m1 = new Map("Aldorande");
		Map m2 = new Map("Endor");
		listMap.add(m1);
		listMap.add(m2);
		return listMap;
	}

	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/addmap/{nom}")
	public boolean addMap(@PathParam("nom") Map m) {
		return true;
	}

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/modifymap/{nom}")
	public boolean modifyMap(@PathParam("nom") Map m) {
		return true;
	}
 	
	@DELETE
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/deletemap/{nom}")
	public boolean deleteMap(@PathParam("nom") Map m) {
		return true;
	}

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sharemap/{nom}")
	public boolean shareMap(@PathParam("nom") Map m) {
		return true;
	}

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/getmymap/{nom}")
	public Map getMyMap(@PathParam("nom") String n) {
		Map m = new Map("Boony map");
		return m;
	}
}