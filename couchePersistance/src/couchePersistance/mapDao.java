package couchePersistance;

import java.util.List;

public interface mapDao {
//creation de map, modifier map, partager map
	/* @return this list of maps*/
	List<map> getMaps();
	/*To create a new map*/
	public void  addMap();
	/*To modify a map which already exists*/
	public void modifyMap();
	public void deleteMap();
	/*To set access of a user map, to his FriendList, Public or Private*/
	public void shareMap();
	public void getInfosMap();
}
