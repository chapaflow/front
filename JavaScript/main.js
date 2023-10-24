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


let arr = [5, true, "word", 5.7, 0, -100];
console.log(arr);
arr[1] = "o.0";
console.log(arr[1]);
console.log(arr.length);
let matrix = [[5, true], ["word", 5.7], [0, -100]];
matrix[1][0] = "wassup!";
console.log(matrix[1][0]);


for (let i = 0; i < 10; i++)
{
    console.log("Привет, это номер ", i+1);
}

let j = 10;
console.log("Обратный остчёт:");
while(j>=0)
{
    console.log(j + "...");
    j--;
}
console.log("Пуск!");

let x = 100;
do {
    console.log(x);
    x/=2;
} while (x>10);

console.log("Вывод меньше 20:")
for (let i = 10; i <= 20; i++) {
    if (i > 15 )
    break;
    
    console.log(i);
}

console.log("Вывод нечётных: ");
for (let i = 10; i <= 20; i++) {
    if (i % 2 == 0)
    continue;
    console.log(i);
}

let new_arr = [5, 7, 3, 8, 32, 9, 10];
for (let i = 0; i < new_arr.length; i++){
    new_arr[i]*=2;
    console.log("Элемент " + (i+1) + ": " + new_arr[i]);
}
