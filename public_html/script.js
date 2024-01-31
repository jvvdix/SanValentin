/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function showMessage(response) {
    if (response === "No") {
        const noButton = document.getElementById("no-button");
        const container = document.querySelector(".container");
        const maxWidth = window.innerWidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;

        // poner el boton en posicion absoluta
        noButton.style.position = "absolute";

        // cambiar imagen

        document.getElementsByClassName("image")[0].src = "jeje.jpg";

        // GGenerar coordenadas aleatorias para el boton 
        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

        // Aplicar coordenadas al boton para que se mueva
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";

        // Actualizar texto
        document.getElementById("question").textContent =
                "Lo siento, el botón de no sólo está de adorno xd ";
        document.getElementById("name").style.display = "none";


    }

    if (response === "Sí") {
        // Quitar el mensaje y el boton de 'no'
        document.getElementById("name").remove();
        document.getElementById("no-button").remove();

        // Enseñar mensaje e imagen
        const yesMessage = document.getElementById("question");
        yesMessage.textContent = "¡Genial! ¡Nos vemos el 14! 😘😘";
        yesMessage.style.display = "block";
        yesMessage.style.fontStyle = "normal";
        document.getElementsByClassName("image")[0].src = "heart.gif";

        // Quitar botón de sí
        document.getElementById("yesButton").remove();
    }
}