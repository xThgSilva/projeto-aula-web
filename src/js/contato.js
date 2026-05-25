const data = new Date();
const infoData = document.getElementById("data-hora");

infoData.textContent += `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}
 - ${data.getHours()}:${data.getMinutes()}`;

const formulario = document.getElementById("form-contato");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome-sobrenome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("area-mensagem").value;
    const motivo = document.getElementById("motivo-contato").value;
    const recebeEmail = document.getElementById("receber-email").value;
    const contato = document.querySelector("input[name='contato']:checked");

    // Regex para tirar caracteres
    const telefoneFormato = telefone.replace(/\D/g, "");

    if (!email.includes("@")) {
        alert("Envie um email válido.");
        return;
    }

    if (telefoneFormato.length != 11) {
        alert("Envie um telefone válido.");
        return;
    }

    if (!contato) {
        alert("Escolha uma forma para contato.");
        return;
    }

    if (mensagem.trim() == "") {
        alert("Envie uma mensagem válida.");
        return;
    }

    const dadosEnviados = {
        nome: nome,
        email: email,
        telefone: telefoneFormato,
        mensagem: mensagem,
        motivo: motivo,
        recebeEmail: recebeEmail,
        contato: contato.value
    };

    alert("Formulário enviado!");
    console.log(dadosEnviados);
});