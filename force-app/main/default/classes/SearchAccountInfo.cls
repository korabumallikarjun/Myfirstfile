public class SearchAccountInfo {
        @AuraEnabled(cacheable=true)
        public static List<Account> getAccountDetails(String actName){
            actName = '%'+actName+ '%';
            List<Account> act = [select id,name from account where name like:actName];
            return act;
        }
    }