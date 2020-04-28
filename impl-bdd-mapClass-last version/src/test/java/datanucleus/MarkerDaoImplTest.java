package datanucleus;

import java.util.ArrayList;
import java.util.List;

import javax.jdo.JDOHelper;
import javax.jdo.PersistenceManager;
import javax.jdo.PersistenceManagerFactory;
import javax.jdo.Transaction;

import org.junit.Test;

import com.example.datanucleus.dao.Map;
import com.example.datanucleus.dao.MapDao;
import com.example.datanucleus.dao.Marker;
import com.example.datanucleus.dao.MarkerDao;
import com.example.datanucleus.dao.dn.MapDaoImpl;
import com.example.datanucleus.dao.dn.MarkerDaoImpl;

public class MarkerDaoImplTest {
	@Test
	public void test() {
		PersistenceManagerFactory pmf = JDOHelper.getPersistenceManagerFactory("Example");
		MarkerDao markerDao = new MarkerDaoImpl(pmf);

		//Assert.assertEquals(0, mapDao.getActions("user1").size());
		
		//mapDao.getActions("user2");
		//Map map = new Map("Test");
		/*
		action.setUsername("user1");
		action.setTitle("A title");
		action.setContent("A content");*/
		Marker mark = new Marker("fdgdfg","lsdkfjs",32,6265);
		List<Marker> list = new ArrayList<Marker>();
		list.add(mark);
		MapDao mapDao = new MapDaoImpl(pmf);
		System.out.println(list);
		
		Map tempo = mapDao.getMyMap("Alderande");
		tempo.setMarkerList(list);
		PersistenceManager pm = pmf.getPersistenceManager();
		Transaction tx = pm.currentTransaction();
		try {
			tx.begin();
			pm.makePersistent(tempo);
			tx.commit();
		} finally {
			if (tx.isActive()) {
				tx.rollback();
			}
			pm.close();
		}
		System.out.println(mapDao.getMyMap("Alderande").getMarkerList());
		markerDao.addMarker("lenom", "desc", 2.5644, 45.566);		
		
		//Assert.assertEquals(1, mapDao.getActions("user1").size());
		

		//DAO.getActionDao().getActions("user1");
		
		
		pmf.close();
	}
}
