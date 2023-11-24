trigger MerchandiseTrigger on Merchandise__c (before insert,before delete,after delete,after insert) {
    if(Trigger.isdelete && Trigger.isBefore){
        MerchandiseTriggerHandler.test(Trigger.Old);
    }
}