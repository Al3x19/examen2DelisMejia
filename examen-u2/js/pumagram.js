//like y no-like

const like = document.querySelector('.like-btn');
const noLike = document.querySelector('.like-count')

let contador = 0;

const comen = document.querySelector('.comment-input');
comen.value="";
const comentario = document.querySelector('.comment');



like.addEventListener('click', e =>{
    contador++;
    noLike.textContent = contador;
    like.textContent = 'No me gusta'
})

noLike.addEventListener('click', () =>{

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
})

// document.addEventListener('DOMContentLoaded', ()=>{
//         const comentariosGuardados = JSON.parse(localStorage.getItem('comentario'));
//         if(comentariosGuardados){
//             comen = comentariosGuardados;
            
//         }
//     })