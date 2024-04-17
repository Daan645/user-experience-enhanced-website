// general
// laad alle data van items in
// voegt een eventlistener toe aan het document en wacht tot alle elementen etc zijn ingeladen
// const itemsData = JSON.parse(document.getElementById('itemsData').value);
// document.addEventListener('DOMContentLoaded', function() {
//     // pakt de data uit het inputveld van html en zet deze om in een js object onder de variabele itemsData
//     var itemsData = JSON.parse(document.getElementById('itemsData').value);
// nav

const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";

    }
});


// Detail pagina
// Detail inklap/uitklap functie
const detailsButton = document.querySelector('.details-button');
const details = document.querySelector('.details');
let detailsCheck = false;

// Voeg de eventlistener toe aan de detailsknop
detailsButton.addEventListener('click', function() {
    if (detailsCheck === false) {
        detailsActive();
    } else {
        detailsNonActive();
    }
});

// Functie voor het tonen van details
function detailsActive() {
    detailsCheck = true;
    details.classList.add('details-active');
    detailsButton.style.borderBottomLeftRadius = '0';
    detailsButton.style.borderBottomRightRadius = '0';
}



