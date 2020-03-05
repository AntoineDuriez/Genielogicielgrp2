package com.javaetmoi.jetty.ws;

import java.util.ArrayList;
import java.util.List;

public class UserDaoStub implements UserDao {

	@Override
	public List<User> getUser() {
		List<User> listUser = new ArrayList<User>();
		User u1 = new User("Toulouse", null, null);
		User u2 = new User("Tchoupi", null, null);
		listUser.add(u1);
		listUser.add(u2);
		return listUser;
	}

	@Override
	public User searchFriend(String n) {
		User u = new User("Adrien", null, null);
		return u;
	}

	@Override
	public boolean addFriend(User u) {
		return true;
	}

	@Override
	public boolean deleteFriend(User u) {
		return true;
	}
	
}
