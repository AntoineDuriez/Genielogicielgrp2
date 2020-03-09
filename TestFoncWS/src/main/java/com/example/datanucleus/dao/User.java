package com.example.datanucleus.dao;

import java.util.List;
/**
 * User class to caracterize users of the application
 * @author GLA group 2
 */
public class User {
	//champs
	private String name;	//nom de l'utilisateur
	private List<User> friendList;	//liste des amis de l'utilisateur, NULL si pas d'amis enregistr�s
	private List<Map> personalMapList;	//Liste des map personnelle de l'utilisateur, NULL si pas de maps enregistr�es
	
	//constructor
	/**
	 * User constructor
	 * @param n	A string which represents the name of the user
	 * @param u	A list of user which represent all the friend of the user
	 * @param m	A list of maps which represent all personal maps of the user
	 */
	public User(String n, List<User> u, List<Map> m) {
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
	public List<User> getFriendList(){
		return this.friendList;
	}
	/**
	 * PersonalMapList guetteur
	 * @return	return this personal map list of the user
	 * @author GLA group 2
	 */
	public List<Map> getPersonalMapList(){
		return this.personalMapList;
	}

}
