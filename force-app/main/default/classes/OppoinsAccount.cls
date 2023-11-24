public class OppoinsAccount {
    public void getOppData(){
        List<Account> Opportunity = [select id, name, (select id, name from Opportunities) from Account];
        for(Account Opportunities:Opportunity){
            System.debug(Opportunities);
        }
    }
}