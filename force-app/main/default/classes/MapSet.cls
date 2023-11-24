public class MapSet {
    public void getName(){
        Map<String,String> name= new Map<String,String>();
        name.put('nm1','mallikarjun');
        name.put( 'nm2','Ambarish');
        name.put('nm3','Basavaraj');
        name.put('nm4','Chetan');
        
        Set<String> n= name.keySet();
        for(String ks:n){
            System.debug('list'+ks);
        }
        List <String> val = name.values();
        for(String kv:val){
            System.debug('values is'+kv);
        }
        
    }
}