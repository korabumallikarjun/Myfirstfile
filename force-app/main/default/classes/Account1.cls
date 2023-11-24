public class Account1 {
    public void getDetails(){
        List<Account> opportunities=[SELECT Id,Name,(SELECT Id,Name From Opportunities) FROM Account];
        for(Account opportunity:opportunities){
            System.debug(opportunity);
        }
    }
}