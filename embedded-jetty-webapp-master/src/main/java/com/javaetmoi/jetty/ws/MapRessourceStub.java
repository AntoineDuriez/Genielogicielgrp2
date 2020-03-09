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
//A COMPLETER + JAVADOC
public class MapRessourceStub {

	public List<Map> getMaps() {
		List<Map> mapListTest = new ArrayList<Map>();
		return mapListTest;
	}

	public boolean addMap(Map m) {
		return true;
	}

	public boolean modifyMap(Map m) {
		return true;
	}
 	
	public boolean deleteMap(Map m) {
		return true;
	}

	public boolean shareMap(Map m) {
		return true;
	}

	public String getInfosMap(Map m) {
		return "";
	}
}
