package com.example.datanucleus.dao.stub;

import java.util.ArrayList;
import java.util.List;

import com.example.datanucleus.dao.User;
import com.example.datanucleus.dao.UserDao;

public class UserDaoStub implements UserDao {

	@Override
	public List<User> getUser() {
		List<User> listUser = new ArrayList<User>();
		User u1 = new User("Toulouse");
		User u2 = new User("Tchoupi");
		listUser.add(u1);
		listUser.add(u2);
		return listUser;
	}

	@Override
	public User searchFriend(String n) {
		User u = new User("Adrien");
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
