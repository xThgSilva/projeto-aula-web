// Pra voltar
const btnVoltar = document
    .getElementById("btnVoltar")
    .addEventListener("click", () => {
        window.history.back();
    });

// Pegandos os dados da URL
function getProperties(carroDetails) {
    const urlParametro = new URLSearchParams(window.location.search);
    return urlParametro.get(carroDetails);
}

document.title = getProperties("nomeCarro");

// Preencendo campos
// document.getElementById("imgCarro").src = `${getProperties("imgCarro")}`; (ANTIGO)
document.getElementById("nomeCarro").innerText =
    `${getProperties("nomeCarro")}`;
document.title = `${getProperties("nomeCarro")}`;
document.getElementById("precoCarro").innerText +=
    `${getProperties("precoCarro")}`;
document.getElementById("descCarro").innerHTML =
    `${getProperties("descricao")}`;

//Slider
const imagens = getProperties("imgCarro")
    ? getProperties("imgCarro").split(",")
    : [];

let i = 0;
const imgSlider = document.getElementById("slider-img");

// Botões para alternar entre as imagens
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showImages() {
    if (imagens.length > 0) {
        imgSlider.src = imagens[i];

        // Alterando a cor e estado do botão de voltar
        if (i == 0) {
            prevBtn.style.background = "#580101"
        }
        else if (i == imagens.length - 1) {
            nextBtn.style.background = "darkred"
        }
        else {
            prevBtn.style.background = "red"
            nextBtn.style.background = "red"
        }
    }
}
showImages();

prevBtn.addEventListener("click", () => {
    if (i > 0) {
        i--;
        showImages();
    }
});

nextBtn.addEventListener("click", () => {
    if (i < imagens.length - 1) {
        i++;
        showImages();
    }
});