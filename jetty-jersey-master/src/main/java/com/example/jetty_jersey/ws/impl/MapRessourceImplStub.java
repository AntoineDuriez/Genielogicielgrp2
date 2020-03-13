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
import com.example.datanucleus.dao.stub.UserDaoStub;

public class MapRessourceImplStub {
		@GET
		@Produces(MediaType.APPLICATION_JSON)
		@Path("/getmap")
		public List<Map> getMaps() {		
			MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
			return mds.getMaps();
		}

		@PUT
		@Consumes(MediaType.APPLICATION_JSON)
		@Path("/addmap")
		public boolean addMap() {
			MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
			return mds.addMap();
		}

		@POST
		@Consumes(MediaType.APPLICATION_JSON)
		@Path("/modifymap")
		public boolean modifyMap(Map m) {
			MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
			return mds.modifyMap(m);
		}
	 	
		@DELETE
		@Consumes(MediaType.APPLICATION_JSON)
		@Path("/deletemap")
		public boolean deleteMap(Map m) {
			MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
			return mds.deleteMap(m);
		}

		@POST
		@Consumes(MediaType.APPLICATION_JSON)
		@Path("/sharemap")
		public boolean shareMap(Map m) {
			MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
			return mds.shareMap(m);
		}

		@POST
		@Produces(MediaType.APPLICATION_JSON)
		@Path("/getinfosmap")
		public Map getMyMap(String s) {
			MapDaoStub mds = new MapDaoStub(); //appel à l'implémentation bouchon
			return mds.getMyMap(s);
		}
}
