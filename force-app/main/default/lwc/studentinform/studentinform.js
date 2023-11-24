import { LightningElement, api, track} from 'lwc';
import  Student__c from '@salesforce/schema/Student__c';
import createAccount from '@salesforce/apex/createAcc.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecordWithFieldIntigrity extends LightningElement {
    @track name = Name;
    @track fathername = StudentFatherName__c;
    @track email = Student_Email__c;
    @track fees =Student_Fees__c;
    rec = {
        name : this.name,
        fathername : this.StudentFatherName__c,
        email : this.Student_Email__c,
        fees: this.Student_Fees__c
    }

    handleNameChange(event) {
        this.rec.Name = event.target.value;
        console.log("name", this.rec.Name);
    }
    
    handleFnameChange(event) {
        this.rec.fathername = event.target.value;
        console.log("fathername", this.rec.fathername);
    }
    
    handleEmailChange(event) {
        this.rec.email = event.target.value;
        console.log("Email", this.rec.email);
    }
    handleStdfeesChange(event) {
        this.rec.email = event.target.value;
        console.log("Fees", this.rec.fees);
    }


    handleClick() {
        createAccount({ std : this.rec })
            .then(result => {
                this.message = result;
                this.error = undefined;
                if(this.message !== undefined) {
                    this.rec.Name = '';
                    this.rec.fathername = '';
                    this.rec.email = '';
                    this.rec.fees = '';
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Student record created',
                            variant: 'success',
                        }),
                    );
                }
                
                console.log(JSON.stringify(result));
                console.log("result", this.message);
            })
            .catch(error => {
                this.message = undefined;
                this.error = error;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
                console.log("error", JSON.stringify(this.error));
            });
    }
}