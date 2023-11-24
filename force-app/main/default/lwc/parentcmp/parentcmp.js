import { LightningElement } from 'lwc';

export default class Parentcmp extends LightningElement {
    constructor(){
        super();
        console.log("Parent constructor is called");
    }
    connectedCallback(){
        console.log("parent connected callbak");
    }
    renderedCallback(){
        console.log("Parent rendered callback is called");
    }
    disconnectedCallback(){
        console.log("Parent disconected call back called");
    }
}