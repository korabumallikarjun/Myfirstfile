public class AccountinsOpp {
    public void getAccdata(){
        List <Opportunity> Account = [select id, name, Account.name from Opportunity];
        for(Opportunity Accounts:Account){
            System.debug(Accounts);
        }
    }
}