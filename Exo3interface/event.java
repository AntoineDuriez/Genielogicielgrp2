
package couchePersistance;

import java.util.List;
/**
 * event class to manage events on maps
 * extends from marker
 * @author GLA group 2
 */
public class event extends marker {
	//duration ? je ne sais aps comment l'implémenter, DateTime ?
	//constructeur
	/**
	 * Event constructor
	 * Same parameters than marker class
	 */
	public event(String n, String d, float lon, float lat, picture p, List<message> m) {
		super(n, d, lon, lat, p, m);
	}
	public interface EventDo {
		public interface CategoryDo {
			/* @return this list of events*/
			List<event> getevents();
			

		}
		

	}

}