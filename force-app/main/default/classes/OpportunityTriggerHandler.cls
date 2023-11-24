public class OpportunityTriggerHandler {
    public static void test(List<Opportunity> l1,List<Opportunity> l2){
        for (integer i=0; i<l1.size(); i++){
            if(l2[i].stageName=='Closed Won'&& l1[i].stageName=='Closed Lost'){
                l2[i].nextStep='Escalate to manager';
            }
        }
    }
}