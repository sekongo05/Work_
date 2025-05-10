const search= document.querySelector('.fa-magnifying-glass');
const shop = document.querySelector('.fa-cart-shopping');
const sous = document.querySelector('.sous');
const rech = document.querySelector('#search');



search.addEventListener('click', ()=> {
    if(rech.style.visibility === 'hidden'){
        rech.style.visibility = 'visible'
    }else{
        rech.style.visibility = 'hidden'
    }
})



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
})
