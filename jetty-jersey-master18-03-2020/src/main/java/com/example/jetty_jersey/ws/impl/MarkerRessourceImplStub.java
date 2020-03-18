package com.example.jetty_jersey.ws.impl;

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

import com.example.datanucleus.dao.Marker;
import com.example.datanucleus.dao.stub.MarkerDaoStub;
/**
 * Real implementation of MarkerRessource with Dao stub calls
 * @author GLA group 2
 */
@Path("/marker")
public class MarkerRessourceImplStub {
	/**
	 * getMarker implementation with dao stub
	 * @return return a list of User
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/getmarker")
	public List<Marker> getMarker() {
		MarkerDaoStub mds = new MarkerDaoStub();  
		return mds.getMarker();
	}
	/**
	 * addMarker implementation with dao stub
	 * @return return true if the marker is added, else return false
	 */
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/addmarker/{mark}")
	public boolean addMarker(@PathParam("mark") Marker m) {
		MarkerDaoStub mds = new MarkerDaoStub();  
		return mds.addMarker();
	}
	/**
	 * modifyMarker implementation with dao stub
	 * @param m A marker in the marker list of the user who will have to be modify
	 * @return return true if the marker is modified, else return false
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/modifymarker/{mark}")
	public boolean modifyMarker(@PathParam("mark") Marker m) {
		MarkerDaoStub mds = new MarkerDaoStub();  
		return mds.modifyMarker(m);
	}
	/**
	 * deleteMarker implementation with dao stub
	 * @param m A marker in the marker list of the user who will be delete from it
	 * @return return true if the marker is deleted from the marker list, else return false
	 */
	@DELETE
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/deletemarker/{mark}")
	public boolean deleteMarker(@PathParam("mark") Marker m) {
		MarkerDaoStub mds = new MarkerDaoStub();  
		return mds.deleteMarker(m);
	}

}
