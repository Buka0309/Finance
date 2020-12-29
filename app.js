// дэлгэцтэй ажиллах контроллер
var uiController= (function(){

})();
// санхүүтэй ажиллах контроллер
var financeController= (function(){

})();
// програмын холбогч контроллер
var appController= (function(uiController, financeController){
    var ctrlAddItem= function(){}
    document.querySelector('.add__btn').addEventListener('click',function(){ ctrlAddItem()})
    document.querySelector('keypress', function(event){ if( event.keyCode===13){
        ctrlAddItem()
    }})

})(uiController, financeController);