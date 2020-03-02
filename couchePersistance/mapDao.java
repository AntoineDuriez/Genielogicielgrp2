package couchePersistance;

import java.util.List;

public interface mapDao {
//creation de map, modifier map, partager map
	/* @return this list of maps*/
	List<map> getmaps();
	/*To create a new map*/
	public default void  AddMap(){ }
	/*To modify a map which already exists*/
	public default void ModifyMap(){}
	/*To set access of a user map, to his FriendList, Public or Private*/
	public default void ShareMap(){}
	
	/*@param name(Map) @return the list of Markers of a specific Map*/
	List<marker> getMarkerList(String name);
}
