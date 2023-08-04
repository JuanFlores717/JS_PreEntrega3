const allPlc = allHardware.filter((el) => el.type === "Plc");
const allModules = allHardware.filter((el) => el.type === "Modulo");
const companyData = [
  {
    id: 10000,
    name: "Siemens",
    description: "¡La mejor marca para su automatismo!",
    protocol: ["Modbus", " Profinet", " RS-485 ", " Ethernet"],
    target: "grandes proyectos",
    image: "./assets/images/logo_siemens.png"
  },
  {
    id: 10002,
    name: "Delta",
    description: "¡La mejor marca para su automatismo!",
    protocol: ["Modbus", " RS-485", " Ethernet"],
    target: "pequeños proyectos",
    image: "./assets/images/logo_delta.jpg"
  },
  {
    id: 10003,
    name: "Ge",
    description: "¡La mejor marca para su automatismo!",
    protocol: ["Modbus", " RS-485", " Ethernet"],
    target: "Grandes y Pequeños proyectos",
    image: "./assets/images/logo_ge.png"
  }
]

// Generar las tarjetas de marcas
let productCards = document.getElementById("jscontainer");
let cardHTML
let company
let preferencia
let plcBuscados
let carrito = []
let companySelected
let plcSelected
console.log(companySelected)



function selectPlc(producto) {
  agregarAlCarrito(producto)
  const plcCard = document.getElementsByClassName("card")

  for (let i = -2; i < plcCard.length; i++) { //el -2 es para que repita más veces el remove de que forma puedo borrar todo más facil?
    plcCard[0].remove()
  }
  plcSelected = JSON.stringify(producto)
  localStorage.setItem("plc", plcSelected)
}

function agregarAlCarrito(producto) {
  let searchCarr = carrito.some((el) => el.id === producto.id)
  searchCarr ? (producto.quantity += 1) : (producto.quantity += 1, carrito.push(producto))
}


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
    itemsCards.innerHTML = `
      <div class="col-md-4 mb-4 plcCard">
        <div class="card">
          <img src="${plcBuscados[i].image}" class="card-img-top" alt="Imagen del producto">
          <div class="card-body">
            <h5 class="card-title">${plcBuscados[i].name}</h5>
            <p class="card-text">${plcBuscados[i].description}</p>
            <p class="card-text">Gama: ${plcBuscados[i].spectrum}</p>
            <p class="card-text">Comunicacion: ${plcBuscados[i].protocol}</p>
            <p class="card-text">Memoria: ${plcBuscados[i].memory} Mb</p>
            <p class="card-text">Precio: $${plcBuscados[i].price}</p>
            <button class="btn btn-primary" id="${plcBuscados[i].id}">Agregar al carrito</button>
          </div>
        </div>
      </div>
    `;
    itemsCards.className = 'card';
    productCards.append(itemsCards)

    const botonParaAgregar = document.getElementById(`${plcBuscados[i].id}`);
    botonParaAgregar.addEventListener('click', () => selectPlc(plcBuscados[i]));

  }

}

companySelected = JSON.parse(localStorage.getItem("company"))
plcSelected = JSON.parse(localStorage.getItem("plc"))

if (typeof companySelected === "object" && companySelected === null) {
  for (let i = 0; i < companyData.length; i++) {
    company = companyData[i];

    cardHTML = `
     <div class="col-md-4 mb-4">
       <div class="card">
         <img src="${companyData[i].image}" class="card-img-top" alt="Imagen del producto">
         <div class="card-body">
           <h5 class="card-title">${companyData[i].name}</h5>
           <p class="card-text">${companyData[i].description}</p>
           <p class="card-text">Objetivo: ${companyData[i].target}</p>
           <p class="card-text">Protocolos: ${companyData[i].protocol}</p>
           <button class="btn btn-primary" id="${companyData[i].id}">Seleccionar</button>
         </div>
       </div>
     </div>
   `;
    productCards.innerHTML += cardHTML;

    cardHTML.className = 'card';
  }

  for (let i = 0; i < companyData.length; i++) {
    const botonParaSelec = document.getElementById(`${companyData[i].id}`);
    botonParaSelec.addEventListener('click', () => selectCompany(companyData[i]));
  }
}

else selectCompany(companySelected)

