package com.example.datanucleus.dao.dn;

import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.PersistenceManagerFactory;
import javax.jdo.Transaction;

import com.example.datanucleus.dao.Map;
import com.example.datanucleus.dao.MapDao;

public class MapDaoImpl implements MapDao {

	private PersistenceManagerFactory pmf;
	
	public MapDaoImpl(PersistenceManagerFactory pmf) {
		this.pmf = pmf;
	}
	
	
	@Override
	public List<Map> getMaps() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean addMap() {
		Map m = new Map("My map");
		PersistenceManager pm = pmf.getPersistenceManager();
		Transaction tx = pm.currentTransaction();
		try {
			tx.begin();

			pm.makePersistent(m);

			tx.commit();
		} finally {
			if (tx.isActive()) {
				tx.rollback();
			}
			pm.close();
		}
		return false;
	}

	@Override
	public boolean modifyMap(Map m) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean deleteMap(Map m) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean shareMap(Map m) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Map getMyMap(String s) {
		// TODO Auto-generated method stub
		return null;
	}

}
