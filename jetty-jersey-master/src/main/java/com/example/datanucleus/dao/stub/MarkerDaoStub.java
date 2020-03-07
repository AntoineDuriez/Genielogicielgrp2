package com.example.datanucleus.dao.stub;

import java.util.ArrayList;
import java.util.List;

import com.example.datanucleus.dao.Marker;
import com.example.datanucleus.dao.MarkerDao;

public class MarkerDaoStub implements MarkerDao{

	@Override
	public List<Marker> getMarker() {
		List<Marker> listMarker = new ArrayList<Marker>();
		Marker m1 = new Marker("Hotel Boony", "Boony a la plage", 90, 90, null, null);
		Marker m2 = new Marker("Universit�", "la gr�ve", 10, 30, null, null);
		listMarker.add(m1);
		listMarker.add(m2);
		return listMarker;
	}

	@Override
	public Marker addMarker() {
		Marker boony = new Marker("Lieu de r�sidence de Boony", "Boony home", 2, 3, null, null);
		return boony;
	}

	@Override
	public boolean modifyMarker(Marker m) {
		return true;
	}

	@Override
	public boolean deleteMarker(Marker m) {
		return true;		
	}

}
