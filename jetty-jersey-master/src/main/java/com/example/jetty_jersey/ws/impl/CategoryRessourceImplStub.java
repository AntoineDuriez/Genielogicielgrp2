package com.example.jetty_jersey.ws.impl;

//import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.example.datanucleus.dao.Category;
import com.example.datanucleus.dao.stub.CategoryDaoStub;


public class CategoryRessourceImplStub {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/getcategory")
		public List<Category> getCategory() {
		CategoryDaoStub cds = new CategoryDaoStub();
		return cds.getCategory();
		}
	
}
