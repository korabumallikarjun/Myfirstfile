trigger OpportunityTrigger on Opportunity (before insert) {
    if(trigger.isUpdate && trigger.isBefore){
        OpportunityTriggerHandler.test(trigger.new ,trigger.old);
    }
        
}