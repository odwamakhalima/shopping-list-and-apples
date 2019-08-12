function fruits() {
    var total = 0
    var errorMessage = ''
    var regex = /[!@#$%^&*();,.?"^$:^+=${'}`_;''"\[.*?\]|<>]/i
    var finalPrice = 0;
    var myList;
    const shopList = [];
    var shoppingList= {}
    var myMaxim;

    function myError() {
        return errorMessage
    }

    function myAdd(list, thePrices) {
        errorMessage = ''
        myList = list
        finalPrice = Number(thePrices)
        var myTest = regex.test(myList);
            if (myTest == false && myList.length > 0) {
                shoppingList = {
                    myList,
                    finalPrice
                };
                shopList.push(shoppingList);
                console.log(shoppingList)
            }
            
            else {
                errorMessage = 'This Item is not available'
            }
        }
        
    function fruit1() {
        return shoppingList
    }

    function allFruits() {
        total += finalPrice
        return total.toFixed(2)
    }

    function theMax(maxim) {
       myMaxim = Number(maxim)
    }
    
    return {
        add: myAdd,
        myMax: theMax,
        cost1: fruit1,
        total1: allFruits,
        error: myError,
    }
}


