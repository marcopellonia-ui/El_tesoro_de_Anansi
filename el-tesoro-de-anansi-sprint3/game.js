// EL TESORO DE ANANSI — prototipo funcional Sprint 3
// La naturaleza secreta de las puertas se usa en la lógica, pero nunca se muestra antes de resolver.

const characters = [
  { id: "roco", name: "Roco", symbol: "Piedra", health: 100 },
  { id: "berto", name: "Berto", symbol: "Papel", health: 100 },
  { id: "felix", name: "Félix", symbol: "Tijera", health: 100 }
];

const rooms = [
  {
    title: "El templo observa",
    function: "Presentar el lenguaje engañoso del templo y enseñar que la apariencia no revela la naturaleza real de una puerta.",
    doors: [
      ["El corredor de los espejos", "Un pasillo refleja copias de los personajes; algunas imitan sus movimientos y otras se adelantan unos segundos. Deben tocar solo los espejos «correctos», sin que se explique qué significa esa palabra.", "Papel"],
      ["El gigante dormido", "Una estatua bloquea el paso. Una llave quedó atascada en una placa metálica y una inscripción dice: «Lo pesado no siempre necesita ser levantado».", "Tijera"],
      ["La biblioteca que respira", "Los libros se desplazan solos. Deben encontrar un volumen sin título a partir de una frase de la pared, pero varios textos ofrecen pistas falsas.", "Piedra"]
    ],
    strategies: [
      { id:"A", label:"Escuchar y acordar", attitude:"Cooperativa", delta:1, map:{roco:1,berto:2,felix:0} },
      { id:"B", label:"Resolver sin consultar", attitude:"Individual", delta:0, map:{roco:0,berto:2,felix:1} },
      { id:"C", label:"Imponer una decisión", attitude:"Impositiva", delta:-1, map:{roco:2,berto:1,felix:0} }
    ]
  },
  {
    title: "Las reglas no son lo que parecen",
    function: "Quebrar las asociaciones obvias entre el aspecto del obstáculo y la capacidad del personaje.",
    doors: [
      ["El puente que se rompe cuando funciona", "Un puente cruza un abismo. Algunas tablas aparentemente resistentes hacen que otras se desprendan; la ruta segura no coincide con la más sólida.", "Papel"],
      ["El reloj sin agujas", "Un reloj tiene doce números, pero ninguna aguja. La frase «Cuando llegue la hora correcta, la puerta se abrirá» oculta que hay que hacer que el mecanismo recuerde la hora.", "Tijera"],
      ["El coro de las máscaras", "Siete máscaras cantan melodías parecidas. Deben reconocer la nota incorrecta, pero si la señalan demasiado pronto, todas cambian de canción.", "Piedra"]
    ],
    strategies: [
      { id:"A", label:"Compartir hipótesis", attitude:"Cooperativa", delta:1, map:{roco:1,berto:2,felix:0} },
      { id:"B", label:"Seguir un cálculo individual", attitude:"Individual", delta:0, map:{roco:2,berto:1,felix:0} },
      { id:"C", label:"Actuar por impulso", attitude:"Impulsiva", delta:-1, map:{roco:1,berto:0,felix:2} }
    ]
  },
  {
    title: "El templo miente",
    function: "Mostrar que insistir en una explicación aparentemente lógica puede empeorar el problema.",
    doors: [
      ["La habitación congelada", "Todo está cubierto de hielo. Tres botones —rojo, azul y blanco— acompañan la inscripción «El calor abre la puerta». La frase es metafórica y la salida depende de una secuencia.", "Piedra"],
      ["La criatura de tinta", "Una masa de tinta copia todo lo que toca y crece cada vez que intentan limpiarla. La solución requiere cambiar la estrategia en vez de insistir.", "Papel"],
      ["La jaula de los péndulos", "Péndulos cortantes se mueven a distintos ritmos. La abertura de salida solo queda visible durante un instante muy breve.", "Tijera"]
    ],
    strategies: [
      { id:"A", label:"Probar una idea en conjunto", attitude:"Cooperativa", delta:1, map:{roco:2,berto:1,felix:0} },
      { id:"B", label:"Confiar en la deducción", attitude:"Individual", delta:0, map:{roco:2,berto:0,felix:1} },
      { id:"C", label:"Desestimar a los demás", attitude:"Egoísta", delta:-1, map:{roco:1,berto:0,felix:2} }
    ]
  },
  {
    title: "Las pistas contradictorias",
    function: "Generar incertidumbre con mensajes contradictorios y hacer visible el estilo de decisión del grupo.",
    doors: [
      ["El juicio del espejo", "Un espejo pregunta por decisiones previas y presenta dos respuestas posibles, afirmando que una es falsa. La clave está en distinguir qué afirmaciones deben descartarse.", "Tijera"],
      ["El jardín imposible", "Las plantas crecen al ser observadas; unas abren caminos y otras bloquean la salida. Una placa advierte: «Deja crecer aquello que quieres eliminar».", "Piedra"],
      ["La habitación que se dobla", "Las paredes se pliegan como papel, el suelo puede ser techo y una salida aparece cuando la habitación está «mal doblada».", "Papel"]
    ],
    strategies: [
      { id:"A", label:"Buscar un acuerdo", attitude:"Cooperativa", delta:1, map:{roco:0,berto:1,felix:2} },
      { id:"B", label:"Aplicar una hipótesis propia", attitude:"Individual", delta:0, map:{roco:2,berto:1,felix:0} },
      { id:"C", label:"Forzar una respuesta", attitude:"Impositiva", delta:-1, map:{roco:1,berto:0,felix:2} }
    ]
  },
  {
    title: "El templo castiga las costumbres",
    function: "Cuestionar los patrones que el jugador cree haber aprendido y aumentar la duda antes del último reto.",
    doors: [
      ["El cofre demasiado fácil", "Un cofre parece abrirse con una llave común, pero la puerta advierte: «No abras lo que te pertenece». La solución exige manipular el mecanismo, no seguir la instrucción literalmente.", "Tijera"],
      ["La escalera infinita", "Una escalera devuelve al mismo lugar. Las palabras de los escalones parecen formar una oración, pero esa oración es falsa; hay que reconocer la regla estructural.", "Piedra"],
      ["El escenario vacío", "Una voz ordena convencer al público de que el espectáculo comenzó, aunque no hay público visible ni elementos escénicos.", "Papel"]
    ],
    strategies: [
      { id:"A", label:"Revisar la idea entre todos", attitude:"Cooperativa", delta:1, map:{roco:0,berto:1,felix:2} },
      { id:"B", label:"Seguir una deducción parcial", attitude:"Individual", delta:0, map:{roco:1,berto:0,felix:2} },
      { id:"C", label:"Resolverlo por intuición egoísta", attitude:"Egoísta", delta:-1, map:{roco:0,berto:2,felix:1} }
    ]
  },
  {
    title: "La última mentira",
    function: "Poner en crisis las reglas aprendidas y conectar las decisiones acumuladas con el desenlace.",
    doors: [
      ["La puerta de los tres corazones", "Tres corazones mecánicos laten a distinta velocidad. Una inscripción dice: «El más fuerte resistirá; el más inteligente comprenderá; el más loco sobrevivirá». El mecanismo cambia según quién actúa primero.", "Papel"],
      ["El corredor completamente recto", "Un corredor parece no tener trampas. Solo hay una línea blanca y una campana, pero la línea contiene interrupciones pequeñas que exigen pasar por puntos exactos.", "Tijera"],
      ["El último acertijo", "Tres palancas tienen símbolos de piedra, papel y tijera. La inscripción explica qué símbolo no debe vencer a otro, pero no define qué significa «vencer».", "Piedra"]
    ],
    strategies: [
      { id:"A", label:"Compartir riesgos", attitude:"Cooperativa", delta:1, map:{roco:0,berto:2,felix:1} },
      { id:"B", label:"Esperar a tener una explicación", attitude:"Individual", delta:0, map:{roco:1,berto:2,felix:0} },
      { id:"C", label:"Actuar según la propia certeza", attitude:"Egoísta", delta:-1, map:{roco:1,berto:0,felix:2} }
    ]
  }
];

const endings = {
  gameover: {
    title:"FINAL 1 — GAME OVER",
    text:"La televisión pierde la señal. El templo queda en silencio: ya no hay dos aventureros capaces de abrir la reja. La prueba termina aquí. Anansi no revela el tesoro.",
    extra:"La aventura debe comenzar nuevamente."
  },
  true: {
    title:"FINAL 2 — EL VERDADERO TESORO",
    text:"La reja se abre. Dentro del cofre no hay oro, joyas ni una recompensa. La televisión se enciende y su voz cambia: «Soy Anansi. Los traje aquí porque estaban tan ocupados enfrentándose que habían olvidado cómo estar del mismo lado».",
    extra:"Los tres despiertan en el bar. Siguen discutiendo por tonterías, pero esta vez deciden quedarse juntos. El tesoro era aprender a cooperar."
  },
  discord: {
    title:"FINAL 3 — FINAL DE DISCORDIA",
    text:"Los tres llegan vivos, pero empiezan a discutir por quién merece quedarse con el tesoro. La televisión revela que todo fue una prueba de Anansi, aunque ninguno parece dispuesto a escuchar.",
    extra:"Despiertan en el bar sin haber comprendido el sentido de la aventura. Sobrevivieron, pero no aprendieron a confiar."
  },
  betrayalFelix: {
    title:"FINAL 4 — LA TRAICIÓN DE FÉLIX",
    text:"Roco ya no está. Félix finge un accidente, deja a Berto atrás y decide quedarse con la recompensa. «No es personal. Bueno… quizá un poquito».",
    extra:"La confianza no alcanzó para evitar que Félix priorizara su propio beneficio."
  },
  betrayalBerto: {
    title:"FINAL 5 — LA TRAICIÓN DE BERTO",
    text:"Félix ya no está. Berto observa a Roco y concluye que solo él puede administrar correctamente cualquier recompensa. «Es una decisión lógica», afirma, sin esperar respuesta.",
    extra:"La inteligencia de Berto no alcanzó para comprender el valor de la lealtad."
  },
  betrayalRoco: {
    title:"FINAL 6 — LA TRAICIÓN DE ROCO",
    text:"Berto ya no está. Roco se interpone frente a Félix y reclama que la recompensa pertenece al más fuerte. «Se terminó la discusión», dice.",
    extra:"Roco confundió tener fuerza con tener siempre la razón."
  },
  alliance: {
    title:"FINAL 7 — ALIANZA INCOMPLETA",
    text:"Dos supervivientes se miran, recuerdan todo lo que atravesaron y deciden no traicionarse. Abren la reja y encuentran un cofre vacío. La televisión revela que Anansi organizó la prueba para enseñarles a cooperar.",
    extra:"Regresan al bar juntos. La alianza existe, aunque la ausencia de su compañero hace que la victoria no sea completa."
  }
};

let state = null;
let selectedStrategy = null;

function freshState() {
  return {
    screen:"home", roomIndex:0, trust:0,
    characters:characters.map(c=>({...c})),
    history:[], lastResult:null, ending:null
  };
}
function aliveCharacters() { return state.characters.filter(c=>c.health>0); }
function clamp(value,min,max) { return Math.max(min,Math.min(max,value)); }
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function renderStatus() {
  return `<div class="status-grid">${state.characters.map(c=>{
    const dead=c.health<=0, pct=Math.max(0,c.health);
    return `<div class="status-card">
      <div class="status-head"><span>${c.name}</span><span>${dead?'<span class="dead-label">FALLECIDO</span>':c.health+' PS'}</span></div>
      <div class="health-track"><div class="health-fill ${dead?'dead':pct<=30?'low':''}" style="width:${pct}%"></div></div>
    </div>`;
  }).join("")}</div>`;
}
function shell(content) {
  document.getElementById("screen").innerHTML = `<div class="fade-in">${content}</div>`;
}
function home() {
  state=freshState(); selectedStrategy=null;
  shell(`<section class="panel center">
    <div class="eyebrow">Aventura gráfica interactiva</div>
    <h1>El tesoro<br>de Anansi</h1>
    <p class="lead">Tres amigos. Un templo. Seis salas. Y una televisión que sabe demasiado.</p>
    <p>Después de una pelea en un bar, Roco, Berto y Félix despiertan en un templo desconocido. Para encontrar la salida deberán superar pruebas, cuidar su salud y decidir si todavía pueden confiar unos en otros.</p>
    <div class="actions">
      <button class="primary pulse" onclick="showIntro()">Comenzar aventura</button>
      <button class="secondary" onclick="showRules()">Instrucciones</button>
    </div>
  </section>`);
}
function showIntro() {
  shell(`<section class="panel">
    <div class="eyebrow">Cinemática inicial · El bar</div><h2>Una noche que salió mal</h2>
    <p>Roco está tomando algo cuando Berto aparece y empieza una discusión. Félix llega con una sonrisa enorme y una broma que, como de costumbre, no ayuda en absoluto.</p>
    <p>—¿Podrían discutir un poco más bajo? —pregunta Félix—. Estoy intentando arruinar el ambiente.</p>
    <p>La discusión escala. Hay gritos, empujones y, finalmente, los tres terminan inconscientes.</p>
    <p class="notice">«Hola… Hey… ¡OYE! No te quedes ahí tirado. Levántate, tienes una misión. Debes buscar el…»</p>
    <p>Despiertan en una habitación oscura. Una televisión se enciende frente a ellos.</p>
    <div class="actions"><button class="primary" onclick="showRules()">Escuchar a la televisión</button></div>
  </section>`);
}
function showRules() {
  shell(`<section class="panel">
    <div class="eyebrow">Instrucciones</div><h2>Las reglas del templo</h2>
    <p>La televisión explica que deberán atravesar seis salas. En cada una hay tres puertas y deberán elegir una estrategia completa: A, B o C. Cada personaje vivo irá a una puerta diferente.</p>
    <div class="rule-grid">
      <div class="info-card"><strong>Salud</strong><span>Todos comienzan con 100 PS. El daño se acumula entre salas. Al llegar a 0 PS, el personaje muere.</span></div>
      <div class="info-card"><strong>Confianza</strong><span>Comienza en 0. Las estrategias pueden sumar +1, mantener 0 o restar −1. El rango es de −6 a +6.</span></div>
      <div class="info-card"><strong>Supervivencia</strong><span>Se necesitan al menos dos personajes vivos para avanzar. Si quedan menos de dos, la partida termina.</span></div>
      <div class="info-card"><strong>Desenlace</strong><span>Los supervivientes y la Confianza acumulada determinan cuál de los siete finales se activa.</span></div>
    </div>
    <p class="notice">La naturaleza de las puertas y el daño exacto son secretos. Observá las pistas y conversá con tus compañeros antes de elegir.</p>
    <div class="actions"><button class="primary" onclick="startAdventure()">Entrar al templo</button></div>
  </section>`);
}
function startAdventure() { state=freshState(); state.screen="room"; renderRoom(); }
function renderRoom() {
  selectedStrategy=null;
  const room=rooms[state.roomIndex];
  const doorHtml=room.doors.map((d,i)=>`<article class="door-card">
    <div class="door-number">PUERTA ${state.roomIndex*3+i+1}</div><h3>${escapeHtml(d[0])}</h3><p>${escapeHtml(d[1])}</p>
  </article>`).join("");
  const strategyHtml=room.strategies.map(s=>`<button class="strategy-card" id="strategy-${s.id}" onclick="selectStrategy('${s.id}')">
    <span class="letter">Opción ${s.id}</span><h3>${escapeHtml(s.label)}</h3>
    <p>${escapeHtml(s.attitude)} · Confianza ${s.delta>0?'+':''}${s.delta}</p>
    <div class="assignment">${state.characters.filter(c=>c.health>0).map(c=>`${c.name} → Puerta ${s.map[c.id]+1}`).join("<br>")}</div>
  </button>`).join("");
  shell(`<div class="room-meta"><span>SALA ${state.roomIndex+1} DE 6</span><span class="trust">Confianza: ${state.trust>0?'+':''}${state.trust}</span></div>
    <h2>${escapeHtml(room.title)}</h2><p>${escapeHtml(room.function)}</p>
    ${renderStatus()}
    <h3>Las tres puertas</h3><div class="door-grid">${doorHtml}</div>
    <h3>Elegí una estrategia completa</h3><p class="muted">La selección asigna a todos los personajes que siguen vivos. Los personajes fallecidos no vuelven a participar.</p>
    <div class="strategy-grid">${strategyHtml}</div>
    <div class="actions"><button class="primary" id="confirm-button" disabled onclick="confirmStrategy()">Confirmar estrategia</button></div>`);
}
function selectStrategy(id) {
  selectedStrategy=id;
  document.querySelectorAll(".strategy-card").forEach(el=>el.classList.remove("selected"));
  document.getElementById(`strategy-${id}`).classList.add("selected");
  document.getElementById("confirm-button").disabled=false;
}
function confirmStrategy() {
  if(!selectedStrategy) return;
  const room=rooms[state.roomIndex], strategy=room.strategies.find(s=>s.id===selectedStrategy);
  const assignments=state.characters.filter(c=>c.health>0).map(c=>({
    name:c.name, id:c.id, doorIndex:strategy.map[c.id]
  }));
  shell(`<section class="panel center">
    <div class="eyebrow">Confirmación · Sala ${state.roomIndex+1}</div><h2>${escapeHtml(strategy.label)}</h2>
    <p>Esta es la distribución elegida. Una vez confirmada, se resolverán las pruebas y se actualizarán la salud y la Confianza.</p>
    <div class="confirm-list">${assignments.map(a=>`<div class="confirm-row"><strong>${a.name}</strong><span>Puerta ${a.doorIndex+1}</span></div>`).join("")}</div>
    <p>Variación de Confianza: <strong class="${strategy.delta>0?'good':strategy.delta<0?'bad':''}">${strategy.delta>0?'+':''}${strategy.delta}</strong></p>
    <div class="actions"><button class="secondary" onclick="renderRoom()">Volver a elegir</button><button class="primary" onclick="resolveStrategy('${strategy.id}')">Resolver pruebas</button></div>
  </section>`);
}
function compare(symbol, nature) {
  if(symbol===nature) return "tie";
  if((symbol==="Piedra"&&nature==="Tijera")||(symbol==="Papel"&&nature==="Piedra")||(symbol==="Tijera"&&nature==="Papel")) return "win";
  return "lose";
}
function resolveStrategy(id) {
  const room=rooms[state.roomIndex], strategy=room.strategies.find(s=>s.id===id);
  const beforeTrust=state.trust, rows=[];
  state.characters.forEach(c=>{
    if(c.health<=0) return;
    const doorIndex=strategy.map[c.id], door=room.doors[doorIndex];
    const before=c.health, outcome=compare(c.symbol,door[2]);
    const damage=outcome==="win"?10:outcome==="tie"?15:25;
    c.health=Math.max(0,c.health-damage);
    rows.push({name:c.name,door:door[0],before,damage,after:c.health,outcome});
  });
  state.trust=clamp(state.trust+strategy.delta,-6,6);
  state.history.push({room:state.roomIndex+1,choice:id,trustDelta:strategy.delta,rows});
  state.lastResult={rows,beforeTrust,afterTrust:state.trust,choice:strategy.label};
  const survivors=aliveCharacters().length;
  if(survivors<2) state.ending="gameover";
  else if(state.roomIndex===5) state.ending=chooseEnding();
  state.screen=state.ending?"ending":"result";
  renderResult();
}
function chooseEnding() {
  const alive=aliveCharacters(), dead=state.characters.find(c=>c.health<=0);
  if(alive.length===3) return state.trust>=4?"true":"discord";
  if(state.trust>=2) return "alliance";
  if(dead.id==="roco") return "betrayalFelix";
  if(dead.id==="felix") return "betrayalBerto";
  return "betrayalRoco";
}
function renderResult() {
  const r=state.lastResult, survivors=aliveCharacters().length;
  shell(`<section class="panel">
    <div class="eyebrow">Resultado de la sala ${state.roomIndex+1}</div><h2>La prueba terminó</h2>
    <p>La estrategia elegida fue <strong>${escapeHtml(r.choice)}</strong>. Estos son los cambios producidos:</p>
    <div class="result-list">${r.rows.map(row=>`<div class="result-row">
      <strong>${row.name}</strong> — ${escapeHtml(row.door)}<br>
      <span class="muted">${row.before} PS − ${row.damage} PS = </span><strong class="${row.after===0?'bad':'good'}">${row.after} PS</strong>
      ${row.after===0?'<span class="bad"> · Fallecido</span>':''}
    </div>`).join("")}</div>
    <p>Confianza: ${r.beforeTrust>0?'+':''}${r.beforeTrust} → <strong class="trust">${r.afterTrust>0?'+':''}${r.afterTrust}</strong></p>
    <p><strong>Personajes vivos: ${survivors} de 3.</strong></p>
    ${survivors<2?'<p class="notice">Queda menos de dos personajes con vida. La aventura termina.</p>':''}
    <div class="actions"><button class="primary" onclick="continueAfterResult()">${state.ending?'Ver desenlace':'Continuar'}</button></div>
  </section>`);
}
function continueAfterResult() {
  if(state.ending) { renderEnding(); return; }
  state.roomIndex++;
  renderRoom();
}
function renderEnding() {
  const e=endings[state.ending];
  shell(`<section class="panel center">
    <div class="eyebrow">El templo del tesoro</div><div class="ending-title">${escapeHtml(e.title)}</div>
    <p class="lead">${escapeHtml(e.text)}</p><p>${escapeHtml(e.extra)}</p>
    <div class="rule-grid">
      <div class="info-card"><strong>Supervivientes</strong>${aliveCharacters().map(c=>c.name).join(", ")||"Ninguno"}</div>
      <div class="info-card"><strong>Confianza final</strong>${state.trust>0?'+':''}${state.trust}</div>
      <div class="info-card"><strong>Salas superadas</strong>${state.history.length} de 6</div>
    </div>
    <div class="actions"><button class="primary" onclick="home()">Volver al inicio</button></div>
  </section>`);
}
home();
