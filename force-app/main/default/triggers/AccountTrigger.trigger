trigger AccountTrigger on Account (before insert,before delete,after insert ,before update,after update) {
    if(Trigger.isInsert && Trigger.isBefore){
        AccountTriggerHandler.Test(Trigger.new);
    }
}