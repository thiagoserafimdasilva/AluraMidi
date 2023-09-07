function tocaSom (selectorAudio) {
  const elemento = document.querySelector(selectorAudio).play();


    if(elemento && elemento.localName === 'audio') {
       elemento.play();     
   }  
   else { 
        //alert('Elemento não encontrado ou seletor inválido');
        console.log('Elemento ou seletor não encontrado!')
    } 
}

const listadeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listadeTeclas.length; contador++ ) {

    const tecla = listadeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () { 
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {


        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

 

