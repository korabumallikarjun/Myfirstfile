public class ContactTriggerHandler {
    public static void Test(List<contact> a){
        for(contact c:a){
            if(c.AccountId!=Null){
                c.adderror('you cant delete this');
            }
        }
    }
}