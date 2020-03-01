package couchePersistance;

import java.util.List;
/**
 * Class map to manage application map use
 * @author GLA group 2
 */
public class map {
	//champs
	private String name;	//nom de la map
	private List<marker> markerList;	//tous les lieux enregistrés sur la map, NULL si la map est nouvelle
	private visibility access;			//accessibilité de la map : privée, publique ou accessible aux amis uniquement
	
	//constructeur
	/**
	 * Map constructor
	 * @param n	A string which determines the name of the map
	 * @param m	A list of marker which represent markers on the map
	 * @param a	A visibility type to determine map accessibility
	 */
	public map(String n, List<marker> m, visibility a) {
		this.name = n;
		this.markerList = m;
		this.access = a;
	}
	
	//guetteurs
	/**
	 * name guetteur
	 * @return	A string which represents the name of the map
	 * @author 	GLA group 2
	 */
	public String getName() {
		return this.name;
	}
	/**
	 * markerList guetteur
	 * @return	A list of marker which represents all the markers of the map
	 * @author 	GLA group 2
	 */
	public List<marker> getMarkerList(){
		return this.markerList;
	}
	/**
	 * access guetteur
	 * @return	A visibility type to determine if the map is public, private or just for friends
	 * @author 	GLA group 2
	 */
	public visibility getAccess() {
		return this.access;
	}

	public interface mapDo {
		/* @return this list of maps*/
		List<map> getmaps();
		

	}
}