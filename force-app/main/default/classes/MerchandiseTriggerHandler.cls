public class MerchandiseTriggerHandler {
    public static  void test(List<Merchandise__c> m){
        MerchandiseArchive__c mm;
        List<MerchandiseArchive__c> l = new List<MerchandiseArchive__c>();
        for(Merchandise__c x:m){
            mm= new MerchandiseArchive__c();
            mm.name= x.name;
            mm.MerchandiseArch_Stock__c=x.Mrchandie_Stock__c;
            mm.MerchandiseArchDesc__c=x.Merchandise_Desc__c;
            mm.MerchandiseArchPrice__c=x.Mechandise_Price__c;
            l.add(mm);
        }
        insert l;
    }
}