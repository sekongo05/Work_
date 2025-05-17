document.addEventListener("DOMContentLoaded", () => {

const search= document.querySelector('.fa-magnifying-glass');
const shop = document.querySelector('.fa-cart-shopping');
const sous = document.querySelector('.sous');
const rech = document.querySelector('#search');
const rate = document.querySelectorAll('.fa-star');


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



 /*  ajout d'element dans le panier */
const sousContent = document.querySelector(".sous-content");


const addArticle =document.querySelectorAll('.bouton');
addArticle.forEach(bouton => {
    bouton.addEventListener('click', event => {
        const contain = event.target.closest('.contain');
        addToCart(contain);
       
    });

    
});

const addToCart = (contain) => {
    const articleDescription = contain.querySelector(".description").textContent;
    const articleImage = contain.querySelector("img").src;
    const articlePrix = contain.querySelector(".prixA").textContent;
  
    const sousArticle = document.createElement("div");
    /* const repeat = sousContent.querySelectorAll(".article-title");
                   for( let article of repeat){
                     if(article.textContent === articleDescription){
                        alert("Le produit a déjà été utilisé");
                        return;
                     }

                   }
                        console.log(repeat);
 */
    sousArticle.classList.add("article");

    sousArticle.innerHTML = `<div class="article-image">
                                <img src="${articleImage}" alt=""  class="plat">
                            </div>
                            <div class="article-description">    
                                <div class="article-contain">
                                    <p>
                                        <span class="article-title"> ${articleDescription} </span>  <br/>
                                        <span class="article-prix"> ${articlePrix} </span>
                                    </p>
                                    <div class="article-qte">
                                        <div id="less"> - </div>
                                        <div class="qte" >1</div>
                                        <div id="more"> + </div>
                                    </div>
                                </div>
                            </div>
                            <div class="article-remove">
                                <i class="fa-solid fa-trash-can"></i>
                            </div>` ;
                            
                            
                            sousContent.appendChild(sousArticle);
                            /*  Supprimer des éléments dans le panier  */

                            
                            sousArticle.querySelector(".article-qte").addEventListener("click", event => {
                                const less = sousArticle.querySelector("#less");
                                const more = sousArticle.querySelector("#more");
                                const number = sousArticle.querySelector('.qte');
                                let quantity = number.textContent;
                                
                                if(event.target.id === "less" && quantity > 1){
                                    
                                quantity--;
                                if(quantity === 1){
                                    less.style.color ="#999";
                                }
                                }else if(event.target.id === "more"){
                                quantity++;
                                more.style.color = "#333";
                                }
                            number.textContent = quantity;
                            });
                            
                            sousArticle.querySelector('.fa-trash-can').addEventListener('click', () =>{
                            sousArticle.remove();


                        }); 

    };
});