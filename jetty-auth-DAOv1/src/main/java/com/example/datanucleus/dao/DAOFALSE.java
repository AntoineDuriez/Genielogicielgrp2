package com.example.datanucleus.dao;

import com.example.datanucleus.dao.fake.ActionDaoFakeImpl;

public class DAOFALSE {

	public static ActionDao getActionDao() {
		return new ActionDaoFakeImpl();
	}

}
