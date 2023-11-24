public class Practice1 {
    public void ambi(){
        List<Merchandise__c> records=[select id,name from Merchandise__c];
        for(Merchandise__c record:records){
            System.debug(record);
        }
    }
}