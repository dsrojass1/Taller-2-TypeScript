import { Serie } from "./serie.js";
import { dataSeries } from "./dataSeries.js";

let seriesTbody: HTMLElement = document.getElementById("seriesTbody")!;

function renderSeriesInTable (series: Serie[]): void{
    series.forEach((serie: Serie) => {
        let tr: HTMLElement = document.createElement("tr");
        tr.innerHTML = `<td class= "bg-light">${serie.id}</td>
                        <td class= "bg-light"><a href=# class="link-underline link-underline-opacity-0" id="serie${serie.id}">${serie.name}</p></td>
                        <td class= "bg-light">${serie.channel}</td>
                        <td class= "bg-light">${serie.seasons}</td>`;
        seriesTbody.appendChild(tr);
        let serieNameP: HTMLElement = document.getElementById("serie" + serie.id)!;
        addFuncionalityToSerieName(serie, serieNameP);
    });
}

function calculateAvarage(series: Serie[]): number {
    let total: number = 0;
    series.forEach((serie: Serie) => {
        total += serie.seasons;
    });
    return total / series.length;
}

function renderAvarage(): void {
    let avarage: number = calculateAvarage(dataSeries);
    let avarageP: HTMLElement = document.getElementById("avarage")!;
    avarageP.innerText = "Season average: " + avarage.toString();
}

function addFuncionalityToSerieName(serieObj: Serie, serieNameP: HTMLElement): void {
    serieNameP.addEventListener("click", () => {
        let serieImage: HTMLElement = document.getElementById("cardImage")!;
        let serieTitle: HTMLElement = document.getElementById("serieTitle")!;
        let serieDescription: HTMLElement = document.getElementById("serieDescription")!;
        let serieLink: HTMLElement = document.getElementById("serieLink")!;
        serieTitle.innerText = serieObj.name;
        serieImage.setAttribute("src", serieObj.image);
        serieImage.setAttribute("alt", serieObj.name);
        serieDescription.innerText = serieObj.description;
        serieLink.setAttribute("href", serieObj.link);
        serieLink.innerText = serieObj.link;

        let card = document.getElementById("card")!;
        card.classList.remove("d-none");
        
    });
}

renderSeriesInTable(dataSeries);
renderAvarage();


