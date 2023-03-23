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

//setto la variabile activegame su 0, incrementerà all'eventListener
let activeGame = 0;

//seleziono il container delle img dalla DOM
const imgContainer = document.querySelector('.img_container');

const thumb_container = document.querySelector('.thumbnails_container')

//seleziono i btn prev e next dalla DOM
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');



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
        <div class="game ${index === activeGame ? 'active' : ''}">
            <img src="./assets/${element.image}" alt="game cover">
            <div class="img_text_container">
                <h4 class="game_title">${element.title}</h4>
                <span class="game_caption">${element.text}</span>
            </div>
        </div>
        `
        //lo appendo ad un elemento della dom
        DOMel.innerHTML += markup;
    }) 
}


function createThumbnails(array, DOMel) {
    array.forEach((element, index) => {
        const markup = `
        <img src="./assets/${element.image}" class="img ${index === activeGame ? 'active' : ''}">
        `

        DOMel.innerHTML += markup;
    })
}

createThumbnails(images, thumb_container);

//autoplay ?
/* 
setInterval(changeGame, 3000);
changeGame(nextBtn); */


//assegno un eventListener a ciascuno dei due bottoni
prevBtn.addEventListener('click', function() {
    //al click cambia gioco prendendo il precedente
    changeGame(this);
});

nextBtn.addEventListener('click', function() {
    //al click cambia game prendendo il successivo
    changeGame(this)
})

/**
 * Funzione per cambiare il game con i btn
 * @param {Element} button in base al bottone si skippa al game precedente o successivo
 */
function changeGame(button) {
    const allGames = document.querySelectorAll('.img_container > .game');
    const currentGame = allGames[activeGame];

    currentGame.classList.remove('active');

    if (button.className == 'next') {
        activeGame++;
    } else if (button.className == 'prev') {
        activeGame--;
    }
    //

    if (activeGame > images.length - 1) {
        activeGame =  0;
    } else if (activeGame < 0 ) {
        activeGame = images.length - 1;
    }

    const changedGame = allGames[activeGame];

    changedGame.classList.add('active');
}

