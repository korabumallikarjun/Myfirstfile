public with sharing class MyControler {
    Account act;
    public List<Account> accounts { get; set; }
 
    public Account getAccounts() {
        return act;
    }
    public MyControler() {
        accounts = [SELECT Id, Name FROM Account];
    }
}