window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
    document.querySelector('.go-top-container').classList.add('show');
    }else{
            document.querySelector('.go-top-container').classList.remove('show');
    }
}


document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Boton Comienza Ahora

document.querySelector('#comienzaahora').addEventListener('click', () => {
    window.scrollTo({
        top: 630,
        behavior: 'smooth'
    });
});

// Boton Inscribirme

document.querySelector('#inscribirme').addEventListener('click', () => {
    window.scrollTo({
        top: 800,
        behavior: 'smooth'
    });
});