window.addEventListener('load', function() {

    let titulo = document.querySelector('#titulo');
    let saludo = document.querySelector('#saludo');
    let span = document.querySelector('span');
    titulo.addEventListener('mouseover', function(){
        let nombre = prompt("¿Como te llamas?")
        if (nombre.length == 0){
            saludo.innerText = "Bienvenid@"
        }
        else{
            saludo.innerText = "Bienvenid@" + nombre
        }
        saludo.style.textTransform = "uppercase";
        span.style.display = "inline";
        titulo.style.display = "none";
    })
    let bienvenida = document.querySelector('.bienvenida');
    let personajes = document.querySelector('.personajes');
    span.addEventListener('click', function(){
        if (bienvenida){
            bienvenida.style.display = "none";
        }
        if (personajes){
            personajes.style.display = "flex";
        }
    })
    let bart = document.querySelector("#bart");
    let lisa = document.querySelector("#lisa");
    let homero = document.querySelector("#homero");
    let marge = document.querySelector("#marge");
    let maggie = document.querySelector("#maggie");
    let milhouse = document.querySelector("#milhouse");
    let burns = document.querySelector("#burns");
    let bob = document.querySelector("#bobPatinio");
    let flanders = document.querySelector("#flanders");
    let duffman = document.querySelector("#duffman");
    let gorgory = document.querySelector("#gorgory");
    let nelson = document.querySelector("#nelson");
    
    bart.addEventListener("click", function() {
        bart.style.backgroundColor = "yellow";
    });


    lisa.addEventListener("dblclick", function() {
        lisa.style.backgroundColor = "yellow";
    });


    homero.addEventListener("click", function() {
        homero.style.backgroundColor = "yellow";
    });


    marge.addEventListener("mouseover", function() {
        marge.style.backgroundColor = "yellow";
    });


    maggie.addEventListener("mouseout", function() {
        maggie.style.backgroundColor = "yellow";
    });


    milhouse.addEventListener("click", function() {
        milhouse.style.backgroundColor = "yellow";
    });


    burns.addEventListener("mouseover", function() {
        burns.style.backgroundColor = "yellow";
    });


    bob.addEventListener("dblclick", function() {
        bob.style.backgroundColor = "yellow";
    });


    flanders.addEventListener("mouseover", function() {
        flanders.style.backgroundColor = "yellow";
    });


    duffman.addEventListener("dblclick", function() {
        duffman.style.backgroundColor = "yellow";
    });


    gorgory.addEventListener("mouseover", function() {
        gorgory.style.backgroundColor = "yellow";
    });


    nelson.addEventListener("click", function() {
        nelson.style.backgroundColor = "yellow";
    });
})