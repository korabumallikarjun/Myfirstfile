public class createAcc {
    @AuraEnabled
    public static Student__c createAccount(Student__c std) {
        system.debug('acc'+std);
        insert std;
        return std;
    }
}