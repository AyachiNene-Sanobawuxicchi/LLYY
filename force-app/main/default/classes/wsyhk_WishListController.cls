public with sharing class wsyhk_WishListController {
    @AuraEnabled(cacheable=true)
    public static List<WSYHK_WishList__c> wsyhk_getWishLists() {
        return [
            SELECT Name, WSYHK_Wish__c, OwnerId,CreatedById,WSYHK_WishFlag__c,WSYHK_CompleteDate__c,WSYHK_WantToSay__c
            FROM WSYHK_WishList__c
            ORDER BY
            NAME
       ];
        // throw new AuraHandledException('Forced error');
    }
}