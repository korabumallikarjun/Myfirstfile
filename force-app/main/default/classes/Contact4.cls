public class Contact4 {

    public Contact newContact { get; set; }
    
    public Contact4(){
    newContact =new Contact();
    
    }
    
    public void insertContact(){
     insert newContact;
     newContact=new Contact();
    }
}