import { LightningElement } from 'lwc';

export default class Childcmp extends LightningElement {
    constructor(){
        super();
        console.log("Child constructor is called");
    }
    connectedCallback(){
        console.log("Child connected callbak");
    }
    renderedCallback(){
        console.log("child rendered callback is called");
    }
    disconnectedCallback(){
        console.log("child disconected call back called");
    }
    errorCallback(){
        console.log("child error callback is called");
    }
    handleClick(){
        if(this.isVisible==true){
            this.isVisible=false;
        }else{
            this.isVisible=true;
        }
    }
}