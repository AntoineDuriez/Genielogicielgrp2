package com.example.datanucleus.dao;
import javax.jdo.annotations.Element;
import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.Join;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import java.util.ArrayList;
import java.util.List;
/**
 * Class map to manage application map use
 * @author GLA group 2
 */
@PersistenceCapable
public class Map {
	//champs
	private String name;	//nom de la map
	
	//@PrimaryKey
	//@Persistent(valueStrategy = IdGeneratorStrategy.NATIVE)
	//protected Long id = null;
	
	@Persistent(defaultFetchGroup="true")
	protected List<Marker> markerList;	//tous les lieux enregistrï¿½s sur la map, NULL si la map est nouvelle
	
	private Visibility access;			//accessibilitï¿½ de la map : privï¿½e, publique ou accessible aux amis uniquement
	
	//constructeur
	/**
	 * Map constructor
	 * @param n	A string which determines the name of the map
	 * @param m	A list of marker which represent markers on the map
	 * @param a	A visibility type to determine map accessibility
	 */
	public Map(String n) {
		this.name = n;
		this.markerList = new ArrayList<Marker>();
		this.access = Visibility.pub;
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

	public void setName(String name) {
		this.name = name;
	}

	public void addMarkerToList(Marker m) {
		this.markerList.add(m);
	}
	
	public void setMarkerList(List<Marker> markerList) {
		this.markerList = markerList;
	}

	public void setAccess(Visibility access) {
		this.access = access;
	}
}
