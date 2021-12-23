public with sharing class wsyhk_WishList {

    // 页面加载时查出心所有愿单
    @AuraEnabled(cacheable=true)
    public static List<WSYHK_WishList__c> getAllWishList(){
        return[SELECt Id,WSYHK_Wish__c, CreatedBy.Name, CreatedDate, WSYHK_WantToSay__c, WSYHK_WishFlag__c, WSYHK_CompleteDate__c FROM WSYHK_WishList__c ORDER BY NAME];
    }

    // 添加心愿单
    @AuraEnabled()
    public static void insertWishList(String WSYHK_Wish,String WSYHK_WantToSay){
        WSYHK_WishList__c WSYHK_WishList = new WSYHK_WishList__c(WSYHK_Wish__c = WSYHK_Wish,WSYHK_WantToSay__c = WSYHK_WantToSay);
        System.debug(wsyhk_WishList);
        insert wsyhk_WishList;
    }

    // 修改心愿单


}
