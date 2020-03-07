package com.example.datanucleus.dao.stub;

import java.util.ArrayList;
import java.util.List;

import com.example.datanucleus.dao.Map;
import com.example.datanucleus.dao.MapDao;
import com.example.datanucleus.dao.Visibility;

public class MapDaoStub implements MapDao{

	@Override
	public List<Map> getMaps() {
		List<Map> listMap = new ArrayList<Map>();
		Map m1 = new Map("Aldorande", null, Visibility.pub);
		Map m2 = new Map("Endor", null, Visibility.friend);
		listMap.add(m1);
		listMap.add(m2);
		return listMap;
	}

	@Override
	public boolean addMap(Map m) {
			return true;
	}

	@Override
	public boolean modifyMap(Map m) {
		return true;		
	}

	@Override
	public boolean deleteMap(Map m) {
		return true;		
	}

	@Override
	public boolean shareMap(Map m) {
		return true;
	}

	@Override
	public String getInfosMap(Map m) {
		return "map de toto";
	}

}
