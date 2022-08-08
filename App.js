// operación suma

let boton = document.getElementById("Btnsumar"); 

boton.addEventListener("click", sumarnumeros);

function sumarnumeros(){

    let varnumero1;
    let varnumero2;
    let varresultado;

    varnumero1 = Number(document.getElementById("numero1").value);
    varnumero2 = Number(document.getElementById("numero2").value);

    varresultado = varnumero1 + varnumero2;

    let imprimir = document.getElementById("imprimirresultadosuma");

    imprimir.innerText = varresultado;

}
// resta

let boton2 = document.getElementById("Btnrestar"); 

boton2.addEventListener("click", restarnumeros);

function restarnumeros(){

    let varnumero1;
    let varnumero2;
    let varresultado;

    varnumero1 = Number(document.getElementById("numero3").value);
    varnumero2 = Number(document.getElementById("numero4").value);

    varresultado = varnumero1 - varnumero2;

    let imprimir = document.getElementById("imprimirresultadoresta");

    imprimir.innerText = varresultado;

}
// operación multiplicación

let boton3 = document.getElementById("Btnmultiplicar"); 

boton3.addEventListener("click", multnumeros);

function multnumeros(){

    let varnumero1;
    let varnumero2;
    let varresultado;

    varnumero1 = Number(document.getElementById("numero5").value);
    varnumero2 = Number(document.getElementById("numero6").value);

    varresultado = varnumero1 * varnumero2;

    let imprimir = document.getElementById("imprimirresultadomultiplicar");

    imprimir.innerText = varresultado;

}
// operación división

let boton4 = document.getElementById("Btndividir"); 

boton4.addEventListener("click", divnumeros);

function divnumeros(){

    let varnumero1;
    let varnumero2;
    let varresultado;

    varnumero1 = Number(document.getElementById("numero7").value);
    varnumero2 = Number(document.getElementById("numero8").value);

    varresultado = varnumero1 / varnumero2;

    let imprimir = document.getElementById("imprimirresultadodivision");

    imprimir.innerText = varresultado;

}




// verificar calificación 
const boton6 = document.getElementById("Btnverificar").addEventListener("click", verificarcalificación);

function verificarcalificación(){
    let varnumero1 = Number(document.getElementById("numero11").value);
    let printresult = document.getElementById("imprimirresultadoverificar");

    if(varnumero1 >= 8 ){
        printresult.innerText = "Aprobada"; 
    }else{
        printresult.innerText = "Reprobado";
    const audio =document.getElementById("audioreprobado");
audio.play();    
    }
}

// Numeros acsendentes 

const botonascendente = document.getElementById("Botonnumeros").addEventListener("click", serienumeros);

function serienumeros(){

    const imprimirnumeros = document.getElementById("imprimirresultadonúmeros");


    for(let x=0; x<=100; x=x+1){

        const lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item mt-1");
        lista.innerText = `${x}`;
        imprimirnumeros.appendChild(lista);
    }
}