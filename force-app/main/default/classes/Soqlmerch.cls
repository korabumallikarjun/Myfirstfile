public class Soqlmerch {
    public void getmerchdata(){
        List<Merchandise__c> mdata = [select id, name,Merchandise_Desc__c,Mrchandie_Stock__c,Mechandise_Price__c from Merchandise__c];
        
        List<Account> adata = [select id,name from Account];
        
        for(Merchandise__c mr:mdata){
            System.debug('Merchandie List'+mr);
        }
        
        for(Account ac:adata){
            System.debug('Account List'+ac);
        }
    }
}