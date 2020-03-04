package jersey_commun.couchePersistance;

import java.util.List;

public interface userDao {
//toute la partie amis, logout
	
	/*To search a user from your FriendList*/
	public List<User> searchFriend();
	/*To add a user to your FriendList*/ 
	public boolean addFriend(User u);
	
}
