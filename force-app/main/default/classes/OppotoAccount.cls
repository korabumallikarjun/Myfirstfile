public class OppotoAccount {
        public void getData(){
        List<Account> opportunities=[SELECT Id,Name,(SELECT Id,Name From Opportunities) FROM Account];
        for(Account opportunity:opportunities){
            System.debug(opportunity);
        }
       }
}