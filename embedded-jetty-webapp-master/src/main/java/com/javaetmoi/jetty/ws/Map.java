package com.javaetmoi.jetty.ws;

import java.util.List;
/**
 * Class map to manage application map use
 * @author GLA group 2
 */
public class Map {
	//champs
	private String name;	//nom de la map
	private List<Marker> markerList;	//tous les lieux enregistr�s sur la map, NULL si la map est nouvelle
	private Visibility access;			//accessibilit� de la map : priv�e, publique ou accessible aux amis uniquement
	
	//constructeur
	/**
	 * Map constructor
	 * @param n	A string which determines the name of the map
	 * @param m	A list of marker which represent markers on the map
	 * @param a	A visibility type to determine map accessibility
	 */
	public Map(String n, List<Marker> m, Visibility a) {
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
	public List<Marker> getMarkerList(){
		return this.markerList;
	}
	/**
	 * access guetteur
	 * @return	A visibility type to determine if the map is public, private or just for friends
	 * @author 	GLA group 2
	 */
	public Visibility getAccess() {
		return this.access;
	}

}
