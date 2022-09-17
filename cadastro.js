function cadastroFanclub(){
    var Nome = document.getElementById("Nome");
    var Sobrenome = document.getElementById("Sobrenome");
    var telefone = document.getElementById("telefone    ");
    var email = document.getElementById("email");
    var date = document.getElementById("date");
    var sexo = document.getElementByName("sexo");
    var parente = document.getElementsByName("parente");
    var redesociais = document.getElementById("redesociais");

    var dados = JSON.parse(localStorage.getItem("dados"));

    var auxRegistro = {
        Nome: Nome.value,
        Sobrenome: Sobrenome.value,
        telefone: telefone.value,
        email: email.value,
        date: date.value,
        sexo: sexo.value,
        parente: parente.value,
        redesociais: redesociais.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("Dados", JSON.stringify(dados));
}