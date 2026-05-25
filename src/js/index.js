const data = new Date();
const infoData = document.getElementById("data-hora");
infoData.textContent += `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}`;
