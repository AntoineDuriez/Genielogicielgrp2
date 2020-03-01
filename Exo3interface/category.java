package couchePersistance;

import java.util.List;
/**
 * Category class to manage and create markers and events categories on the application
 * @author GLA group 2
 */
public class category {
	//champs
	private String name;	//nom de la categorie
	private String description;	//description rapide de la catégorie
	private List<marker> markerList;	// liste des markers qui sont contenus dans la catégorie, concerne aussi les classes enfants (event)
	
	//constructor
	/**
	 * category constructor
	 * @param n	A string which is the name of the category
	 * @param d	A string which quickly describe the category
	 * @param m	A list of markers which represent all markers (and events) which are in the category
	 */
	public category(String n, String d, List<marker> m) {
		this.name = n;
		this.description = d;
		this.markerList = m;
	}
	
	//guetteur
	/**
	 * name guetteur
	 * @return	return a string which the name of the category
	 * @author GLA group 2
	 */
	public String getName() {
		return this.name;
	}
	/**
	 * description guetteur
	 * @return	return a string which is a quick description of the category
	 * @author GLA group 2
	 */
	public String getDescription() {
		return this.description;
	}
	/**
	 * markerList guetteur
	 * @return	return the list of the marker in the category
	 * @author GLA group 2
	 */
	public List<marker> getMarkerList(){
		return this.markerList;
	}
	
	public interface CategoryDo {
		/* @return this list of Category*/
		List<category> getCategories();
		

	}


}