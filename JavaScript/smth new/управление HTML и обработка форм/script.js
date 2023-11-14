let Text = document.getElementById('Text');
console.log(Text.id)
Text.title = "Это уже новый текст"
console.log(Text.title)
Text.style.color = "yellow";
Text.style.backgroundColor = "black";
Text.innerHTML = "Hello <br> world!";
document.getElementById('Text').style.color = "orange"; 

//let spanS = document.getElementsByClassName('simple-text');
let spans = document.getElementsByTagName('span');
for (let i=0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}

