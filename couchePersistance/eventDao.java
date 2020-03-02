package couchePersistance;

import java.util.List;

public interface eventDao {
	/* @return this list of events*/
	List<event> getevents();
	/*To set a marker as an Event*/
	public default void AddtoEvent(){}
}
