

    let boton = document.getElementById("boton");
    
//logaritmos

boton.addEventListener("click",()=>{
    let ponderaciones = document.getElementById("ponderaciones");

    let comunidades = document.getElementById("comunidades").value;

    switch(comunidades){

        case "andalucia": 
        ponderaciones.innerHTML+=("UAL - Universidad de Almería , UCA - Universidad de Cádiz, UCO - Universidad de Córdoba, UGR - Universidad de Granada, UHU - Universidad de Huelva, UJAEN - Universidad de Jaén, UMA - Universidad de Málaga, US - Universidad de Sevilla, UPO - Universidad Pablo de Olavide");
        break;


    }

    console.log(comunidades);
})

//Enlace a mostrar: https://calculadoraevau.netlify.app/ponderaciones/Andaluc%C3%ADa/UAH_-_Universidad_de_Alcal%C3%A1.pdf








