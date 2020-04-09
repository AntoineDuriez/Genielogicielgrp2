package com.example.datanucleus.dao;
import com.example.datanucleus.dao.fake.ActionDaoFakeImpl;
import com.example.datanucleus.dao.stub.*;
//JAVADOC
public class DAO {
	
	public static MapDao getMapDao() {
		return new MapDaoStub();
	}
	
	public static MarkerDao getMarkerDao() {
		return new MarkerDaoStub();
	}
	
	public static UserDao getUserDao() {
		return new UserDaoStub();
	}
	
	public static CategoryDao getCategoryDao() {
		return new CategoryDaoStub();
	}
	
	public static MessageDao getMessageDao() {
		return new MessageDaoStub();
	}
	
	public static PictureDao getPictureDao() {
		return new PictureDaoStub();
	}
	
	public static ActionDao getActionDao() {
		return new ActionDaoFakeImpl();
	}
}
