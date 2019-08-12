function totalNumberSold(applesSoldList) {
	
	var result = applesSoldList.map(applesSoldList => applesSoldList.qty).reduce((prev, next) => prev + next);
return result
}

function totalIncome(applesSoldList) {
	var result2 = applesSoldList.map(applesSoldList => applesSoldList.qty).reduce((prev, next) => prev + next);
return result2
}

function totalIncomeGreenApples(applesSoldList){
	return 0;
}

function totalProfit(applesSoldList, applePriceMap){
	return 0;
}

// -- extra functions...

function totalPerColorSold(apples, color) {
	return 0;
}

function totalIncomePerColor(apples, color) {
	return 0;
}

function totalProfitPerColor(apples, color, costMap) {
	return 0;
}

function mostProfitableColor(apples, color, costMap) {
	return 0;
}