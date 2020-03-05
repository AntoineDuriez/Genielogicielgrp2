package jersey_commun.couchePersistance;

import java.util.Arrays;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
@Path("/test")
public class TestRessource {
	
	@GET
	@Produces(MediaType.APPLICATION_XML)
	public List<Test> getTest() {
		Test t1 = new Test();
		t1.setName("Bonjour ceci est un test");
		t1.setDescription("Bonjour ceci est une description");
		
		Test t2 = new Test();
		t2.setName("Bonjour ceci est un test2");
		t2.setDescription("Bonjour ceci est une description2");
		
		List<Test> list_test = Arrays.asList(t1,t2);
		return list_test;
		
	}
	
	@GET
	@Path("test")
	@Produces(MediaType.TEXT_PLAIN)
	public String chaine() {
		return "Hello guys";
	}
	
}
