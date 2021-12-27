import { LightningElement ,wire} from 'lwc';
import Name from '@salesforce/schema/WSYHK_WishList__c.Name';
import WSYHK_Wish__c from '@salesforce/schema/WSYHK_WishList__c.WSYHK_Wish__c';
import OwnerId from '@salesforce/schema/WSYHK_WishList__c.OwnerId';
import CreatedById from '@salesforce/schema/WSYHK_WishList__c.CreatedById';
import WSYHK_WishFlag__c from '@salesforce/schema/WSYHK_WishList__c.WSYHK_WishFlag__c';
import WSYHK_CompleteDate__c from '@salesforce/schema/WSYHK_WishList__c.WSYHK_CompleteDate__c';
import WSYHK_WantToSay__c from '@salesforce/schema/WSYHK_WishList__c.WSYHK_WantToSay__c';
import wsyhk_getWishLists from '@salesforce/apex/wsyhk_WishListController.wsyhk_getWishLists';
import { reduceErrors } from 'c/ldsUtils';
const COLUMNS = [
    { label: '願望リスト名', fieldName: Name.fieldApiName},
    { label: '心の願い', fieldName: WSYHK_Wish__c.fieldApiName},
    { label: '所有者', fieldName: OwnerId.fieldApiName},
    { label: '作成者', fieldName: CreatedById.fieldApiName},
    { label: '完了フラグ', fieldName: WSYHK_WishFlag__c.fieldApiName},
    { label: '達成日', fieldName: WSYHK_CompleteDate__c.fieldApiName},
    { label: '言いたい言葉', fieldName: WSYHK_WantToSay__c.fieldApiName}
];

export default class Wsyhk_WishList extends LightningElement {
    columns = COLUMNS;
    @wire(wsyhk_getWishLists)
    wishList;

    get errors() {
        return (this.wishList.error) ?
            reduceErrors(this.wishList.error) : [];
    }
}