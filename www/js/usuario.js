document.getElementById("loginButton").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão de submit do formulário

    // Obtém os valores digitados pelo usuário
    var usuario = document.getElementById("user").value;
    var senha = document.getElementById("password").value;

    // Verifica se o usuário e a senha estão corretos
    if (usuario === "user" && senha === "123456") {
        // Mostra um alerta com a mensagem de login bem-sucedido
        alert("Usuário logado com sucesso!");

        // Troca a imagem do usuário
        document.querySelector(".img_user").src = "img/moana.ico";
    } else {
        // Mostra um alerta com a mensagem de erro de login
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
});