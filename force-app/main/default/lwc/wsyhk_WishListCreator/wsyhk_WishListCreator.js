import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/WSYHK_WishList__c';
import WSYHK_Wish__c from '@salesforce/schema/WSYHK_WishList__c.WSYHK_Wish__c';
import OwnerId from '@salesforce/schema/WSYHK_WishList__c.OwnerId';
import WSYHK_WantToSay__c from '@salesforce/schema/WSYHK_WishList__c.WSYHK_WantToSay__c';

export default class wsyhk_WishListCreator extends LightningElement {
    objectApiName = CONTACT_OBJECT;
    fields = [WSYHK_Wish__c, WSYHK_WantToSay__c, OwnerId];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "WishList created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}