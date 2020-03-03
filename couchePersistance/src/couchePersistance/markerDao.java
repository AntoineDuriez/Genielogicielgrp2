package couchePersistance;

import java.util.List;

public interface markerDao {
	//creer event, modifier event
	/* @return this list of markers*/
	List<marker> getmarkers();
	/*To create a new marker*/
	public void addMarker();
	/*To modify a marker*/
	public void modifyMarker();
	public void deleteMarker();
	
}
