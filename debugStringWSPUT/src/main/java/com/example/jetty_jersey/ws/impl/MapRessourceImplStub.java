package com.example.jetty_jersey.ws.impl;

import java.util.ArrayList;
import java.util.List;

import javax.jdo.JDOHelper;
import javax.jdo.PersistenceManagerFactory;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.example.datanucleus.dao.Map;
import com.example.datanucleus.dao.MapDao;
//import com.example.datanucleus.dao.stub.MapDaoStub;

import com.example.datanucleus.dao.dn.MapDaoImpl;
/**
 * Real implementation of MapRessource with Dao stub calls
 * @author GLA group 2
 */
@Path("/mapimpl")
public class MapRessourceImplStub {
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	//Pour l'implémentation bdd finale, comme dans l'exemple MapDaoImplTest.java
	PersistenceManagerFactory pmf = JDOHelper.getPersistenceManagerFactory("Example");
	MapDao mdi = new MapDaoImpl(pmf);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	/**
	 * getMaps implementation with dao stub
	 * @return return a list of Maps
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/getmap")
	public List<Map> getMaps() {		
		//MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
		Map m = new Map("test");
		Map n = new Map("test");
		List<Map> l = new ArrayList<Map>();
		l.add(n);
		l.add(m);
		return l;
	}
	/**
	 * addMap implementation with dao stub
	 * @return return true if a new map is added to the map list, else return false
	 */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Essai de addMap pour l'implémentation de la bdd
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/addmap")
	public boolean addMap(String name) {
		System.out.println(name); //test
		return mdi.addMap(name);
	}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	/**
	 * modifyMap implementation with dao stub
	 * @param m A map which will be modify
	 * @return return true if the map has been modified, else return false
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/modifymap")
	public boolean modifyMap(Map m) {
		//MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
		return true;
	}
	
	/**
	 * deleteMap implementation with dao stub
	 * @param m A map which will be delete
	 * @return return true if the map has been deleted, else return false
	 */
	@DELETE
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/deletemap")
	public boolean deleteMap(Map m) {
		//MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
		return true;
	}
	/**
	 * shareMap implementation with dao stub
	 * @param m A map which will be share with user's friend
	 * @return return true if the map has been shared, else return false
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/sharemap")
	public boolean shareMap(Map m) {
		//MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
		return true;
	}
	/**
	 * getMyMap implementation with dao stub
	 * @param s A string which is the name of a map 
	 * @return return the map to get information about it
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/getmymap")
	public Map getMyMap(String s) {
		//MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
		Map m = new Map("test");
		return m;
	}
}
