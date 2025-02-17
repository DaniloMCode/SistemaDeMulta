document.addEventListener("DOMContentLoaded", () => { /* DOMContentLoaded, ele garante que o código só rode depois que o HTML estiver totalmente carregado*/
    function calcular() {
        const js_txtvel = document.getElementById('txtvel');
        const js_res = document.getElementById('res');
        const vel = Number(js_txtvel.value);

        // Observa se o campo de velocidade esta vaziu
        if (js_txtvel.value === "" || js_txtvel.value === "0") {
            js_res.innerHTML = `<p style="color: red;">Por favor, insira uma velocidade válida.</p>`;
            return; // Sai da função se o campo estiver vazio
        }

        // Mensagem padrão com a velocidade atual
        js_res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> Km/h</p>`;

        // Lógica para verificar a velocidade
        if (vel > 120) {
            js_res.innerHTML += `
                <p style="color: red;"><strong>Você está MULTADO por excesso de velocidade!</strong></p>
                <p style="color: red;"><strong>Você perdeu 5 pontos na carteira!</strong></p>
            `;
        } else if (vel == 60) {
            js_res.innerHTML += `<p style="color: blue;"><strong>ALERTA</strong> Limite maximo da velocidade permitida</p>`;
        } else if (vel > 60){
            js_res.innerHTML += `<p style="color: blue;"><strong>ALERTA</strong> multa leve, fique atento na velocidade</p>`;            
        } else if (vel > 50) {
            js_res.innerHTML += `<p style="color: orange;"><strong>ATENÇÃO</strong>, você está próximo do limite de velocidade!</p>`;
        } else {
            js_res.innerHTML += `<p style="color: green;">Velocidade de acordo com o limite!</p>`;
        }

        // Mensagem final
        js_res.innerHTML += `<p>Dirija sempre com o cinto de segurança!</p>`;
    }

    function novaVerificacao() {
        const js_txtvel = document.getElementById('txtvel');
        const js_res = document.getElementById('res');

        // Limpa o campo de input e o resultado
        js_txtvel.value = "";
        js_res.innerHTML = "";
    }

    // Adiciona o evento de clique ao botão "Verificar"
    document.querySelector(".btn-verificar").addEventListener("click", calcular);

    // Adiciona o evento de clique ao botão "Nova Verificação"
    document.getElementById("btn-nova-verificacao").addEventListener("click", novaVerificacao);
});