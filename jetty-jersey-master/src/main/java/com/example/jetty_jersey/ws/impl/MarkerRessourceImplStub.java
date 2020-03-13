package com.example.jetty_jersey.ws.impl;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.example.datanucleus.dao.Marker;
import com.example.datanucleus.dao.stub.MarkerDaoStub;

public class MarkerRessourceImplStub {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/getmarker")
	public List<Marker> getMarker() {
		MarkerDaoStub mds = new MarkerDaoStub();  
		return mds.getMarker();
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/addmarker")
	public boolean addMarker() {
		MarkerDaoStub mds = new MarkerDaoStub();  
		return mds.addMarker();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/modifymarker")
	public boolean modifyMarker(Marker m) {
		MarkerDaoStub mds = new MarkerDaoStub();  
		return mds.modifyMarker(m);
	}

	@DELETE
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/deletemarker")
	public boolean deleteMarker(Marker m) {
		MarkerDaoStub mds = new MarkerDaoStub();  
		return mds.deleteMarker(m);
	}

}
