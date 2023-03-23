/* Consegna:
Dato un array di oggetti letterali con:
url dell’immagine
titolo
descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay. */


//array di oggetti letterali
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
/* 
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo. */
//
let activeFilm = 0;

//seleziono il container delle img dalla DOM
const imgContainer = document.querySelector('.img_container');

//seleziono i btn prev e next dalla DOM
const prevBtn = document.querySelector('.prev');
console.log(prevBtn)
const nextBtn = document.querySelector('.next');
console.log(nextBtn);

//invoco la funzione per creare il carousel
createCarousel(images, imgContainer);



//attraverso una funzione popolo dinamicamente il carosello
/**
 * funzione per ciclare nell'array e stampare il carosello in pagina
 * @param {array} array array di oggetti
 * @param {element} DOMel elemento della DOM a cui appendere il markup
 */
function createCarousel(array, DOMel) {
    //ciclo dentro l'array di oggetti e per ognuno
    array.forEach((element, index) => {
        //creo un markup
        const markup = `
        <div class="film ${index === activeFilm ? 'active' : ''}">
            <img src="./assets/${element.image}" alt="film">
            <div class="img_text_container">
                <h4 class="film_title">${element.title}</h4>
                <span class="film_caption">${element.text}</span>
            </div>
        </div>
        `
        //lo appendo ad un elemento della dom
        DOMel.innerHTML += markup;
    }) 
}

/* prevBtn.addEventListener('click', function () {

}) */

function prevFilm() {
    const allFilms = document.querySelectorAll('.img_container > .film');
    const currentFilm = allFilms[activeFilm];
    console.log(currentFilm);

    currentFilm.classList.remove('active');

    activeFilm--;

    if (activeFilm < 0) {
        activeFilm = images.length - 1;
    }

    const prevFilm = allFilms[activeFilm];
    console.log(prevFilm)
    prevFilm.classList.add('active');
}


prevBtn.addEventListener('click', prevFilm());

function nextFilm() {
    const allFilms = document.querySelectorAll('.img_container > .film');
    const currentFilm = allFilms[activeFilm];
    console.log(currentFilm);

    currentFilm.classList.remove('active');

    activeFilm++;

    if (activeFilm > images.length - 1) {
        activeFilm =  0;
    }

    const nextFilm = allFilms[activeFilm];
    console.log(nextFilm);

    nextFilm.classList.add('active');
}

nextBtn.addEventListener('click', function() {
    const allFilms = document.querySelectorAll('.img_container > .film');
    const currentFilm = allFilms[activeFilm];
    console.log(currentFilm);

    currentFilm.classList.remove('active');

    activeFilm++;

    if (activeFilm > images.length - 1) {
        activeFilm =  0;
    }

    const nextFilm = allFilms[activeFilm];
    console.log(nextFilm);

    nextFilm.classList.add('active');
})
