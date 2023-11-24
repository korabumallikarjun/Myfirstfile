public class Overloading {
    public void doSum(integer a,integer b){
        integer res=a+b;
        System.debug('result'+res);
    }
    public void doSum(integer a,integer b,integer c){
        integer res=a+b+c;
        System.debug('result'+res);
    } 
    public void doSum(integer a,integer b,integer c, integer d){
        integer res=a+b+c+d;
        System.debug('result'+res);
    }
}