const ADMIN_PASSWORD = 'jqueryismyjam';

let message;

message=prompt('який пароль:',ADMIN_PASSWORD);
if(message===null){
    message='Скасовано користувачем!';
   
    
}else if(message===ADMIN_PASSWORD){
    message='Ласкаво просимо!';
} else{
    message='Доступ заборонений, невірний пароль!';
}
alert(message);

