import { dataSeries } from "./dataSeries.js";
var seriesTbody = document.getElementById("seriesTbody");
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var tr = document.createElement("tr");
        tr.innerHTML = "<td class= \"bg-light\">".concat(serie.id, "</td>\n                        <td class= \"bg-light\"><a href=# class=\"link-underline link-underline-opacity-0\" id=\"serie").concat(serie.id, "\">").concat(serie.name, "</p></td>\n                        <td class= \"bg-light\">").concat(serie.channel, "</td>\n                        <td class= \"bg-light\">").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(tr);
        var serieNameP = document.getElementById("serie" + serie.id);
        addFuncionalityToSerieName(serie, serieNameP);
    });
}
function calculateAvarage(series) {
    var total = 0;
    series.forEach(function (serie) {
        total += serie.seasons;
    });
    return total / series.length;
}
function renderAvarage() {
    var avarage = calculateAvarage(dataSeries);
    var avarageP = document.getElementById("avarage");
    avarageP.innerText = "Season average: " + avarage.toString();
}
function addFuncionalityToSerieName(serieObj, serieNameP) {
    serieNameP.addEventListener("click", function () {
        var serieImage = document.getElementById("cardImage");
        var serieTitle = document.getElementById("serieTitle");
        var serieDescription = document.getElementById("serieDescription");
        var serieLink = document.getElementById("serieLink");
        serieTitle.innerText = serieObj.name;
        serieImage.setAttribute("src", serieObj.image);
        serieImage.setAttribute("alt", serieObj.name);
        serieDescription.innerText = serieObj.description;
        serieLink.setAttribute("href", serieObj.link);
        serieLink.innerText = serieObj.link;
        var card = document.getElementById("card");
        card.classList.remove("d-none");
    });
}
renderSeriesInTable(dataSeries);
renderAvarage();
