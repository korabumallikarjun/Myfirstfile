import { LightningElement,wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import SAMPLE_MESSAGE_CHANNEL from '@salesforce/messageChanneels/contactMessageChannel__c';
 
export default class Sendmessagelwc extends LightningElement {
    @wire(MessageContext)
    MessageContext;
 
    publishMessage(){
        const message = {
            recordId : '12345',
            message : 'Hello from publisher'
        };
        publish(this.MessageContext,SAMPLE_MESSAGE_CHANNEL,message);
    }
}