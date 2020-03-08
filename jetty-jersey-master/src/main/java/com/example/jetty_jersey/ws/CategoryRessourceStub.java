package com.example.jetty_jersey.ws;

import java.util.ArrayList; 
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.example.datanucleus.dao.Category;
//JAVADOC
public class CategoryRessourceStub {
	

@GET
@Produces(MediaType.APPLICATION_JSON)
@Path("/Category")
	public List<Category> getCategory() {
		Category cat1 = new Category("Musique pour chat", "pour les chats", null);
		Category cat2 = new Category("Pop", "pop", null);
		List<Category> listCat = new ArrayList<Category>();
		listCat.add(cat1);
		listCat.add(cat2);
		return listCat;

}
}
