function info() {
    console.log("Привет мир!");
}

info();

function info2(sentence) {
    alert(sentence + " !")
}

info2("Привет мир");

let a = prompt("Введите первое слагаемое.")
let b = prompt("Введите второе значние.");
function summa(a, b) {
    let res = Number(a) + Number(b);
    alert("Сумма двух ваших чисел: " + res);
}

summa(a, b);

function arr_sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];

    alert("Сумма массива: " + sum);
    return sum;
}

let arr = [1, 8, 12, -3];
let res = arr_sum(arr);
console.log(res);