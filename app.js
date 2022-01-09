const cartes = document.querySelectorAll('.carte');

let carteRetournee = false;
let premiereCarte, secondeCarte;
let verouillage = false;

cartes.forEach(carte => {
    carte.addEventListener('click', retounerCarte)
})

function retounerCarte() {
 this.childNodes[1].classList.toggle('active');
}