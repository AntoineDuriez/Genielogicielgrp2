package jersey_commun.couchePersistance;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Test {
	private String name;
	private String description;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
