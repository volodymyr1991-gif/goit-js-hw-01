// function main() {
//     let input = prompt("task-6\n\Введіть число");
//     let total = 0;
//     while (input !== null) {
//       if (isNaN(input)) {
//         alert("Було написано не число, спробуйте ще раз");
//       } else {
//         total += Number(input);
//       }
//       input = prompt("Введіть число");
//     }
//     return total;
//   }
// alert("Загальна сума чисел дорівнює " + main());

// let input;
let total=0;

while(true){
    let input=prompt('Введіть число');
if(input===null){
    alert('Відмінено користувачем');
    break;
    
}
input=Number(input);
const notNumber=Number .isNaN(input)
if(notNumber){
    alert('Ви ввели не число');
    continue;
}

total=total+input;

}
alert(`Загальна сума чисел ${total}`);