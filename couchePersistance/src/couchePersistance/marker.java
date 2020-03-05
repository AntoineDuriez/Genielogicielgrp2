package jersey_commun.couchePersistance;

import java.util.List;
/**
 * Class marker to manage markers on maps
 * @author GLA group 2
 */
public class Marker {
	//champs
	private String name;	//marker name
	private String description;	//description du marker
	private float longitude;	//couple de float pour d�terminer la position du marker
	private float latitude;
	private Picture pic;	//image li�e au marker, est NULL si pas d'image
	private	List<Message> messageList;	//liste des message li�s au marker, NULL si pas de message
	
	//constructeur
	/**
	 * Marker constructor
	 * @param n	A string which determine marker name
	 * @param d	A string which give a quick description of the marker
	 * @param lon	Float which determine longitudinal position
	 * @param lat	Float which determine latitudinal position
	 * @param p		Picture type which tie a picture to the marker
	 * @param m		A list of message which is tie to the marker
	 */
	public Marker(String n, String d, float lon, float lat, Picture p, List<Message> m) {
		this.name = n;
		this.description = d;
		this.longitude = lon;
		this.latitude = lat;
		this.pic = p;
		this.messageList = m;
	}
	
	//guetteur
	/**
	 * name guetteur
	 * @return	return the marker name
	 * @author GLA group 2
	 */
	public String getName() {
		return this.name;
	}
	/**
	 * description guetteur
	 * @return	return the description of the marker
	 * @author GLA group 2
	 */
	public String getDescription() {
		return this.description;
	}
	/**
	 * Longitude guetteur
	 * @return	return the marker longitude
	 * @author GLA group 2
	 */
	public float getLongitude() {
		return this.longitude;
	}
	/**
	 * Latitude guetteur
	 * @return	return the marker latitude
	 * @author GLA group 2
	 */
	public float getLatitude() {
		return this.latitude;
	}
	/**
	 * Pic guetteur
	 * @return	return the picture which is tie to the marker
	 * @author GLA group 2
	 */
	public Picture getPic() {
		return this.pic;
	}
	/**
	 * MessageList guetteur
	 * @return	return the list of message which is tie to the marker
	 * @author GLA group 2
	 */
	public List<Message> getMessageList(){
		return this.messageList;
	}
}
