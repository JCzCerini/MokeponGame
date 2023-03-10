const seccionMascota = document.getElementById('seleccionar-mascota');
const seccionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota');
const btnReiniciar = document.getElementById('boton-reiniciar');
const seccionAtaque = document.getElementById('seleccionar-ataque');
const spanMascotaJugador = document.getElementById('mascota-jugador');
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');
const sectionMensaje = document.getElementById('resultado')
const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');
const ataquesDelJugador = document.getElementById('ataques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const contenedorAtaques = document.getElementById('contenedor-ataques');
const seccionVerMapa = document.getElementById('ver-mapa');
const mapa = document.getElementById('mapa');

let ataqueJugador = [];
let ataqueEnemigo = [];
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;
let mascotaEnemigo;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let inputLangostelvis;
let inputTucapalma;
let inputPydos;
let btnFuego;
let btnAgua;
let btnTierra;
let mokepones = [];
let opcionDeMokepones;
let mascotaJugador;
let botones = [];
let ataquesMokepon;
let ataquesMokeponEnemigo;
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let lienzo = mapa.getContext("2d");
let intervalo;
let mapaBackground = new Image();
mapaBackground.src = './assents/mokemap.png';
let mascotaJugadorObjeto;

class Mokepon {
  constructor(name, foto, vida, fotoMapa, x=10, y=10,) {
    this.name = name;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
    this.x = x;
    this.y = y;
    this.ancho = 120;
    this.alto = 120;
    this.mapaFoto = new Image();
    this.mapaFoto.src = fotoMapa;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }

  pintarMokepon() {
    lienzo.drawImage(
      this.mapaFoto,
      this.x,
      this.y,
      this.ancho,
      this.alto,
    )
  }
}

let hipodoge = new Mokepon('Hipodoge', './assents/mokepon_hipodoge.png', 5, './assents/mokepon_hipodoge.png');

let capipepo = new Mokepon('Capipepo', './assents/mokepon_capipepo.png', 5, './assents/mokepon_capipepo.png');

let ratigueya = new Mokepon('Ratigueya', './assents/mokepon_ratigueya.png', 5, './assents/mokepon_ratigueya.png');

let langostelvis = new Mokepon('Langostelvis', './assents/mokepon_langostelvis.png', 5, './assents/mokepon_langostelvis.png');

let tucapalma = new Mokepon('Tucapalma', './assents/mokepon_tucapalma.png', 5, './assents/mokepon_tucapalma.png');

let pydos = new Mokepon('Pydos', './assents/mokepon_pydos.png', 5, './assents/mokepon_pydos.png');

let hipodogeEnemigo = new Mokepon('Hipodoge', './assents/mokepon_hipodoge.png', 5, './assents/mokepon_hipodoge.png', 150, 160);

let capipepoEnemigo = new Mokepon('Capipepo', './assents/mokepon_capipepo.png', 5, './assents/mokepon_capipepo.png', 500, 300);

let ratigueyaEnemigo = new Mokepon('Ratigueya', './assents/mokepon_ratigueya.png', 5, './assents/mokepon_ratigueya.png', 580, 150);

let langostelvisEnemigo = new Mokepon('Langostelvis', './assents/mokepon_langostelvis.png', 5, './assents/mokepon_langostelvis.png', 130, 450);

let tucapalmaEnemigo = new Mokepon('Tucapalma', './assents/mokepon_tucapalma.png', 5, './assents/mokepon_tucapalma.png', 660, 360);

let pydosEnemigo = new Mokepon('Pydos', './assents/mokepon_pydos.png', 5, './assents/mokepon_pydos.png', 340, 360);

hipodoge.ataques.push(
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🌱', id: 'boton-tierra' },
);

capipepo.ataques.push(
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
);

ratigueya.ataques.push(
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🌱', id: 'boton-tierra' },
);

langostelvis.ataques.push(
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🌱', id: 'boton-tierra' },
);

tucapalma.ataques.push(
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
);

pydos.ataques.push(
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🌱', id: 'boton-tierra' },
);

mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,tucapalma,pydos)

function iniciarJuego() {
  seccionAtaque.style.display = 'none';
  seccionVerMapa.style.display = 'none';

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
    <input type="radio" name="mascota" id="${mokepon.name}"/>
      <label class="tarjeta-de-mokepon" for="${mokepon.name}">
        <img src="${mokepon.foto}" alt="${mokepon.name}">
        <p>${mokepon.name}</p>
      </label>
    `
    contenedorTarjetas.innerHTML += opcionDeMokepones;

    inputHipodoge = document.getElementById('Hipodoge');
    inputCapipepo = document.getElementById('Capipepo');
    inputRatigueya = document.getElementById('Ratigueya');
    inputLangostelvis = document.getElementById('Langostelvis');
    inputTucapalma = document.getElementById('Tucapalma');
    inputPydos = document.getElementById('Pydos');
  })

  seccionReiniciar.style.display = 'none';
  botonMascotaJugador.addEventListener('click', seleccionMascota);
  btnReiniciar.addEventListener('click', reiniciarJuego);
}
function aleatorio(min, max) {
  return Math.floor(Math.random()*(max - min + 1) + min)
}
function seleccionMascota() {
  seccionMascota.style.display = 'none';
  // seccionAtaque.style.display = 'flex';
  seccionVerMapa.style.display = 'flex';

  if (inputHipodoge.checked === true) {
    spanMascotaJugador.innerHTML = inputHipodoge.id;
    mascotaJugador = inputHipodoge.id;
  } else if (inputCapipepo.checked === true) {
    spanMascotaJugador.innerHTML = inputCapipepo.id;
    mascotaJugador = inputCapipepo.id;
  } else if (inputRatigueya.checked === true) {
    spanMascotaJugador.innerHTML = inputRatigueya.id;
    mascotaJugador = inputRatigueya.id;
  } else if (inputLangostelvis.checked === true) {
    spanMascotaJugador.innerHTML = inputLangostelvis.id;
    mascotaJugador = inputLangostelvis.id;
  } else if (inputTucapalma.checked === true) {
    spanMascotaJugador.innerHTML = inputTucapalma.id;
    mascotaJugador = inputTucapalma.id;
  } else if (inputPydos.checked === true) {
    spanMascotaJugador.innerHTML = inputPydos.id;
    mascotaJugador = inputPydos.id;
  } else {
    reiniciarJuego();
  }
  extraerAtaques(mascotaJugador);
  seleccionMascotaEnemigo();
  iniciarMapa();
};
function seleccionMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(0, mokepones.length -1);
  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].name;
  ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques;
  secuenciaAtaque()
};
function extraerAtaques(mascotaJugador) {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].name) {
      ataques = mokepones[i].ataques
    }
  }
  mostrarAtaques(ataques)
}
function mostrarAtaques(ataques) {
  
  ataques.forEach((ataque) => {
    ataquesMokepon = `
    <button id="${ataque.id}" class="boton boton-de-ataque BAtaque">${ataque.nombre}</button>
    `
    contenedorAtaques.innerHTML += ataquesMokepon;
  })

  btnFuego = document.getElementById('boton-fuego');
  btnAgua = document.getElementById('boton-agua');
  btnTierra = document.getElementById('boton-tierra');
  botones = document.querySelectorAll('.BAtaque');
}
function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      if (e.target.textContent === '🔥') {
        ataqueJugador.push('🔥');
        console.log(ataqueJugador);
        boton.style.background = '#112f58';
        boton.disabled = true;
      } else if (e.target.textContent === '💧') {
        ataqueJugador.push('💧');
        console.log(ataqueJugador);
        boton.style.background = '#112f58';
        boton.disabled = true;
      } else {
        ataqueJugador.push('🌱');
        console.log(ataqueJugador);
        boton.style.background = '#112f58';
        boton.disabled = true;
      }
      ataqueAleatorioEnemigo();
    })
  })
}
function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1);

  if(ataqueAleatorio == 0 || ataqueAleatorio == 1) {
    ataqueEnemigo.push('🔥');
  } else if(ataqueAleatorio == 2 || ataqueAleatorio == 3) {
    ataqueEnemigo.push('💧');
  } else {
    ataqueEnemigo.push('🌱');
  }
  console.log(ataqueEnemigo);
  iniciarPelea()
}
function iniciarPelea() {
  if (ataqueJugador.length === 5) {
    combate();
  }
}
function indexAmbosOponentes(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador];
  indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}
function combate() {
  
  for (let index = 0; index < ataqueJugador.length; index++) {
    if (ataqueJugador[index] === ataqueEnemigo[index]) {
      indexAmbosOponentes(index, index);
      mensajeBatalla('¡EMPATE! 🤼');
    } else if (ataqueJugador[index] === '🔥' && ataqueEnemigo[index] === '🌱') {
      indexAmbosOponentes(index, index);
      mensajeBatalla('¡GANASTE! 🥳');
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[index] === '💧' && ataqueEnemigo[index] === '🔥') {
      indexAmbosOponentes(index, index);
      mensajeBatalla('¡GANASTE! 🥳');
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[index] === '🌱' && ataqueEnemigo[index] === '💧') {
      indexAmbosOponentes(index, index);
      mensajeBatalla('¡GANASTE! 🥳');
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else {
      indexAmbosOponentes(index, index);
      mensajeBatalla('PERDISTE...😢');
      victoriasEnemigo++;
      spanVidasEnemigo.innerHTML = victoriasEnemigo;
    }
  }
  revisarVictorias()
}
function revisarVictorias() {
  if (victoriasJugador === victoriasEnemigo) {
    mensajeResultadoBatalla('Esto fue un Empate! 🤼');
  } else if (victoriasJugador > victoriasEnemigo) {
    mensajeResultadoBatalla('Felicitaciones! Ganaste 🎉🤴🎉');
  } else {
    mensajeResultadoBatalla('Lo siento, Perdiste...😭');
  }
}
function mensajeBatalla(resultado) {
  let nuevoAtaqueJugador = document.createElement('p');
  let nuevoAtaqueEnemigo = document.createElement('p');

  sectionMensaje.innerHTML = resultado;
  nuevoAtaqueJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo);
}
function mensajeResultadoBatalla(resultadoFinal) {
  sectionMensaje.innerHTML = `${resultadoFinal}`;
  seccionReiniciar.style.display = 'flex';
}
function reiniciarJuego() {
  location.reload()
}
function pintarCanvas() {
  mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
  mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
  lienzo.clearRect(0,0 , mapa.width, mapa.height );
  lienzo.drawImage(
    mapaBackground,
    0,
    0,
    mapa.width,
    mapa.height
  )
  mascotaJugadorObjeto.pintarMokepon();
  hipodogeEnemigo.pintarMokepon();
  capipepoEnemigo.pintarMokepon();
  ratigueyaEnemigo.pintarMokepon();
  langostelvisEnemigo.pintarMokepon();
  tucapalmaEnemigo.pintarMokepon();
  pydosEnemigo.pintarMokepon();
}
function moverDerecha() {
  mascotaJugadorObjeto.velocidadX = 5;
}
function moverIzquierda() {
  mascotaJugadorObjeto.velocidadX = -5;
}
function moverAbajo() {
  mascotaJugadorObjeto.velocidadY = 5;
}
function moverArriba() {
  mascotaJugadorObjeto.velocidadY = -5;
}
function deneterMovimiento() {
  mascotaJugadorObjeto.velocidadX = 0;
  mascotaJugadorObjeto.velocidadY = 0;
}
function pushKey(e) {
  switch (e.key) {
    case 'ArrowUp':
      moverArriba()
      break
    case 'ArrowRight':
      moverDerecha()
      break
    case 'ArrowDown':
      moverAbajo();
      break
    case 'ArrowLeft':
      moverIzquierda()
      break
  }
}
function iniciarMapa() {
  mapa.width = 800;
  mapa.height = 600;
  mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);
  intervalo = setInterval(pintarCanvas, 50);

  window.addEventListener('keydown', pushKey);
  window.addEventListener('keyup', deneterMovimiento);
}
function obtenerObjetoMascota() {
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].name) {
      return mokepones[i]
    }
  }
}

window.addEventListener('load', iniciarJuego);