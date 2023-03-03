const seccionAtaque = document.getElementById('seleccionar-ataque');
const seccionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota');
const btnReiniciar = document.getElementById('boton-reiniciar');
const seccionMascota = document.getElementById('seleccionar-mascota');

const spanMascotaJugador = document.getElementById('mascota-jugador');
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');

const sectionMensaje = document.getElementById('resultado')
const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');

const ataquesDelJugador = document.getElementById('ataques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const contenedorAtaques = document.getElementById('contenedor-ataques');

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


class Mokepon {
  constructor(name, foto, vida) {
    this.name = name;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
  }
}

let hipodoge = new Mokepon('Hipodoge', './assents/mokepons_mokepon_hipodoge_attack.png', 5);

let capipepo = new Mokepon('Capipepo', './assents/mokepons_mokepon_capipepo_attack.png', 5);

let ratigueya = new Mokepon('Ratigueya', './assents/mokepons_mokepon_ratigueya_attack.png', 5);

let langostelvis = new Mokepon('Langostelvis', './assents/mokepons_mokepon_langostelvis_attack.png', 5);

let tucapalma = new Mokepon('Tucapalma', './assents/mokepons_mokepon_tucapalma_attack.png', 5);

let pydos = new Mokepon('Pydos', './assents/mokepons_mokepon_pydos_attack.png', 5);

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
  seccionAtaque.style.display = 'flex';
  seccionMascota.style.display = 'none';

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
window.addEventListener('load', iniciarJuego);



// TEMATIZARLO COMO DRAGON BALL

// la vida se convertiria en 100, despues serian 4 botones para el combate
// [habilidad(poder del personaje elegido), cuerpo a cuerpo, defensa, y transformacion(depende el personaje)] 
// todo esto dependiendo el personaje varia el poder en cada boton
// ejemplo, goku = habilidad 30, cuerpo a cuerpo 18, defensa 15, 
// transformacion ssj1, ssj2, ssj3 EventCounts, aumentaria en ssj1 = 10, ssj2 = 20 etc,