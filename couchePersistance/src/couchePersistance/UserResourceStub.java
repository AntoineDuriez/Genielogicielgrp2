package jersey_commun.couchePersistance;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;

public class UserResourceStub {


	@PUT
	public List<User> searchFriend() {
		List<User> list_users = new ArrayList<>();
		User testUser1 = new User("toto",null,null);
		list_users.add(testUser1);
		return list_users;
	}

	@POST
	public boolean addFriend(User u) {
		
		
		return true;
	}
	
	
	
}
