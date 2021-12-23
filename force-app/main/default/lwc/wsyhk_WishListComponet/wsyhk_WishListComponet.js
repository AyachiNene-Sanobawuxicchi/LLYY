import { LightningElement ,wire} from 'lwc';
import getAllWishList from '@salesforce/apex/wsyhk_WishList.getAllWishList';
import insertWishList from '@salesforce/apex/wsyhk_WishList.insertWishList';

export default class Wsyhk_WishListComponet extends LightningElement {

    @wire(getAllWishList) AllWishList;

    WSYHK_Wish;
    WSYHK_WantToSay;

    Test(){
        console.log(this.AllWishList.data);
    }

    WSYHK_InsertWish(){
        console.log('Insert!!');

        var inputList = this.template.querySelectorAll('lightning-input');
        for (let index = 0; index < inputList.length; index++) {
            if(inputList[index].label == 'WSYHK_Wish：'){
                this.WSYHK_Wish = inputList[index].value;
            }else if(inputList[index].label == 'WSYHK_WantToSay：'){
                this.WSYHK_WantToSay = inputList[index].value;
            }    
        }

        console.log('this.WSYHK_Wish' + this.WSYHK_Wish);
        console.log('this.WSYHK_WantToSay' + this.WSYHK_WantToSay);

        insertWishList({ WSYHK_Wish: this.WSYHK_Wish , WSYHK_WantToSay: this.WSYHK_WantToSay });

        window.location.reload();

    }

}