document.writeln("Димасик, иди нахуй :)")
console.log("Да да, иди нахуй :)")        
console.error("Дима знает силу совоего героя!")
console.warn("Димка и Алёнка :)")


var num;
num = 5;
var sec_num = 12;
console.log(num);
console.error(num);
document.writeln(sec_num);
document.writeln("Ты загадал число... " + num + "? Я угадал?")


var num_1 = 2;
var num_2 = 7; 
var num_3 = num_1 + num_2;
var num_4 = num_1 / num_2;
console.log("Первое число: " + num_1);
console.log("Второе число: " + num_2);
console.log("Их сумма: " + num_3);
console.log("Их разность: " + (num_1 - num_2));
console.log("Их деление: " + num_4);
num_1++;
console.log("Первое число +1: " + num_1);
//ВАЖНО!!!
var str_1 = "12";
var str_2 = "2";
console.log("Результат сложения 12 и 2: " + (str_1 + str_2));
console.log("Нормальный результат: " + (Number(str_1) + Number(str_2)));    
console.log("Число Pi: " + Math.PI);
console.log("Число e: " + Math.E);
let nums = [0, 2, 4, 6, 8];
console.log("Минимальное из чисел: " + Math.min(...nums));
console.log("Максимальное из чисел: " + Math.max(...nums));


if (num_2 % num_1 == 1 && str_1=="12" && str_2==2)
{
    console.log("Ты прав, дружище!");
}
else
{
    console.log("Ты дурачок?");
}

if (num_1>=10000000000000000000000 || num_2>=2)
{
    console.log("Yes.");
}

let stroka = "Hola!";

switch(stroka) 
{
    case "Привет!": console.log("Russian.");
    break;
    case "Bonjour!": console.log("French.");
    break;
    case "Hello!": console.log("English.");
    break;
    default: console.log("Unknown.");
}


let arr = [];

