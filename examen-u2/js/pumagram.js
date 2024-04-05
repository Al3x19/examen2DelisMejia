//like y no-like

const like = document.querySelector('.like-btn');
let noLike = document.querySelector('.no-like')

const comen = document.querySelector('.comment-input');
comen.value="";
const comentario = document.querySelector('.comment');



like.addEventListener('click', mostrarOcultarFooter =>{
    noLike.classList.toggle('no-like')
    this.textContent='No me gusta'
    
    like.innerHTML = like.innerHTML=`No me gusta`
})


// agregar comentario 

addEventListener('click', e =>{
    if (e.target.id==="btn-agregar") {
        if (comen.value.trim()=='') {
            alert('Comentario no valido')
        }else{
            comentario.innerHTML = comentario.innerHTML+`${comen.value} <br>`
        }
        comen.value='';
        
    }
    localStorage.setItem('comentario', JSON.stringify(comen));
})

// document.addEventListener('DOMContentLoaded', ()=>{
//         const comentariosGuardados = JSON.parse(localStorage.getItem('comentario'));
//         if(comentariosGuardados){
//             comen = comentariosGuardados;
            
//         }
//     })