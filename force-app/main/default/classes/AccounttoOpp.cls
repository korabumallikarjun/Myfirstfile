public class AccounttoOpp {
    public void getDetails(){
        List<Opportunity> accounts = [select id,name, account.name from Opportunity];
        for(Opportunity account:accounts){
            System.debug(account);
        }
        
    }
}