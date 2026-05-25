const data = new Date();
const infoData = document.getElementById("data-hora");
infoData.textContent += `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}`;

function mostrarDetalhes(nomeProduto, imgUrl, preco, descricao) {
    const url = `pop_produtos.html?nomeCarro=${encodeURIComponent(nomeProduto)}
        &imgCarro=${encodeURIComponent(imgUrl)}
        &precoCarro=${encodeURIComponent(preco)}
        &descricao=${encodeURIComponent(descricao)}`;

    window.open(url, "_self");
}