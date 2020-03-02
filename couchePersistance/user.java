package couchePersistance;

import java.util.List;
/**
 * User class to caracterize users of the application
 * @author GLA group 2
 */
public class user {
	//champs
	private String name;	//nom de l'utilisateur
	private List<user> friendList;	//liste des amis de l'utilisateur, NULL si pas d'amis enregistrés
	private List<map> personalMapList;	//Liste des map personnelle de l'utilisateur, NULL si pas de maps enregistrées
	
	//constructor
	/**
	 * User constructor
	 * @param n	A string which represents the name of the user
	 * @param u	A list of user which represent all the friend of the user
	 * @param m	A list of maps which represent all personal maps of the user
	 */
	public user(String n, List<user> u, List<map> m) {
		this.name = n;
		this.friendList = u;
		this.personalMapList = m;
	}
	
	//guetteur
	/**
	 * Name guetteur
	 * @return	return the name of the user
	 * @author GLA group 2
	 */
	public String getName() {
		return this.name;
	}
	/**
	 * FriendList guetteur
	 * @return	return the friend list of the user
	 * @author GLA group 2
	 */
	public List<user> getFriendList(){
		return this.friendList;
	}
	/**
	 * PersonalMapList guetteur
	 * @return	return this personal map list of the user
	 * @author GLA group 2
	 */
	public List<map> getPersonalMapList(){
		return this.personalMapList;
	}

}
