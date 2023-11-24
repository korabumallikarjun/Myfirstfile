import { LightningElement} from 'lwc';

export default class Parent45comp extends LightningElement {
    searchDetail=[];
    handleAccout(event){
        this.searchDetail=[];
        alert("this is for calling the child");
        alert(event.detail);
        try{
            event.detail.forEach(x => {
                var accData={
                    id:x.Id,
                    name:x.Name
                }
                this.searchDetail.push(accData);
            });
        }catch(e){
            console.log(e);
        }
    }
}