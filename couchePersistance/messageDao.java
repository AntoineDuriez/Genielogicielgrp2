package couchePersistance;

import java.util.List;

public interface messageDao {
	/* @return this list of messages*/
	List<message> getmessages();
	/*Add a message to a marker*/
	public default void AddMessage(){}
	
	/*To check*/
	/*@param authour @return the list of Messages of a specific Author*/
	List<message> getAuthorMessage(String author);
}
