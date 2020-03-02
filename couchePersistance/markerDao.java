package couchePersistance;

import java.util.List;

public interface markerDao {
	//creer event, modifier event
	/* @return this list of markers*/
	List<marker> getmarkers();
	/*To create a new marker*/
	public default void AddMarker(){}
	/*To modify a marker*/
	public default void ModifyMarker(){}
	
	/*@param name(Marker) @return the list of Messages of a specific Marker*/
	List<message> getMessageList(String name);
	
}
