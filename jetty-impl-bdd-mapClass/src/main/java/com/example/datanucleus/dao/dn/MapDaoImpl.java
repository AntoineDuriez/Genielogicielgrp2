package com.example.datanucleus.dao.dn;

import java.util.ArrayList;
import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.PersistenceManagerFactory;
import javax.jdo.Query;
import javax.jdo.Transaction;

import com.example.datanucleus.dao.Action;
import com.example.datanucleus.dao.Map;
import com.example.datanucleus.dao.MapDao;
import com.example.datanucleus.dao.Marker;

public class MapDaoImpl implements MapDao {

	private PersistenceManagerFactory pmf;
	
	public MapDaoImpl(PersistenceManagerFactory pmf) {
		this.pmf = pmf;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Map> getMaps() {
		//String mapName = "nonoui";
		List<Map> maps = null;
		List<Map> detached = new ArrayList<Map>();
		PersistenceManager pm = pmf.getPersistenceManager();
		Transaction tx = pm.currentTransaction();
		try {
			tx.begin();
			Query q = pm.newQuery(Map.class);
			//q.declareParameters("String mapName");
			//q.setFilter("name.startsWith(mapName)");

			maps = (List<Map>) q.execute();
			detached = (List<Map>) pm.detachCopyAll(maps);
			
			tx.commit();
		} finally {
			if (tx.isActive()) {
				tx.rollback();    
			}
			pm.close();
		}
		return detached;
	}

	@Override
	public boolean addMap(String mapName) {
		
		Map m = new Map(mapName);
		PersistenceManager pm = pmf.getPersistenceManager();
		Transaction tx = pm.currentTransaction();
		try {
			tx.begin();
			/*Marker mark = new Marker("fdsf","dfsdf",3232,545);
			List<Marker> list = new ArrayList<Marker>();
			list.add(mark);
			m.setMarkerList(list);*/
			System.out.println(m.getMarkerList());
			pm.makePersistent(m);

			tx.commit();
		} finally {
			if (tx.isActive()) {
				tx.rollback();
			}
			pm.close();
		}
		return true;
	}

	@Override
	public boolean modifyMap(Map m, String newName) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean deleteMap(Map m) {
		String mapName = m.getName();
		PersistenceManager pm = pmf.getPersistenceManager();
		Transaction tx = pm.currentTransaction();
		try {
			tx.begin();
			Query q = pm.newQuery(Map.class);
			q.declareParameters("String mapName");
			q.setFilter("name == mapName");
			
			Long number = (Long)q.deletePersistentAll(mapName);
			System.out.println(number);
			
			tx.commit();
		} finally {
			if (tx.isActive()) {
				tx.rollback();    
			}
			pm.close();
		}
		return true;
	}

	@Override
	public boolean shareMap(Map m) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public Map getMyMap(String mapName) {
		List<Map> maps = null;
		List<Map> detached = new ArrayList<Map>();
		PersistenceManager pm = pmf.getPersistenceManager();
		Transaction tx = pm.currentTransaction();
		try {
			tx.begin();
			Query q = pm.newQuery(Map.class);
			q.declareParameters("String mapName");
			q.setFilter("name == mapName");

			maps = (List<Map>) q.execute(mapName);
			detached = (List<Map>) pm.detachCopyAll(maps);
			
			tx.commit();
		} finally {
			if (tx.isActive()) {
				tx.rollback();    
			}
			pm.close();
		}
		return detached.get(0);

	}
}