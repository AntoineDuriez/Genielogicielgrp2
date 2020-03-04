package jersey_commun.couchePersistance;

import java.util.List;

public interface MarkerDao {
	//creer event, modifier event
	/* @return this list of markers*/
	List<Marker> getmarkers();
	/*To create a new marker*/
	public void addMarker();
	/*To modify a marker*/
	public void modifyMarker();
	public void deleteMarker();
	
}
