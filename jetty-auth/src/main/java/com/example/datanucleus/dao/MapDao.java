package com.example.datanucleus.dao;

import java.util.List;

public interface MapDao {
	
	/* @return the of maps starting by the name given in parameters*/
	public List<Map> getMaps(String mapName);
	
	/*To create a new map*/
	public boolean addMap(String mapName);
	
	/*To modify a map which already exists*/
	public boolean modifyMap(Map m, String newName);
	
	public boolean deleteMap(Map m);
	
	/*To set access of a user map, to his FriendList, Public or Private*/
	public boolean shareMap(Map m);
	
	public Map getMyMap(String s);
}
