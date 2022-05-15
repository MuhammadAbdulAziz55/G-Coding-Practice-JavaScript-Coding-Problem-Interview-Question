function kilometerToMeter(n){
    var converter = n * 1000;
    return converter;
}
console.log(kilometerToMeter(7));

function budgetCalculator(watch, phone, laptop){
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
console.log(budgetCalculator(1, 1, 1));


function hotelCost(days){
    var totalCost = 0;
    if(days <= 10){
        totalCost = days * 100;
    }
    else if(days <= 20){
        var firstTenDays = 10 * 100;
        var remainingDays = days - 10;
        var secondTenDays = remainingDays * 80;
        totalCost = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var twentyToUDays = remaining * 50;
        totalCost = firstTenDays + secondTenDays + twentyToUDays;
    }
    return totalCost;
}
console.log(hotelCost(31));


function megaFriend(name){
    var maxStr = name[0].length;
    var  maxi= name[0];
    for (let i = 1; i < name.length; i++) {
        const element = name[i].length;
        if(element > maxStr){
            maxi = name[i];
            maxStr =element;
        }
       
    }
    return maxi;
     
}

console.log(megaFriend(["Abdullah", "Abdul Aziz", "Abdur Rahman"]));