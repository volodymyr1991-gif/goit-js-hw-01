const ADMIN_PASSWORD = 'jqueryismyjam';

let message;

message=prompt('який пароль:',ADMIN_PASSWORD);
if(message!==ADMIN_PASSWORD){
    message='Скасовано користувачем!';
   
    
}else if(message===ADMIN_PASSWORD){
    message='Ласкаво просимо!';
}else{
    message='Доступ заборонений, невірний пароль!';
}
alert(message);

// if(message==ADMIN_PASSWORD || message==null){
//     message = "Ласкаво просимо!";
// }
// else{
// message='Доступ заборонений, невірний пароль!'
// }
// const admin_pasword='dfhdfg';
// let message;
// message=prompt("ВвЄ",admin_pasword);

// if(message)
// {
//   message=admin_pasword;

//   alert('Ласкаво просимо');
// }
// if else(message==null){
//     alert
// }




// else
// {
//   alert("відмовився");
// }