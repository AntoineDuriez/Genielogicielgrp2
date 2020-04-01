package com.example.datanucleus.dao.stub;

import java.util.ArrayList;
import java.util.List;

import com.example.datanucleus.dao.User;
import com.example.datanucleus.dao.UserDao;
/**
 * Fake implmentation of User Dao
 * @author GLA group 2
 */
public class UserDaoStub implements UserDao {
	/**
	 * Fake implementation of getUser
	 */
	@Override
	public List<User> getUser() {
		List<User> listUser = new ArrayList<User>();	//fausse liste pour test
		User u1 = new User("Boony","1234");
		User u2 = new User("Tchoupi","4321");
		listUser.add(u1);
		listUser.add(u2);
		return listUser; //renvoi de la fausse liste
	}
	
	/**
	 * Fake implementation of searchFriend
	 */
	@Override
	public List<User> searchFriend(String n) {
		User u1 = new User("Adrien","12");
		User u2 = new User("Antoine","34");
		List<User> uList = new ArrayList<User>(); //fausse liste pour test
		uList.add(u1);
		uList.add(u2);
		return uList;
	}
	/**
	 * Fake implementation of addFriend
	 */
	@Override
	public boolean addFriend(User u) {
		return true;
	}
	/**
	 * Fake implementation of deleteFriend
	 */
	@Override
	public boolean deleteFriend(User u) {
		return true;
	}

	@Override
	public boolean isPasswordOk(String ps) {
		return true;
	}
	
}
