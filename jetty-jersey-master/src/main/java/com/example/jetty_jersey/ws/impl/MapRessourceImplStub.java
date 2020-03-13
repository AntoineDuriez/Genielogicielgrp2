package com.example.jetty_jersey.ws.impl;

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

import com.example.datanucleus.dao.Map;
import com.example.datanucleus.dao.stub.MapDaoStub;
/**
 * Real implementation of MapRessource with Dao stub calls
 * @author GLA group 2
 */
public class MapRessourceImplStub {
	/**
	 * getMaps implementation with dao stub
	 * @return return a list of Maps
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/getmap")
	public List<Map> getMaps() {		
		MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
		return mds.getMaps();
	}
	/**
	 * addMap implementation with dao stub
	 * @return return true if a new map is added to the map list, else return false
	 */
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/addmap/{nom}")
	public boolean addMap(@PathParam("nom") Map name) {
		MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
		return mds.addMap();
	}
	/**
	 * modifyMap implementation with dao stub
	 * @param m A map which will be modify
	 * @return return true if the map has been modified, else return false
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/modifymap/{nom}")
	public boolean modifyMap(@PathParam("nom") Map m) {
		MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
		return mds.modifyMap(m);
	}
	
	/**
	 * deleteMap implementation with dao stub
	 * @param m A map which will be delete
	 * @return return true if the map has been deleted, else return false
	 */
	@DELETE
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/deletemap/{nom}")
	public boolean deleteMap(@PathParam("nom") Map m) {
		MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
		return mds.deleteMap(m);
	}
	/**
	 * shareMap implementation with dao stub
	 * @param m A map which will be share with user's friend
	 * @return return true if the map has been shared, else return false
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sharemap/{nom}")
	public boolean shareMap(@PathParam("nom") Map m) {
		MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
		return mds.shareMap(m);
	}
	/**
	 * getMyMap implementation with dao stub
	 * @param s A string which is the name of a map 
	 * @return return the map to get information about it
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/getinfosmap/{nom}")
	public Map getMyMap(@PathParam("nom") String s) {
		MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
		return mds.getMyMap(s);
	}
}
