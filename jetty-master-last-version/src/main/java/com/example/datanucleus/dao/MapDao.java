package com.example.datanucleus.dao;

import java.util.List;

public interface MapDao {
	
	/* @return this list of maps*/
	public List<Map> getMaps();
	
	/*To create a new map*/
	public boolean addMap();
	
	/*To modify a map which already exists*/
	public boolean modifyMap(Map m);
	
	public boolean deleteMap(Map m);
	
	/*To set access of a user map, to his FriendList, Public or Private*/
	public boolean shareMap(Map m);
	
	public Map getMyMap(String s);
}
