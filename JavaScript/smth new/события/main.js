let counter = 0;

function clicked(elem) {
    counter++;
    if (counter <= 5)
    {
        elem.innerHTML = "Жми усерднее!!";
        elem.style.background = "brown";
    }
    else if ( counter >= 5 && counter <= 25)
    {
        elem.innerHTML = "У тебя почти получилось!";
        elem.style.background = "silver";
    }
    else
    {
        elem.innerHTML = "Молодец! Ты победил!";
        elem.style.cssText = "border-radius: 5px; border: 0; font-size: 20px; background-color: yellow";
    }
}

function inputed(elem) {
    if (elem.value == "Привет!")
        alert("ЗДравствуй!");
    console.log(elem.value);
}