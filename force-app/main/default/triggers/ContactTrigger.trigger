trigger ContactTrigger on Contact (before delete,after delete,before insert ,after insert) {
    if(Trigger.isdelete && Trigger.isBefore){
        ContactTriggerHandler.Test(Trigger.old);
    }
}