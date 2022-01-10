const cartes = document.querySelectorAll('.carte');

let carteRetournee = false;
let premiereCarte, secondeCarte;
let verouillage = false;

cartes.forEach(carte => {
    carte.addEventListener('click', retounerCarte)
})

function retounerCarte() {

 if(verouillage) return; 
    
 this.childNodes[1].classList.toggle('active');

if(!carteRetournee){

    carteRetournee = true;
    premiereCarte = this;
    return;

}

    carteRetournee =  false;
    secondeCarte = this;

    correspondance();
}

function correspondance (){

if(premiereCarte.getAttribute('data-attr')  === secondeCarte.getAttribute('data-attr')) {

    premiereCarte.removeEventListener('click', retounerCarte);
    secondeCarte.removeEventListener('click', retounerCarte);

}else{
    verouillage=true;
    setTimeout(() => {
        
        premiereCarte.childNodes[1].classList.remove('active')
        secondeCarte.childNodes[1].classList.remove('active')
        verouillage=false;
    },1500)
}

}

function aleatoire() {
    cartes.forEach(card => {
        let randomPos = Math.floor(Math.random()*12);
        card.style.order = randomPos;

    })
}

aleatoire();