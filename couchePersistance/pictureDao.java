package couchePersistance;

import java.util.List;

public interface pictureDao {
	/* @return this list of pictures*/
	List<picture> getpictures();
	/*Add a picture to a marker*/
	public default void AddPicture(){}
}
