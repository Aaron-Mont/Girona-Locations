function obtenerTexto() {

var poblacionInput = document.getElementsByName("poblacion")[0];
var poblacionDefinida = poblacionInput.value;

let zona = ""



if (
poblacionDefinida === "Begur" ||
poblacionDefinida === "Cadaqués" ||
poblacionDefinida === "Llançà" ||
poblacionDefinida === "Girona" ||
poblacionDefinida === "Amer" ||
poblacionDefinida === "Celrá" ||
poblacionDefinida === "La Jonquera" ||
poblacionDefinida === "La Bisbal d'Empordà" ||
poblacionDefinida === "Sant Sadurní de l'Heura" ||
poblacionDefinida === "Sant Joan de Mollet" ||
poblacionDefinida === "Palau-saverdera" ||
poblacionDefinida === "Vilajuiga" ||
poblacionDefinida === "Roses" ||
poblacionDefinida === "Peralada" ||
poblacionDefinida === "Figueres" ||
poblacionDefinida === "Banyoles" ||
poblacionDefinida === "Cornellà del Terri" ||
poblacionDefinida === "Sant Gregori" ||
poblacionDefinida === "Salt" ||
poblacionDefinida === "Torroella de Montgrí" ||
poblacionDefinida === "La Pera" ||
poblacionDefinida === "Pals"    ||
poblacionDefinida === "Agullana" ||
poblacionDefinida === "Albanyà" ||
poblacionDefinida === "Alp" ||
poblacionDefinida === "Albons" ||
poblacionDefinida === "Argelaguer" ||
poblacionDefinida === "Armentera" ||
poblacionDefinida === "Avinyonet de Puigventós" ||
poblacionDefinida === "Bàscara" ||
poblacionDefinida === "Besalú" ||
poblacionDefinida === "Bellcaire d'Empordà" ||
poblacionDefinida === "Beuda" ||
poblacionDefinida === "Biure" ||
poblacionDefinida === "Boadella i les Escaules" ||
poblacionDefinida === "Bolvir" ||
poblacionDefinida === "Bordils" ||
poblacionDefinida === "Borrassà" ||
poblacionDefinida === "Cabanelles" ||
poblacionDefinida === "Cabanes" ||
poblacionDefinida === "Cadaqués" ||
poblacionDefinida === "Camós" ||
poblacionDefinida === "Campdevànol" ||
poblacionDefinida === "Campelles" ||
poblacionDefinida === "Camprodon" ||
poblacionDefinida === "Canet d'Adri" ||
poblacionDefinida === "Cantallops" ||
poblacionDefinida === "Capmany" ||
poblacionDefinida === "Castellfollit de la Roca" ||
poblacionDefinida === "Castelló d'Empúries" ||
poblacionDefinida === "Celrà" ||
poblacionDefinida === "Cervià de Ter" ||
poblacionDefinida === "Cistella" ||
poblacionDefinida === "Colera" ||
poblacionDefinida === "Colomers" ||
poblacionDefinida === "Cornellà del Terri" ||
poblacionDefinida === "Crespià" ||
poblacionDefinida === "Darnius" ||
poblacionDefinida === "Das" ||
poblacionDefinida === "El Far d'Empordà" ||
poblacionDefinida === "Escala, L'" ||
poblacionDefinida === "Espolla" ||
poblacionDefinida === "Esponellà" ||
poblacionDefinida === "Figueres" ||
poblacionDefinida === "Flaçà" ||
poblacionDefinida === "Foixà" ||
poblacionDefinida === "Fontanals de Cerdanya" ||
poblacionDefinida === "Fontanilles" ||
poblacionDefinida === "Fontcoberta" ||
poblacionDefinida === "Fortià" ||
poblacionDefinida === "Garrigàs" ||
poblacionDefinida === "Garrigoles" ||
poblacionDefinida === "Garriguella" ||
poblacionDefinida === "Ger" ||
poblacionDefinida === "Girona" ||
poblacionDefinida === "Gombrèn" ||
poblacionDefinida === "Gualta" ||
poblacionDefinida === "Guils de Cerdanya" ||
poblacionDefinida === "Isòvol" ||
poblacionDefinida === "Juià" ||
poblacionDefinida === "La Pera" ||
poblacionDefinida === "La Jonquera" ||
poblacionDefinida === "La Bisbal d'Empordà" ||
poblacionDefinida === "Les Planes d'Hostoles" ||
poblacionDefinida === "Lladó" ||
poblacionDefinida === "Llanars" ||
poblacionDefinida === "Llançà" ||
poblacionDefinida === "Llers" ||
poblacionDefinida === "Llívia" ||
poblacionDefinida === "Llosses, Les" ||
poblacionDefinida === "Maçanet de Cabrenys" ||
poblacionDefinida === "Madremanya" ||
poblacionDefinida === "Maià de Montcal" ||
poblacionDefinida === "Masarac" ||
poblacionDefinida === "Meranges" ||
poblacionDefinida === "Mieres" ||
poblacionDefinida === "Mollet de Peralada" ||
poblacionDefinida === "Molló" ||
poblacionDefinida === "Montagut i Oix" ||
poblacionDefinida === "Navata" ||
poblacionDefinida === "Ogassa" ||
poblacionDefinida === "Olot" ||
poblacionDefinida === "Ordis" ||
poblacionDefinida === "Palau de Santa Eulàlia" ||
poblacionDefinida === "Palau-sator" ||
poblacionDefinida === "Palau-saverdera" ||
poblacionDefinida === "Palol de Revardit" ||
poblacionDefinida === "Pardines" ||
poblacionDefinida === "Parlavà" ||
poblacionDefinida === "Pau" ||
poblacionDefinida === "Pedret i Marzà" ||
poblacionDefinida === "Peralada" ||
poblacionDefinida === "Planoles" ||
poblacionDefinida === "Pont de Molins" ||
poblacionDefinida === "Pontós" ||
poblacionDefinida === "Porqueres" ||
poblacionDefinida === "Port de la Selva, El" ||
poblacionDefinida === "Portbou" ||
poblacionDefinida === "Preses, Les" ||
poblacionDefinida === "Puigcerdà" ||
poblacionDefinida === "Queralbs" ||
poblacionDefinida === "Rabós" ||
poblacionDefinida === "Regencós" ||
poblacionDefinida === "Ribes de Freser" ||
poblacionDefinida === "Ripoll" ||
poblacionDefinida === "Sales de Llierca" ||
poblacionDefinida === "Riudaura" ||
poblacionDefinida === "Sant Aniol de Finestres" ||
poblacionDefinida === "Riumors" ||
poblacionDefinida === "Roses" ||
poblacionDefinida === "Rupià" ||
poblacionDefinida === "Sant Climent Sescebes" ||
poblacionDefinida === "Sant Feliu de Pallerols" ||
poblacionDefinida === "Sant Gregori" ||
poblacionDefinida === "Sant Jaume de Llierca" ||
poblacionDefinida === "Sant Joan de les Abadesses" ||
poblacionDefinida === "Sant Joan de Mollet" ||
poblacionDefinida === "Sant Joan les Fonts" ||
poblacionDefinida === "Sant Jordi Desvalls" ||
poblacionDefinida === "Sant Julià de Ramis" ||
poblacionDefinida === "Sant Llorenç de la Muga" ||
poblacionDefinida === "Sant Martí de Llémena" ||
poblacionDefinida === "Sant Martí Vell" ||
poblacionDefinida === "Sant Miquel de Campmajor" ||
poblacionDefinida === "Sant Miquel de Fluvià" ||
poblacionDefinida === "Sant Mori" ||
poblacionDefinida === "Sant Pau de Segúries" ||
poblacionDefinida === "Sant Pere Pescador" ||
poblacionDefinida === "Saus, Camallera i Llampaies" ||
poblacionDefinida === "Santa Llogaia d'Àlguema" ||
poblacionDefinida === "Santa Pau" ||
poblacionDefinida === "Sarrià de Ter" ||
poblacionDefinida === "Selva de Mar, La" ||
poblacionDefinida === "Serinyà" ||
poblacionDefinida === "Tallada d'Empordà, La" ||
poblacionDefinida === "Serra de Daró" ||
poblacionDefinida === "Torroella de Fluvià" ||
poblacionDefinida === "Setcases" ||
poblacionDefinida === "Torroella de Montgrí" ||
poblacionDefinida === "Vallfogona de Ripollès" ||
poblacionDefinida === "Siurana" ||
poblacionDefinida === "Susqueda" ||
poblacionDefinida === "Terrades" ||
poblacionDefinida === "Vall d'en Bas, La" ||
poblacionDefinida === "Vall de Bianya, La" ||
poblacionDefinida === "Tortellà" ||
poblacionDefinida === "Toses" ||
poblacionDefinida === "Ullastret" ||
poblacionDefinida === "Ullà" ||
poblacionDefinida === "Ultramort" ||
poblacionDefinida === "Urús" ||
poblacionDefinida === "Vajol, La" ||
poblacionDefinida === "Vilallonga de Ter" ||
poblacionDefinida === "Ventalló" ||
poblacionDefinida === "Vilamacolum" ||
poblacionDefinida === "Verges" ||
poblacionDefinida === "Vidrà" ||
poblacionDefinida === "Vilaür" ||
poblacionDefinida === "Vilabertran" ||
poblacionDefinida === "Vilamaniscle" ||
poblacionDefinida === "Vilademuls" ||
poblacionDefinida === "Viladamat" ||
poblacionDefinida === "Vilajuïga" ||
poblacionDefinida === "Viladasens" ||
poblacionDefinida === "Vila-sacra" ||
poblacionDefinida === "Vilopriu" ||
poblacionDefinida === "Vilafant" ||
poblacionDefinida === "Vilamalla" ||
poblacionDefinida === "Vilanant"
) { zona = "Norte"; hacerParpadear()

} else  {
zona = "Sur"
hacerParpadearSur()
} 

let parrafo = document.getElementById("mensaje")
parrafo.innerHTML = "La población  " + poblacionDefinida + " pertenece a la zona: " + zona
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
