var budgetController = (function(){


})();

var UIController = (function(){


})();

var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){
        console.log('OK!')
    }
    document.querySelector('.add_btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
        if(event.keycode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });

})(budgetController, UIController);