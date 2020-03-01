package couchePersistance;

import java.util.List;

/**
 * Picture class to manage pictures which is tie to markers and events
 * @author GLA group 2
 */
public class picture {
	//champs
	private String location;	//URL de récupération de l'image
	//constructeur
	/**
	 * Picture constructor
	 * @param l	A string which able to locate where the picture is
	 */
	public picture(String l) {
		this.location = l;
	}
	//guetteur
	/**
	 * Location guetteur
	 * @return	return a string which is the location of the picture
	 * @author GLA group 2
	 */
	public String getLocation() {
		return this.location;
	}
	public interface pictureDo {
		/* @return this list of pictures*/
		List<picture> getpictures();
		

	}

}