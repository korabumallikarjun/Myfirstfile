import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class navigationcontact extends NavigationMixin(LightningElement) {
 
    openContactHome() {
        this[NavigationMixin.Navigate] ({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName:'new'
            }
        });
    }
}