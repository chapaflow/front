//document.getElementById('main-form').addEventListener("submit", checkForm);

//function checkForm(event) {
function checkForm(el) {
  //event.preventDefault();
  //let name = document.getElementById('name').value;
    let name = el.name.value;
    let pass = el.pass.value;
    let repass = el.repass.value;
    let state = el.state.value;
    
    let failure = "";

    if (name == "" || pass == "" || repass == "" || state == "") 
        failure = "Пожалуйста, заполните все поля.";
    else if (name.length <= 1 || name.length >= 15)
        failure = "Введите корректное имя.";
    else if (pass.length <= 5)
        failure = "Придумайте более надежный пароль.";
    else if (pass != repass)
        failure = "Пароли должны совпадать.";
    else if (pass.split("@").length > 1 || repass.split("@").length > 1)
        failure = "Пароль содержит недопустимый символ.";

    if (failure != "") 
        document.getElementById('error').innerHTML = failure;
    else {
        alert("Все данные введены корректно.");
        window.location = 'https://ru.wiktionary.org/wiki/%D1%81%D1%82%D0%B8%D0%BB%D1%8C';
    }

    return false;
}
