package test;

import com.example.datanucleus.dao.fake.ActionDaoFakeImpl;




public class Connect {
	
	public static void main(String[] args) {
		ActionDaoFakeImpl a = new ActionDaoFakeImpl();
		a.getActions("Me");
		
    }


}
