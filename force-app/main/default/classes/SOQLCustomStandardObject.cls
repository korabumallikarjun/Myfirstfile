public class SOQLCustomStandardObject {
    public void getData(){
        System.debug('its a Custom Object');
        List<Merchandise__c> mar = [select id, name from Merchandise__c];
        for(Merchandise__c m:mar){
            System.debug(m.id+' '+m.name);
        }
        System.debug('Standard Account objects');
        List<Account> act =[select id,name from Account];
        for(Account at:act){
            System.debug(at.id+' '+at.name);
        }
    }
}