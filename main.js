//Funciones de uso específico
function agregarAlCarrito(producto) { //funcion para agregar al carrito, busca que exista el item y luego le suma 1 a cantidad
  let searchCarr = carrito.some((el) => el.id === producto.id)
  searchCarr ? (producto.quantity += 1) : (producto.quantity += 1, carrito.push(producto))
}

function fixIoQuantity(quantity){ //funcion para filtrar valores erroneos
quantity > 256 ? (quantity = 256) : null  //si lo ingresado supera el maximo de IO se setea el maximo
quantity < 0 ? (quantity = 0) : null  //si se ingresa un valor negativo se setea 0
return(quantity)
}

function fixPointsIo(points){
points !== 8 && points !== 16 && points !== 32 ? (points = 8) : null //solo existen 3 tipos de modulos de 8/16/32, si se ingresa un valor distinto se fija a 8
return(points)
}

// Inicializacion de variables globales: 
let productCards = document.getElementById("jscontainer");
let cardHTML
let company
let preferencia
let plcBuscados
let carrito = []
let companySelectedlcSelected
let form
let formWeb

//Informacion para imprimir en el DOM
function companyCatalog({ image, name, description, target, protocol, id }) {
  let companyCard = `
     <div class="col-md-4 mb-4">
       <div class="card">
         <img src="${image}" class="card-img-top" alt="Imagen del producto">
         <div class="card-body">
           <h5 class="card-title">${name}</h5>
           <p class="card-text">${description}</p>
           <p class="card-text">Objetivo: ${target}</p>
           <p class="card-text">Protocolos: ${protocol}</p>
           <button class="btn btn-primary" id="${id}">Seleccionar</button>
         </div>
       </div>
     </div>
   `;
  return (companyCard)
}
function plcCatalog({ image, name, description, spectrum, protocol, memory, price, id }) {
  let plcCard = `
      <div class="col-md-4 mb-4 plcCard">
        <div class="card">
          <img src="${image}" class="card-img-top" alt="Imagen del producto">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <p class="card-text">Gama: ${spectrum}</p>
            <p class="card-text">Comunicacion: ${protocol}</p>
            <p class="card-text">Memoria: ${memory} Mb</p>
            <p class="card-text">Precio: $${price}</p>
            <button class="btn btn-primary" id="${id}">Agregar al carrito</button>
          </div>
        </div>
      </div>
    `;
  return (plcCard)
}
function endInfo({ image, name, quantity, type, price, description }) {
  let endCard = `
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${image}" class="img-fluid rounded-start" alt="imagen">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${type}: ${name}</h5>
        <p class="card-text">${description}</p>
        <p class="card-text">x${quantity} - ud. ${price} - total ${quantity *price}</p>
      </div>
    </div>
  </div>
  </div>
`;
  return (endCard)
}
const formIO = `
<div>
  <br>
  <h2>Ingrese su cantidad de entradas y salidas</h2>
  <form id="form">
        <label for="diInputs">Entradas (0-256):</label><br>
        <input type="number" id="diInputs" name="diInputs" min="0" max="256" value="0"><br>
        <label for="diPoints">Puntos (8, 16, 32):</label><br>
        <input type="number" id="diPoints" name="diPoints" min="8" max="32" value="8"><br><br>
        <label for="doOutputs">Salidas (0-256):</label><br>
        <input type="number" id="doOutputs" name="doOutputs" min="0" max="256" value="0"><br>
        <label for="doPoints">Puntos (8, 16, 32):</label><br>
        <input type="number" id="doPoints" name="doPoints" min="8" max="32" value="8"><br><br>
        
  </form>
  <button class="btn btn-primary" id="sendIO">Confirmar IO</button>
</div>
`;

//Separamos en dos el array de todos los productos para mayor comodidad
const allPlc = allHardware.filter((el) => el.type === "Plc");
const allModules = allHardware.filter((el) => el.type === "Modulo");

//1er paso Crear tarjetas de seleccion de marca. En caso de haberse seleccionado previamente lo vamos a obviar
companySelected = JSON.parse(localStorage.getItem("company"))
plcSelected = JSON.parse(localStorage.getItem("plc"))

if (typeof companySelected === "object" && companySelected === null) {
  for (let i = 0; i < companyData.length; i++) {
    company = companyData[i];

    cardHTML = companyCatalog(companyData[i])
    productCards.innerHTML += cardHTML;

    cardHTML.className = 'card';
  }

  for (let i = 0; i < companyData.length; i++) {
    const botonParaSelec = document.getElementById(`${companyData[i].id}`);
    botonParaSelec.addEventListener('click', () => selectCompany(companyData[i]));
  }
}

else selectCompany(companySelected)

//2do paso crear tarjetas de seleccion de PLC. En caso de haberse seleccionado previamente lo vamos a obviar
function selectCompany(selCom) {
  const selectedCompany = companyData.find((companyData) => companyData.id === selCom.id);
  preferencia = selCom.name
  companySelected = JSON.stringify(selCom)
  localStorage.setItem("company", companySelected)
  plcBuscados = allHardware.filter((el) => el.company === preferencia && el.type === "Plc")

  productCards.innerHTML = ``;
  productCards.append(`Seleccion: ${preferencia}`)

  for (let i = 0; i < plcBuscados.length; i++) {
    producto = plcBuscados[i];
    const itemsCards = document.createElement('div');
    itemsCards.innerHTML = plcCatalog(plcBuscados[i])
    itemsCards.className = 'card';
    productCards.append(itemsCards)

    const botonParaAgregar = document.getElementById(`${plcBuscados[i].id}`);
    botonParaAgregar.addEventListener('click', () => selectPlc(plcBuscados[i]));

  }

}

//3er paso crear formulario de IO, donde usuario ingresa cantidad de entradas y salidas. En caso de haberse completado previamente lo vamos a obviar
function selectPlc(producto) {
  agregarAlCarrito(producto)
  const plcCard = document.getElementsByClassName("card")

  for (let i = -2; i < plcCard.length; i++) { //el -2 es para que repita más veces el remove de que forma puedo borrar todo más facil?
    plcCard[0].remove()
  }
  plcSelected = JSON.stringify(producto)
  localStorage.setItem("plc", plcSelected)
  formWeb = document.createElement('div');
  formWeb.innerHTML = formIO
  productCards.append(formWeb)
  form = document.getElementById("form")
  formButton = document.getElementById("sendIO")
  formButton.addEventListener('click', () => sendIoData())

}

//4to paso crear toda la info final con lo seleccionado
function sendIoData() {
  let formIoData = [{
    quantitydi : fixIoQuantity(Number(form[0].value)),
    diPoints : fixPointsIo(Number(form[1].value)),
    quantitydo : fixIoQuantity(Number(form[2].value)),
    doPoints : fixPointsIo(Number(form[3].value))
  }
  ]
  IoSelected = JSON.stringify(formIoData)
  localStorage.setItem("ioSelected", IoSelected)
  formWeb.remove()
  plcSelected = JSON.parse(plcSelected)
  createIoData(allModules, preferencia, formIoData[0])
}

function createIoData(arr, company, {quantitydi, diPoints, quantitydo, doPoints}){
  addModule (arr, company, quantitydi, diPoints, "di")
  addModule (arr, company, quantitydo, doPoints, "do")
  const endContainer = document.createElement('div');
  endContainer.className = 'endContainer';
  productCards.append(endContainer)
  for (let i = 0; i < carrito.length; i++) {
    const itemsCards = document.createElement('div');
    itemsCards.innerHTML = endInfo(carrito[i])
    itemsCards.className = 'card';
    endContainer.append(itemsCards)
  }
  const totalP = totalPrice(carrito)
  const totalPrint = document.createElement('div');
  totalPrint.className = 'endPrint';
  totalPrint.innerHTML = `
  <div class = "totalP">Total de la compra: ${totalP}
  </div>
`;
endContainer.append(totalPrint)
}

function addModule (arr, company, quantity, points, type){
  const findMod = selectMod(arr, company, points, type)
  const quantityMod = calculateQuant(quantity, points)

  for (let i = 0; i < quantityMod; i++) {
    agregarAlCarrito(findMod)
  }
}
function calculateQuant(quantity, points){
  const quantityModules = Math.ceil(quantity/points)
  return(quantityModules)
}
function selectMod(arr, company, points, type) {  //Funcion para buscar modulo que coincida con los parametros ingresados en el formulario de IO

  type = type.toLowerCase()
  let modType
  type === "di" ? modType = "di" : modType = "do"
  const searchMod = arr.filter((el) => el.company === company && el[modType] == points)
  return (searchMod[0])
}

function totalPrice(arr){
  let calP= 0
  for (const totalP of arr) {
    calP += totalP.price * totalP. quantity;
  }
  return(calP)
}
