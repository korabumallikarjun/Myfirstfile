public class AccountTriggerHandler {
    public static void Test(List <Account> a){
        if(a[0].Industry=='Education'){
            a[0].Ownership='Public';
        }
    }

}