const listaUsuario = []
const todasLasPoblaciones = [
    "Agullana", "Aiguaviva", "Albanyà", "Albons", "Alp", "Amer", "Anglès", "Arbúcies", "Argelaguer", "Armentera",
    "Avinyonet de Puigventós", "Banyoles", "Bàscara", "Begur", "Bellcaire d'Empordà", "Besalú", "Bescanó", "Beuda",
    "Biure", "Blanes", "Boadella i les Escaules", "Bolvir", "Bordils", "Borrassà", "Breda", "Brunyola i Sant Martí Sapresa",
    "Cabanelles", "Cabanes", "Cadaqués", "Caldes de Malavella", "Calonge i Sant Antoni", "Camós", "Campdevànol", "Campelles",
    "Campllong", "Camprodon", "Canet d'Adri", "Cantallops", "Capmany", "Cassà de la Selva", "Castellfollit de la Roca",
    "Castelló d'Empúries", "Castell-Platja d'Aro", "Cellera de Ter, La", "Celrà", "Cervià de Ter", "Cistella", "Colera",
    "Colomers", "Corçà", "Cornellà del Terri", "Crespià", "Cruïlles, Monells i Sant Sadurní de l'Heura", "Darnius", "Das",
    "El Far d'Empordà", "Escala, L'", "Espinelves", "Espolla", "Esponellà", "Figueres", "Flaçà", "Foixà", "Fontanals de Cerdanya",
    "Fontanilles", "Fontcoberta", "Forallac", "Fornells de la Selva", "Fortià", "Garrigàs", "Garrigoles", "Garriguella", "Ger",
    "Girona", "Gombrèn", "Gualta", "Guils de Cerdanya", "Hostalric", "Isòvol", "Juià", "La Pera", "La Jonquera", "La Bisbal d'Empordà",
    "Les Planes d'Hostoles", "Lladó", "Llanars", "Llançà", "Llers", "Llívia", "Lloret de Mar", "Llosses, Les", "Maçanet de Cabrenys",
    "Maçanet de la Selva", "Madremanya", "Maià de Montcal", "Masarac", "Meranges", "Mieres", "Mollet de Peralada", "Molló",
    "Montagut i Oix", "Mont-ras", "Navata", "Ogassa", "Olot", "Ordis", "Osor", "Palafrugell", "Palamós", "Palau de Santa Eulàlia",
    "Palau-sator", "Palau-saverdera", "Palol de Revardit", "Pals", "Pardines", "Parlavà", "Pau", "Pedret i Marzà", "Peralada",
    "Planoles", "Pont de Molins", "Pontós", "Porqueres", "Port de la Selva, El", "Portbou", "Preses, Les", "Puigcerdà", "Quart",
    "Queralbs", "Rabós", "Regencós", "Ribes de Freser", "Riells i Viabrea", "Ripoll", "Riudarenes", "Riudaura", "Riudellots de la Selva",
    "Riumors", "Roses", "Rupià", "Sales de Llierca", "Salt", "Sant Andreu Salou", "Sant Aniol de Finestres", "Sant Climent Sescebes",
    "Sant Feliu de Buixalleu", "Sant Feliu de Guíxols", "Sant Feliu de Pallerols", "Sant Ferriol", "Sant Gregori", "Sant Hilari Sacalm",
    "Sant Jaume de Llierca", "Sant Joan de les Abadesses", "Sant Joan de Mollet", "Sant Joan les Fonts", "Sant Jordi Desvalls",
    "Sant Julià de Ramis", "Sant Julià del Llor i Bonmatí", "Sant Llorenç de la Muga", "Sant Martí de Llémena", "Sant Martí Vell",
    "Sant Miquel de Campmajor", "Sant Miquel de Fluvià", "Sant Mori", "Sant Pau de Segúries", "Sant Pere Pescador", "Santa Coloma de Farners",
    "Santa Cristina d'Aro", "Santa Llogaia d'Àlguema", "Santa Pau", "Sarrià de Ter", "Saus, Camallera i Llampaies", "Selva de Mar, La",
    "Serinyà", "Serra de Daró", "Setcases", "Sils", "Siurana", "Susqueda", "Tallada d'Empordà, La", "Terrades", "Torrent",
    "Torroella de Fluvià", "Torroella de Montgrí", "Tortellà", "Toses", "Tossa de Mar", "Ullà", "Ullastret", "Ultramort", "Urús",
    "Vajol, La", "Vall de Bianya, La", "Vall d'en Bas, La", "Vallfogona de Ripollès", "Vall-llobrega", "Ventalló", "Verges", "Vidrà",
    "Vidreres", "Vilabertran", "Vilablareix", "Viladamat", "Viladasens", "Vilademuls", "Vilaf", "Vilafant", "Vilajuïga", "Vilallonga de Ter",
    "Vilamacolum", "Vilamalla", "Vilamaniscle", "Vilanant", "Vila-sacra", "Vilaür", "Vilobí d'Onyar", "Vilopriu"
  ];
  

const poblacionesNorte = [
    "Begur", "Cadaqués", "Llançà", "Girona", "Amer", "Celrá", "La Jonquera", "La Bisbal d'Empordà",
    "Sant Sadurní de l'Heura", "Sant Joan de Mollet", "Palau-saverdera", "Vilajuiga", "Roses",
    "Peralada", "Figueres", "Banyoles", "Cornellà del Terri", "Sant Gregori", "Salt",
    "Torroella de Montgrí", "La Pera", "Pals", "Agullana", "Albanyà", "Alp", "Albons", "Argelaguer",
    "Armentera", "Avinyonet de Puigventós", "Bàscara", "Besalú", "Bellcaire d'Empordà", "Beuda",
    "Biure", "Boadella i les Escaules", "Bolvir", "Bordils", "Borrassà", "Cabanelles", "Cabanes",
    "Cadaqués", "Camós", "Campdevànol", "Campelles", "Camprodon", "Canet d'Adri", "Cantallops", "Capmany",
    "Castellfollit de la Roca", "Castelló d'Empúries", "Celrà", "Cervià de Ter", "Cistella", "Colera",
    "Colomers", "Cornellà del Terri", "Crespià", "Darnius", "Das", "El Far d'Empordà", "Escala, L'",
    "Espolla", "Esponellà", "Figueres", "Flaçà", "Foixà", "Fontanals de Cerdanya", "Fontanilles",
    "Fontcoberta", "Fortià", "Garrigàs", "Garrigoles", "Garriguella", "Ger", "Girona", "Gombrèn", "Gualta",
    "Guils de Cerdanya", "Isòvol", "Juià", "La Pera", "La Jonquera", "La Bisbal d'Empordà", "Les Planes d'Hostoles",
    "Lladó", "Llanars", "Llançà", "Llers", "Llívia", "Llosses, Les", "Maçanet de Cabrenys", "Madremanya",
    "Maià de Montcal", "Masarac", "Meranges", "Mieres", "Mollet de Peralada", "Molló", "Montagut i Oix", "Navata",
    "Ogassa", "Olot", "Ordis", "Palau de Santa Eulàlia", "Palau-sator", "Palau-saverdera", "Palol de Revardit",
    "Pardines", "Parlavà", "Pau", "Pedret i Marzà", "Peralada", "Planoles", "Pont de Molins", "Pontós", "Porqueres",
    "Port de la Selva, El", "Portbou", "Preses, Les", "Puigcerdà", "Queralbs", "Rabós", "Regencós", "Ribes de Freser",
    "Ripoll", "Sales de Llierca", "Riudaura", "Sant Aniol de Finestres", "Riumors", "Roses", "Rupià",
    "Sant Climent Sescebes", "Sant Feliu de Pallerols", "Sant Gregori", "Sant Jaume de Llierca", "Sant Joan de les Abadesses",
    "Sant Joan de Mollet", "Sant Joan les Fonts", "Sant Jordi Desvalls", "Sant Julià de Ramis", "Sant Llorenç de la Muga",
    "Sant Martí de Llémena", "Sant Martí Vell", "Sant Miquel de Campmajor", "Sant Miquel de Fluvià", "Sant Mori",
    "Sant Pau de Segúries", "Sant Pere Pescador", "Saus, Camallera i Llampaies", "Santa Llogaia d'Àlguema", "Santa Pau",
    "Sarrià de Ter", "Selva de Mar, La", "Serinyà", "Tallada d'Empordà, La", "Serra de Daró", "Torroella de Fluvià",
    "Setcases", "Torroella de Montgrí", "Vallfogona de Ripollès", "Siurana", "Susqueda", "Terrades", "Vall d'en Bas, La",
    "Vall de Bianya, La", "Tortellà", "Toses", "Ullastret", "Ullà", "Ultramort", "Urús", "Vajol, La", "Vilallonga de Ter",
    "Ventalló", "Vilamacolum", "Verges", "Vidrà", "Vilaür", "Vilabertran", "Vilamaniscle", "Vilademuls", "Viladamat",
    "Vilajuïga", "Viladasens", "Vila-sacra", "Vilopriu", "Vilafant", "Vilamalla", "Vilanant"
];

todasLasPoblaciones.forEach((pueblo) => {
    let datalistPueblos = document.getElementById("poblaciones")
    let crearLista = `<option value="${pueblo}"> `
    datalistPueblos.innerHTML += crearLista
    
})
    
function obtenerTexto() {
    let poblacionInput = document.getElementsByName("poblacion")[0];
    let poblacionDefinida = poblacionInput.value;
    let zona = "Sur"

        for (let index = 0; index < poblacionesNorte.length; index++) {
            if (poblacionDefinida === poblacionesNorte[index]) {
                zona = "Norte"
                break;
            }       
      }

      if (zona === "Norte") {
        hacerParpadear()
    } else if (zona === "Sur") {
        hacerParpadearSur()
    }

      let parrafo = document.getElementById("mensaje")
      parrafo.innerHTML = "La población  " + poblacionDefinida + " pertenece a la zona: " + zona

      listaUsuario.push(poblacionInput.value)
      
      
}
 
    function hacerParpadear() {
    const imagen = document.getElementById("parpadeante")
    imagen.classList.add('blinking-image');
    setTimeout(() => {
      imagen.classList.remove('blinking-image');
    }, 3000);
    }

    function hacerParpadearSur() {
    const imagen = document.getElementById("parpadeanteSur")
    imagen.classList.add('blinking-image');
    setTimeout(() => {
      imagen.classList.remove('blinking-image');
    }, 3000);
}
    
    let contenedorListado = document.getElementById("contenedor-listado")

    function crearListaVisual() {

        let crearListado = ""
        listaUsuario.forEach((poblacion) => {

            crearListado =  `<p> ${poblacion} </p>
            <button onClick="borrarPoblacion()">X</button>`
                
            })
            
            console.log(poblacion)
            contenedorListado.innerHTML += crearListado

        }
                
            
    

    
   
    
