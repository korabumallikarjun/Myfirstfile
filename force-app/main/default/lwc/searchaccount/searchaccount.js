import { LightningElement } from 'lwc';
import getAccount from '@salesforce/apex/SearchAccountInfo.getAccountDetails'
import myMethod from './mycommonfun';
export default class Searchaccount extends LightningElement {
    accountName
    accountPhone
    billingStreet
    billingCity
    billingState
    billingzipcode
    handleOnChangeAccountName(event){
        this.accountName = event.target.value;
     }
     handleOnChangeAccountPhone(event){
        this. accountPhone = event.target.value;
        alert("this is "+ this.accountPhone);
     }
     handleOnChangeAccountBillingStreet(event){
        this.billingStreet = event.target.value;
        alert("this is "+this.billingStreet);
     }
     handleOnChan
     geAccountbillingCity(event){
        this.billingCity = event.target.value;
        alert("this is "+this.billingCity);
     }
     handleOnChangebillingState(event){
        this.billingState = event.target.value;
        alert("this is "+this.billingState);
     }
     handleOnChangebillingZipcode(event){
        this.billingzipcode = event.target.value;
        alert("this is "+this.billingzipcode);
     }
    
     initiateSearch(e){
        alert("this is for checking");
        getAccount({actName: this.accountName}).
        then(results=>{this.dispatchEvent(new CustomEvent('getaccountdata',{details:results}));
     }).catch (error=>{console.log(error)});
     }
     
     

}