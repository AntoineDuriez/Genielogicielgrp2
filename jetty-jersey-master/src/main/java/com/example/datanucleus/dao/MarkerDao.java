package com.example.datanucleus.dao;

import java.util.List;

public interface MarkerDao {
	
	/* @return this list of markers*/
	public List<Marker> getMarker();
	
	/*To create a new marker*/
	public Marker addMarker();
	
	/*To modify a marker*/
	public boolean modifyMarker(Marker m);
	
	public boolean deleteMarker(Marker m);
	
}
