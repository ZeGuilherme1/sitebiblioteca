const urlParams = new URLSearchParams(window.location.search);
            const termoPesquisa = urlParams.get("termo");
            const lista = [
                "Harry Potter",
                "Machado de Assis",
                "Pablo Neruda",
            ];


            const resultados = lista.filter(item => item.toLowerCase().startsWith(termoPesquisa));
            const resultadosLista = document.getElementById("resultados");

            resultados.forEach(resultado => {
                const li = document.createElement("li");
                li.id = "buscados"
                li.textContent = resultado; 
                resultadosLista.appendChild(li);

            });


function search() {
        document.getElementById("buscar").addEventListener("click", function () {
        const termoPesquisa = document.getElementById("pesquisa").value.toLowerCase().trim();
        if (termoPesquisa) {
            window.location.href = `resultado.html?termo=${termoPesquisa}`;
        } else {
            alert("Resultado não encontrado");
        }
    });
}


    function validateLogin() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var message = document.getElementById('message');

        // Coloque aqui a lógica de validação do login
        if (username === 'admin' && password === 'admin') {
            message.textContent = 'Login bem-sucedido!';
            window.location.href = "form.html"
        } else {
            message.textContent = 'Usuário ou senha inválidos. Tente novamente.';
        }
    }
    document.getElementById('password').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            validateLogin();
        }
    });