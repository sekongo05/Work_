document.addEventListener("DOMContentLoaded", () => {

const search= document.querySelector('.fa-magnifying-glass');
const shop = document.querySelector('.fa-cart-shopping');
const sous = document.querySelector('.sous');
const rech = document.querySelector('#search');
const rate = document.querySelectorAll('.fa-star');
const less = document.getElementById('less');
const more = document.getElementById('more');

rate.forEach(star => {
    star.addEventListener('click', () => {
        star.classList.toggle('active');
    })
});



search.addEventListener('click', () => {
    if (rech.classList.contains('visible')) {
        rech.classList.remove('visible'); // Supprimer la classe pour cacher
        rech.style.visibility = 'hidden'; // Masquer après l'animation
        rech.style.opacity = '0'; // Réinitialiser l'opacité
    } else {
        rech.style.visibility = 'visible'; // Rendre visible
        rech.classList.add('visible'); // Ajouter la classe pour afficher
        rech.style.opacity = '1'; // Rendre visible immédiatement
    }
});



shop.addEventListener('click', () => {
    if (sous.classList.contains('visible')) {
        sous.classList.remove('visible'); // Supprimer la classe pour cacher
        sous.style.visibility = 'hidden'; // Masquer après l'animation
        sous.style.opacity = '0'; // Réinitialiser l'opacité
    } else {
        sous.style.visibility = 'visible'; // Rendre visible
        sous.classList.add('visible'); // Ajouter la classe pour afficher
        sous.style.opacity = '1'; // Rendre visible immédiatement
    }
});



  const btn1 = document.querySelectorAll('.button');
 
    btn1.addEventListener("mousedown", () => {
    btn1.style.transform = "translateY(10px)";
    btn1.style.boxShadow = "inset 0 2px 9px";
  });

    btn1.addEventListener("mouseup", () => {
    btn1.style.transform = "translateY(0)";
    btn1.style.boxShadow = "none";
  });


let count = parseInt(document.getElementsByClassName('qte').textContent); 
const compteur = document.getElementsByClassName('qte');


more.addEventListener('click', () => {
    count++;
    compteur.textContent = 8;
});

less.addEventListener('click', () => {
    if (count > 0) { 
        count--;
        compteur.textContent = 5;
    }
});




})