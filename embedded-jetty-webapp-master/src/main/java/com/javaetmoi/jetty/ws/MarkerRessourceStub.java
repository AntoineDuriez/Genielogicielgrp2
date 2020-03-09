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
// A COMPLETER + JAVADOC
public class MarkerRessourceStub {
	
	public List<Marker> getMarker() {
		List<Marker> markTestList = new ArrayList<Marker>();
		return markTestList;
	}

	public Marker addMarker() {
		Marker markTest = new Marker();
		return markTest;
	}

	public boolean modifyMarker(Marker m) {
		return true;
		
	}
	

	public boolean deleteMarker(Marker m) {
		return false;
	}
}
