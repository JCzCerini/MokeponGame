const seccionAtaque = document.getElementById('seleccionar-ataque');
const seccionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota');
const btnFuego = document.getElementById('boton-fuego');
const btnAgua = document.getElementById('boton-agua');
const btnTierra = document.getElementById('boton-tierra');
const btnReiniciar = document.getElementById('boton-reiniciar');
const seccionMascota = document.getElementById('seleccionar-mascota');
const inputHipodoge = document.getElementById('hipodoge');
const inputCapipepo = document.getElementById('capipepo');
const inputRatigueya = document.getElementById('ratigueya');
const inputLangostelvis = document.getElementById('langostelvis');
const inputTucapalma = document.getElementById('tucapalma');
const inputPydos = document.getElementById('pydos');
const spanMascotaJugador = document.getElementById('mascota-jugador');
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');
const sectionMensaje = document.getElementById('resultado')
const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');
const ataquesDelJugador = document.getElementById('ataques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
let mascotaEnemigo;

let mokepones = [];
let opcionDeMokepones;

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
    <input type="radio" name="mascota" id="hipodoge"/>
      <label class="tarjeta-de-mokepon" for="hipodoge">
        <img src="${mokepon.foto}" alt="hipodoge">
        <p>${mokepon.name}</p>
      </label>
    `
    contenedorTarjetas.innerHTML += opcionDeMokepones;
  })

  seccionReiniciar.style.display = 'none';
  botonMascotaJugador.addEventListener('click', seleccionMascota);
  btnFuego.addEventListener('click', ataqueFuego);
  btnAgua.addEventListener('click', ataqueAgua);
  btnTierra.addEventListener('click', ataqueTierra);
  btnReiniciar.addEventListener('click', reiniciarJuego);
}
function aleatorio(min, max) {
  return Math.floor(Math.random()*(max - min + 1) + min)
}
function seleccionMascota() {
  seccionAtaque.style.display = 'flex';
  seccionMascota.style.display = 'none';

  if (inputHipodoge.checked === true) {
    spanMascotaJugador.innerHTML = '<strong>Hipodoge</strong>'
  } else if (inputCapipepo.checked === true) {
    spanMascotaJugador.innerHTML = '<strong>Capipepo</strong>'
  } else if (inputRatigueya.checked === true) {
    spanMascotaJugador.innerHTML = '<strong>Ratigueya</strong>'
  } else if (inputLangostelvis.checked === true) {
    spanMascotaJugador.innerHTML = '<strong>Langostelvis</strong>'
  } else if (inputTucapalma.checked === true) {
    spanMascotaJugador.innerHTML = '<strong>Tucapalma</strong>'
  } else if (inputPydos.checked === true) {
    spanMascotaJugador.innerHTML = '<strong>Pydos</strong>'
  } else {
    alert('Debes selecionar una mascota!');
    reiniciarJuego();
  }
  seleccionMascotaEnemigo()
};
function seleccionMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(1, 6);

  if(mascotaAleatorio == 1) {
    mascotaEnemigo = spanMascotaEnemigo.innerHTML = '<strong>Hipodoge</strong>';
  } else if(mascotaAleatorio == 2) {
    mascotaEnemigo = spanMascotaEnemigo.innerHTML = '<strong>Capipepo</strong>';
  } else if(mascotaAleatorio == 3) {
    mascotaEnemigo = spanMascotaEnemigo.innerHTML = '<strong>Ratigueya</strong>';
  } else if(mascotaAleatorio == 4) {
    mascotaEnemigo = spanMascotaEnemigo.innerHTML = '<strong>Langostelvis</strong>';
  } else if(mascotaAleatorio == 5) {
    mascotaEnemigo = spanMascotaEnemigo.innerHTML = '<strong>Tucapalma</strong>';
  } else if(mascotaAleatorio == 6) {
    mascotaEnemigo = spanMascotaEnemigo.innerHTML = '<strong>Pydos</strong>';
  }
  return mascotaEnemigo
};
function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if(ataqueAleatorio == 1) {
    ataqueEnemigo = '🔥';
  } else if(ataqueAleatorio == 2) {
    ataqueEnemigo = '💧';
  } else if(ataqueAleatorio == 3) {
    ataqueEnemigo = '🌱';
  }
  batallaMascotas();
  return ataqueEnemigo
}
function ataqueFuego() {
  ataqueJugador = '🔥';
  ataqueAleatorioEnemigo();
  console.log({ataqueJugador, ataqueEnemigo});
}
function ataqueAgua() {
  ataqueJugador = '💧';
  ataqueAleatorioEnemigo();
  console.log({ataqueJugador, ataqueEnemigo});
}
function ataqueTierra() {
  ataqueJugador = '🌱';
  ataqueAleatorioEnemigo();
  console.log({ataqueJugador, ataqueEnemigo});
}
function batallaMascotas() {
  
  if ( ataqueJugador === ataqueEnemigo ) {
    mensajeBatalla('¡EMPATE! 🤼');
  } else if ( 
    ataqueJugador === 'FUEGO' && ataqueEnemigo === 'TIERRA' ||
    ataqueJugador === 'AGUA' && ataqueEnemigo === 'FUEGO' ||
    ataqueJugador === 'TIERRA' && ataqueEnemigo === 'AGUA'
  ) {
    mensajeBatalla('¡GANASTE! 🥳');
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    mensajeBatalla('PERDISTE...😢');
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }
  revisarVidas()
}
function mensajeBatalla(resultado) {
  let nuevoAtaqueJugador = document.createElement('p');
  let nuevoAtaqueEnemigo = document.createElement('p');

  sectionMensaje.innerHTML = resultado;
  nuevoAtaqueJugador.innerHTML = ataqueJugador;
  nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo);
}
function revisarVidas() {
  if (vidasEnemigo == 0) {
    mensajeResultadoBatalla('Felicitaciones! Ganaste 🎉🤴🎉');
  } else if (vidasJugador == 0) {
    mensajeResultadoBatalla('Lo siento, Perdiste...😭');
  }
}
function mensajeResultadoBatalla(resultadoFinal) {
  sectionMensaje.innerHTML = `${resultadoFinal}`;
  btnFuego.disabled = true;
  btnAgua.disabled = true;
  btnTierra.disabled = true;
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