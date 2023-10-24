alert("Привет!");

let data = confirm("У тебя всё хорошо?");
if (data){
    alert("Я за тебя очень рад!");
}
else {
    alert("Не расстраивайся, всё будет хорошо!");
}

let years = prompt("Сколько тебе лет?", 18);
if (years < 18){
    alert("Иди уроки учи, школьник.");
}
else {
    alert("Добрый вечер, многоуважаемый!");
}

let person = null;
if (confirm("Вы точно уверены?")) {
    person = prompt("Как тебя зовут?")
    alert("Привет " + person + "!");
}
else {
    alert("Очень жаль, что ты нажал «Отмена»")
}