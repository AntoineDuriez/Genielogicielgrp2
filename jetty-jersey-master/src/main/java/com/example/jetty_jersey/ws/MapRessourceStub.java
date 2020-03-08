package com.example.jetty_jersey.ws;

import java.util.ArrayList;  
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import com.example.datanucleus.dao.*;
//JAVADOC
public class MapRessourceStub {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/Map")
	public List<Map> getMaps() {
		List<Map> listMap = new ArrayList<Map>();
		Map m1 = new Map("Aldorande", null, Visibility.pub);
		Map m2 = new Map("Endor", null, Visibility.friend);
		listMap.add(m1);
		listMap.add(m2);
		return listMap;
	}

	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/Map")
	public boolean addMap(Map m) {
		return true;
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/Map")
	public boolean modifyMap(Map m) {
		return true;
	}
 	
	@DELETE
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/Map")
	public boolean deleteMap(Map m) {
		return true;
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/Map/{access}")
	public boolean shareMap(Map m) {
		return true;
	}

	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/Map")
	public String getInfosMap(Map m) {
		return "map de toto";
	}
}
