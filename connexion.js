const inscription=document.querySelector('.formulaire1');
const connexion= document.querySelector('.connexion');
const lien= document.querySelector('.mot');
const register= document.querySelector('.inscrit')

        lien.addEventListener('click' ,()=>{
            connexion.style.display='none';
            inscription.style.display='flex';            
            
        })
        console.log(lien)

        register.addEventListener('click' ,()=>{
            alert('Enregistrement réussi');
            connexion.style.display='flex';
            inscription.style.display='none'; 

        })