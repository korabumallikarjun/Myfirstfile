public class UniqueVal {
    public void getName(){
        Set<String> name= new Set<String>();
        name.add('mallikarjun');
        name.add('korabu');
        name.add('Amith');
        name.add('kaka');
        name.add('Amith');
    System.debug('List set values'+name);
        for(String un:name){
            System.debug('name: '+un);
        }
    }
}