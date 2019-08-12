var maxElem = document.querySelector('.updateBtn')
var totalElem = document.querySelector('.totalBill')
var shoppingElem = document.querySelector('.shopping')
var budgetElem = document.querySelector('.budget')
var addBtn = document.querySelector('.addBtn')
var errorElem = document.querySelector('.error')
var myPrice = document.querySelector('.prices')


var factoryList = fruits()

function add(){
  
    factoryList.add(shoppingElem.value,myPrice.value)
    var li = document.createElement('li');
    var lol = document.createTextNode(shoppingElem.value)
    li.appendChild(lol)
    var myLol = document.getElementById('listitems').appendChild(li)

    totalElem.innerHTML = factoryList.total1()
    errorElem.innerHTML = factoryList.error()

    if(factoryList.total1() >= budgetElem.value){
      alert('you have reached the max')
    }
}

function max(){
  factoryList.myMax(budgetElem.value)
  
}
addBtn.addEventListener('click',add)
maxElem.addEventListener('click',max)