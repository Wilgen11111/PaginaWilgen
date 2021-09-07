
window.onload = function() {
    let loading = document.querySelector('.loading')
    loading.setAttribute('class', 'dnone')
    window.scroll(0,0) 
};

const side = document.getElementById('side')
const btnMenu = document.getElementById('btnMenu')
const iconoMenu = document.getElementById('iconoMenu')
const links = document.getElementById('links')
const nombre = document.getElementById('nombre')
const descripcion = document.getElementById('descripcion')
const enviarComentario = document.getElementById('enviarComentario')
const  modal = document.getElementById('modal')
const cerrarModal = document.getElementById('cerrarModal')
const tituloModal = document.getElementById('tituloModal')
const parrafoModal = document.getElementById('parrafoModal')

links.addEventListener('click', () =>{
    side.classList.add('menu-colapsed')
    iconoMenu.classList.toggle('fa-bars')
    iconoMenu.classList.toggle('fa-times')
})

btnMenu.addEventListener('click', () => {
    side.classList.toggle('menu-colapsed')
    iconoMenu.classList.toggle('fa-bars')
    iconoMenu.classList.toggle('fa-times')
})

enviarComentario.addEventListener('click', async ()=>{
    if(!nombre.value || !descripcion.value){
        modal.setAttribute('class', 'modal-container')
        tituloModal.innerHTML=`Error!! 😣`
        parrafoModal.innerHTML=`Todos los campos son Obligatorios`
        return
    }else{
        tituloModal.innerHTML=`Gracias por tu comentario!!! 😁`
        parrafoModal.innerHTML=``
    }
    const db = firebase.firestore();
    enviarComentario.innerHTML=`<i class="fas fa-sync"></i>`
    
    try {
        await db.collection('mensajes').doc(nombre.value).set({
            nombre: nombre.value,
            descripcion: descripcion.value
        })
        modal.setAttribute('class', 'modal-container')
    } catch (error) {
        modal.setAttribute('class', 'modal-container')
        tituloModal.innerHTML=`Error Inesperado!! 😣`
        parrafoModal.innerHTML=`No se pudo guardar tu comentario, intentalo mas tarde`
    }
    enviarComentario.innerHTML=`Enviar`
})

cerrarModal.addEventListener('click', ()=>{
    let modal = document.getElementById('modal')
    modal.setAttribute('class', 'modal-container none')
})




    