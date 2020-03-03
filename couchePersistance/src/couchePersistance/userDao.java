package couchePersistance;

import java.util.List;

public interface userDao {
//toute la partie amis, logout
	/* @return this list of users*/
	List<user> getusers();
	/*To search a user from your FriendList*/
	public void searchFriend();
	/*To add a user to your FriendList*/ 
	public void addFriend();
	/*To remove a user from your FriendList*/
	public default void deleteFriend();
	/*To set a disconnected user to a connected user*/
	public void LogInOut();	
}
