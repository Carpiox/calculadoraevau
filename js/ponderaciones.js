let boton = document.getElementById("boton");
let ponderaciones = document.getElementById("ponderaciones");

let diccionario={
    andalucia:[
        {nombre: "Universidad de Almería (UAL)", pdf:"https://calculadoraevau.netlify.app/Ponderaciones/Andalucia/Andalucia.pdf"},
        {nombre: "Universidad de Granada (UGR)", pdf:"https://calculadoraevau.netlify.app/Ponderaciones/Andalucia/Andalucia.pdf"},
        {nombre: "Universidad de Málaga (UMA)", pdf:"https://calculadoraevau.netlify.app/Ponderaciones/Andalucia/Andalucia.pdf"},
        {nombre: "Universidad Internacional de Andalucía (UNIA)", pdf:"https://calculadoraevau.netlify.app/Ponderaciones/Andalucia/Andalucia.pdf"},
        {nombre: "Universidad de Sevilla (US)", pdf:"https://calculadoraevau.netlify.app/Ponderaciones/Andalucia/Andalucia.pdf"},
        {nombre: "Universidad Pablo de Olavide (UPO)", pdf:"https://calculadoraevau.netlify.app/Ponderaciones/Andalucia/Andalucia.pdf"},
        {nombre: "Universidad Internac. Menéndez Pelayo (UIMP)", pdf:"https://calculadoraevau.netlify.app/Ponderaciones/Andalucia/Andalucia.pdf"},
        {nombre: "Universidad de Cádiz (UCA)", pdf:"https://calculadoraevau.netlify.app/Ponderaciones/Andalucia/Andalucia.pdf"},
        {nombre: "Universidad de Córdoba (UCO)", pdf:"https://calculadoraevau.netlify.app/Ponderaciones/Andalucia/Andalucia.pdf"},
        {nombre: "Universidad de Jaén (UJAEN)", pdf:"https://calculadoraevau.netlify.app/Ponderaciones/Andalucia/Andalucia.pdf"},
        {nombre: "Universidad de Huelva (UHU)", pdf:"https://calculadoraevau.netlify.app/Ponderaciones/Andalucia/Andalucia.pdf"},
    ],
    
    aragon:[
        {nombre: "Universidad de Zaragoza (UNIZAR)", pdf:"https://calculadoraevau.netlify.app/Ponderaciones/Aragon/Aragon.pdf"},
        {aragon: "Universidad Internacional. Menéndez Pelayo (UIMP)", pdf:"https://calculadoraevau.netlify.app/Ponderaciones/Aragon/Aragon.pdf"}
    ],
    
    asturias:[
        {nombre: "Universidad de Oviedo (UNIOVI)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Asturias/Asturias.pdf"},
    ],

    cantabria:[
        {nombre: "Universidad de Cantabria (UNICAN)", pdf: "https://calculadoraevau.netlify.appPonderaciones/Cantabria/Cantabria.pdf"},
        {nombre: "Universidad Internac. Menéndez Pelayo (UIMP)", pdf: "https://calculadoraevau.netlify.appPonderaciones/Cantabria/Cantabria.pdf"},
        {nombre: "Universidad Europea del Atlántico", pdf: "https://calculadoraevau.netlify.appPonderaciones/Cantabria/Cantabria.pdf"}

    ],

    castilla_la_mancha:[
        {nombre: "Universidad de Castilla la Mancha (UCLM)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Castilla_la_macha/Castilla_la_manta.pdf"},
        {nombre: "Universidad Internac. Menéndez Pelayo (UIMP)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Castilla_la_macha/Castilla_la_manta.pdf"},
        
    ],

    castilla_y_leon:[
        {nombre: "Universidad de Burgos (UBU)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Castilla_y_leon/UBU_-_Universidad_de_Burgos.pdf"},
        {nombre: "Universidad de León (ULE)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Castilla_y_leon/ULE_-_Universidad_de_León.pdf"},
        {nombre: "Universidad de Salamanca (USAL)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Castilla_y_leon/USAL_-_Universidad_de_Salamanca.pdf"},
        {nombre: "Universidad de Valladolid (UVA)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Castilla_y_leon/UVA_-_Universidad_de_Valladolid.pdf"},
        
    ],

    catalunya:[
        {nombre: "Universitat Autónoma de Barcelona (UAB)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Catalunya/Catalunya.pdf"},
        {nombre: "Universitat de Barcelona (UB)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Catalunya/Catalunya.pdf"},
        {nombre: "Universitat Politécnica de Catalunya (UPC)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Catalunya/Catalunya.pdf"},
        {nombre: "Universitat Pompeu Fabra (UPF)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Catalunya/Catalunya.pdf"},
        {nombre: "Universidad Internac. Menéndez Pelayo (UIMP)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Catalunya/Catalunya.pdf"},
        {nombre: "Universitat de Lleida (UDL)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Catalunya/Catalunya.pdf"},
        {nombre: "Universitat de Girona (UDG)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Catalunya/Catalunya.pdf"},
        {nombre: "Universitat Rovira i Virgilu (URV)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Catalunya/Catalunya.pdf"}
    ],

    comunidad_valenciana:[
        {nombre: "Universidad de Alicante (UA)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Comunidad_Valenciana/Comunidad_Valenciana.pdf"},
        {nombre: "Universidad Miguel Hernández de Elche (UMH)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Comunidad_Valenciana/Comunidad_Valenciana.pdf"},
        {nombre: "Universitat Jaume I (UJI)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Comunidad_Valenciana/Comunidad_Valenciana.pdf"},
        {nombre: "Universitat Politécnica de Valencia (UPV)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Comunidad_Valenciana/Comunidad_Valenciana.pdf"},
        {nombre: "Universitat de Valencia (UV)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Comunidad_Valenciana/Comunidad_Valenciana.pdf"},
        {nombre: "Universidad Internac. Menéndez Pelayo (UIMP)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Comunidad_Valenciana/Comunidad_Valenciana.pdf"},
    ],

    extremadura:[
        {nombre: "Universidad de Extremadura (UNEX)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Extremadura/Extremadura.pdf"},
        
    ],

    galicia:[
        {nombre: "Universidade da Coruña (UDC)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Galicia/Galicia.pdf"},
        {nombre: "Univ. de Santiago de Compostela (USC)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Galicia/Galicia.pdf"},
        {nombre: "Universidad Internac. Menéndez Pelayo (UIMP)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Galicia/Galicia.pdf"},
        {nombre: "Universidade de Vigo (UVIGO)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Galicia/Galicia.pdf"},
    ],

    islas_baleares:[
        {nombre: "Universidad de las Islas Baleares (UIB)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Islas_Baleares/Islas_Baleares.pdf"},
        {nombre: "Escola Superior de Disseny de les Illes Balears", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Islas_Baleares/Islas_Baleares.pdf"},
    ],

    islas_canarias:[
        {nombre: "Universidad de la Laguna (ULL)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Islas_Canarias/Islas_Canarias.pdf"},
        {nombre: "Universidad Internac. Menéndez Pelayo (UIMP)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Islas_Canarias/Islas_Canarias.pdf"},
        {nombre: "Univ. de las Palmas de Gran Canaria (ULPGC)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Islas_Canarias/Islas_Canarias.pdf"},
    ],

    la_rioja:[
        {nombre: "Universidad de La Rioja (UNIRIOJA)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/La_Rioja/La_Rioja.pdf"},
    ],

    madrid:[
        {nombre: "Universidad de Alcalá (UAH)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Madrid/UAH_-_Universidad_de_Alcalá.pdf"},
        {nombre: "Universidad Autónoma de Madrid (UAM)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Ponderaciones/Madrid/UAM_-_Universidad_Autónoma_de _Madrid.pdf"},
        {nombre: "Universidad Carlos III de Madrid (UC3M)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Madrid/UC3M_-_Universidad_Carlos_III_de_Madrid.pdf"},
        {nombre: "Universidad Complutense de Madrid (UCM)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Madrid/UCM_-_Universidad_Complutense_de_Madrid.pdf"},
        {nombre: "Universidad Politécnica de Madrid(UPM)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Madrid/UPM_-_Universidad_Politécnica_de_Madrid.pdf"},
        {nombre: "Universidad Rey Juan Carlos (URJC)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Madrid/URJC_-_Universidad_Rey_Juan_Carlos.pdf"},
    ],

    murcia:[
        {nombre: "Universidad de Murcia (UM)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Murcia/UM_-_Universidad_de_Murcia.pdf"},
        {nombre: "Universidad Politécnica de Cartagena (UPCT)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Murcia/UPCT_-_Universidad_Polit%C3%A9cnica_de_Cartagena2025.pdf"},
        
    ],

    navarra:[
        {nombre: "Universidad Pública de Navarra (UNAVARRA)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Navarra/Navarra.pdf"},
        
    ],

    pais_vasco:[
        {nombre: "Universidad del País Vasco", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Pais_Vasco/pais_vasco.pdf"},
        
    ]};
//logaritmos

boton.addEventListener("click",()=>{

    let comunidades = document.getElementById("comunidades").value;

    //Lista de universidad de la comunidad seleccionada
    lista = diccionario[comunidades];
    ponderaciones.innerHTML = "";

    lista.forEach(elemento => {
        console.log(elemento.nombre)
        ponderaciones.innerHTML+=(`
            Universidad: ${elemento.nombre} 
            PDF: ${elemento.pdf}
            `);
    });

    console.log(diccionario[comunidades]);

    

    console.log(comunidades);
})

//Enlace a mostrar: https://calculadoraevau.netlify.app/ponderaciones/Andaluc%C3%ADa/UAH_-_Universidad_de_Alcal%C3%A1.pdf








