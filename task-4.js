let credits=23580;
let pricePerDroid=3000;

let totalPrice;
let result;
let droid=prompt('кількість дроїдів');
if(droid>0){
    totalPrice=droid*pricePerDroid;
    result=credits-totalPrice;
   
    if(result>=0){
        alert(`Ви купили ${droid} дроїдів, на рахунку залишилося ${result} кредитів.`);
     
    }else{
        alert('Недостатньо коштів на рахунку!');
    }
    
}
else{
   
    console.log('Скасовано користувачем');
}
    
