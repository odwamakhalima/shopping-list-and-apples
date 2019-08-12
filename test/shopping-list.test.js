describe("The Shopping list functions", function() {
it("it should be able to return the object of the item and its price", function() {

    var factoryList = fruits()
    factoryList.add('milk',98)
    assert.deepEqual(factoryList.cost1(),{ myList: 'milk', finalPrice: 98 } );
   
});

it("it should return an error if there is no item entered", function() {

    var factoryList = fruits()
    factoryList.add('',98)
    assert.equal(factoryList.error(),'This Item is not available' );
   
});

it("it should return an error if there special characters are used", function() {

    var factoryList = fruits()
    factoryList.add('nbf%$#$^&',98)
    assert.equal(factoryList.error(),'This Item is not available' );
   
});

it("it should return an error if there special characters are used", function() {

    var factoryList = fruits()
    factoryList.total1(98)
    assert.equal(factoryList.myMax(188),);
   
});
});