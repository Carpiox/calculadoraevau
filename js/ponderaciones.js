let boton = document.getElementById("boton");
let diccionario={
    aragon:[
        {nombre: "Universidad de Zaragoza (UNIZAR)"},
        {aragon: "Universidad Internacional. Menéndez Pelayo (UIMP)"}
    ],

    asturias:[
        {nombre: "Universidad de Oviedo (UNIOVI)", pdf: "https://calculadoraevau.netlify.app/Ponderaciones/Asturias/Asturias.pdf"},
    ],

    cantabria:[
        {nombre: "Universidad de Cantabria (UNICAN)", pdf: ""},
        {nombre: "Universidad Internac. Menéndez Pelayo (UIMP)", pdf: ""},
        {nombre: "Universidad Europea del Atlántico", pdf: ""}

    ],

    castilla_la_macha:[
        {nombre: "Universidad de Castilla la Mancha (UCLM)", pdf: ""},
        {nombre: "Universidad Internac. Menéndez Pelayo (UIMP)", pdf: ""},
        
    ],

    castilla_y_leon:[
        {nombre: "Universidad de Burgos (UBU)", pdf: ""},
        {nombre: "Universidad de León (ULE)", pdf: ""},
        {nombre: "Universidad de Salamanca (USAL)", pdf: ""},
        {nombre: "Universidad de Valladolid (UVA)", pdf: ""},
        
    ],

    barcelona:[
        {nombre: "Universitat Autónoma de Barcelona (UAB)", pdf: ""},
        {nombre: "Universitat de Barcelona (UB)", pdf: ""},
        {nombre: "Universitat Politécnica de Catalunya (UPC)", pdf: ""},
        {nombre: "Universitat Pompeu Fabra (UPF)", pdf: ""},
        {nombre: "Universidad Internac. Menéndez Pelayo (UIMP)", pdf: ""},
        {nombre: "Universitat de Lleida (UDL)", pdf: ""},
        {nombre: "Universitat de Girona (UDG)", pdf: ""},
        {nombre: "Universitat Rovira i Virgilu (URV)", pdf: ""}
    ],

    comunidad_valenciana:[
        {nombre: "Universidad de Alicante (UA)", pdf: ""},
        {nombre: "Universidad Miguel Hernández de Elche (UMH)", pdf: ""},
        {nombre: "Universitat Jaume I (UJI)", pdf: ""},
        {nombre: "Universitat Politécnica de Valencia (UPV)", pdf: ""},
        {nombre: "Universitat de Valencia (UV)", pdf: ""},
        {nombre: "Universidad Internac. Menéndez Pelayo (UIMP)", pdf: ""},
    ],

    extremadura:[
        {nombre: "Universidad de Extremadura (UNEX)", pdf: ""},
        
    ],

    galicia:[
        {nombre: "Universidade da Coruña (UDC)", pdf: ""},
        {nombre: "Univ. de Santiago de Compostela (USC)", pdf: ""},
        {nombre: "Universidad Internac. Menéndez Pelayo (UIMP)", pdf: ""},
        {nombre: "Universidade de Vigo (UVIGO)", pdf: ""},
    ],

    islas_baleares:[
        {nombre: "Universidad de las Islas Baleares (UIB)", pdf: ""},
        {nombre: "Escola Superior de Disseny de les Illes Balears", pdf: ""},
    ],

    islas_canarias:[
        {nombre: "Universidad de la Laguna (ULL)", pdf: ""},
        {nombre: "Universidad Internac. Menéndez Pelayo (UIMP)", pdf: ""},
        {nombre: "Univ. de las Palmas de Gran Canaria (ULPGC)", pdf: ""},
    ],

    la_rioja:[
        {nombre: "Universidad de La Rioja (UNIRIOJA)", pdf: ""},
    ],

    madrid:[
        {nombre: "Universidad de Alcalá (UAH)", pdf: ""},
        {nombre: "Universidad Autónoma de Madrid (UAM)", pdf: ""},
        {nombre: "Universidad Carlos III de Madrid (UC3M)", pdf: ""},
        {nombre: "Universidad Complutense de Madrid (UCM)", pdf: ""},
        {nombre: "Universidad Politécnica de Madrid(UPM)", pdf: ""},
        {nombre: "Universidad Rey Juan Carlos (URJC)", pdf: ""},
    ],

    murcia:[
        {nombre: "Universidad de Murcia (UM)", pdf: ""},
        {nombre: "Universidad Politécnica de Cartagena (UPCT)", pdf: ""},
        
    ],

    navarra:[
        {nombre: "Universidad Pública de Navarra (UNAVARRA)", pdf: ""},
        
    ],

    pais_vasco:[
        {nombre: "Universidad del País Vasco", pdf: ""},
        
    ]};
//logaritmos

boton.addEventListener("click",()=>{

    let comunidades = document.getElementById("comunidades").value;



    

    console.log(comunidades);
})

//Enlace a mostrar: https://calculadoraevau.netlify.app/ponderaciones/Andaluc%C3%ADa/UAH_-_Universidad_de_Alcal%C3%A1.pdf








