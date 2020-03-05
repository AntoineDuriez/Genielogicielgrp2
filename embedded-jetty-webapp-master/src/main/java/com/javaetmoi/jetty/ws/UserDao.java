package com.javaetmoi.jetty.ws;

import java.util.List;

public interface UserDao {
	
	/* @return this list of users*/
	public List<User> getUser();
	
	/*To search a user from your FriendList*/
	public User searchFriend(String nS);
	
	/*To add a user to your FriendList*/ 
	public boolean addFriend(User u);
	
	/*To remove a user from your FriendList*/
	public boolean deleteFriend(User u);
}
