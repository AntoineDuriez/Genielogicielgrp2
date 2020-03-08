package com.example.jetty_jersey.ws;

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
import com.example.datanucleus.dao.*;
//JAVADOC
public class MarkerRessourceStub {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/Marker")
	public List<Marker> getMarker() {
		List<Marker> listMarker = new ArrayList<Marker>();
		Marker m1 = new Marker("Hotel Boony", "Boony a la plage", 90, 90, null, null);
		Marker m2 = new Marker("Universite", "la greve", 10, 30, null, null);
		listMarker.add(m1);
		listMarker.add(m2);
		return listMarker;
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/map/{markerList}")
	public Marker addMarker() {
			Marker boony = new Marker("Lieu de residence de Boony", "Boony home", 2, 3, null, null);
			return boony;
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/map/{markerList}")
	public boolean modifyMarker(Marker m) {
		return true;
	}

	@DELETE
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/map/{markerList}")
	public boolean deleteMarker(Marker m) {
		return true;
	}
}
