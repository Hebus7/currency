const exchangeRate  = 23000
let from = prompt("What currency do you want to exchange from ?")
let to = prompt("This is what you get")
let amount = prompt("How much")
let result =0

if(isNaN(amount)===true){
    console.log("type the number please");
}else{

if( from === "vnd" && to === 'usd'){
    vndToUsd()
}else if(from === "usd" && to === 'vnd'){
    usdToVnd()
}else {
    console.log("We don't have that currency")
}
}
function vndToUsd(){
   result = amount/exchangeRate
   console.log("Your money is", formatCurrency(to,result));
   return result
}
function usdToVnd(){
    result = amount*exchangeRate
    console.log("Your money is", formatCurrency(to,result));
    return result
 }
 function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }

