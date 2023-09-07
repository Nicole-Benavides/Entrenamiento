// llamar elemento para arrastrar
let circulo = document.getElementById('circulo');

// llamar contenedor en el se permitira soltar 
let contenedor = document.getElementById('contenedor2');


//Indicar que el elemento arrastrable va a iniciar el evento dragstart, es decir se va a arrastrar 
circulo.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});


// quitarle al contenedor su configuracion por defecto 
contenedor.addEventListener('dragover', (e) => {
    e.preventDefault();
});


// inidicar que el contenedor va a recibir un elemento, por lo tanto hay que quitarle su configuracion por defecto 
contenedor.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    const elementoArrastrado = document.getElementById(data);

    if (elementoArrastrado) {
        contenedor.appendChild(elementoArrastrado);
    }
});


