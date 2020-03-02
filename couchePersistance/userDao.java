package couchePersistance;

import java.util.List;

public interface userDao {
//toute la partie amis, logout
	/* @return this list of users*/
	List<user> getusers();
	/*To search a user from your FriendList*/
	public default void SearchFriend(){}
	/*To add a user to your FriendList*/ 
	public default void AddFriend(){}
	/*To remove a user from your FriendList*/
	public default void DeleteFriend(){}
	/*To set a disconnected user to a connected user*/
	public default void LogIn(){}
	/*To set a connected user to a disconnected user*/
	public default void LogOut(){}
	
	/*@param name(user) @return the list of Friends of a specific user*/
	List<user> getFriendList(String name);
	/*@param name(user) @return the list of Maps of a specific user*/
	List<map> getPersonalMapList(String name);
	
}
