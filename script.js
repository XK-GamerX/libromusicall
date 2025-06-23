// ==================== CONFIGURACIÓN Y VARIABLES GLOBALES ====================
let phrasesData = [];
let conjuntosData = {};
let currentSongData = null;
let isDragging = false;
let isVolumeDragging = false;
let textContent = '';

// Referencias DOM
const textContentDiv = document.getElementById('textContent');
const musicPanel = document.getElementById('musicPanel');
const mainContent = document.getElementById('mainContent');
const mobileOverlay = document.getElementById('mobileOverlay');
const loadingState = document.getElementById('loadingState');
const errorState = document.getElementById('errorState');
const retryLoadBtn = document.getElementById('retryLoad');

// Controles de música
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const closeBtn = document.getElementById('closeBtn');
const audioPlayer = document.getElementById('audioPlayer');

// Info de la canción
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const albumImage = document.getElementById('albumImage');
const albumArt = document.getElementById('albumArt');

// Controles de progreso
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const progressHandle = document.getElementById('progressHandle');
const currentTimeSpan = document.getElementById('currentTime');
const durationSpan = document.getElementById('duration');

// Controles de volumen
const volumeBar = document.getElementById('volumeBar');
const volumeFill = document.getElementById('volumeFill');
const volumeHandle = document.getElementById('volumeHandle');
const volumeIcon = document.getElementById('volumeIcon');

// Panel de créditos
const creditsToggle = document.getElementById('creditsToggle');
const creditsPanel = document.getElementById('creditsPanel');
const creditsCloseBtn = document.getElementById('creditsCloseBtn');
const creditsOverlay = document.getElementById('creditsOverlay');

// Modal de explicación
const explanationBtn = document.getElementById('explanationBtn');
const explanationModalOverlay = document.getElementById('explanationModalOverlay');
const explanationModal = document.getElementById('explanationModal');
const explanationCloseBtn = document.getElementById('explanationCloseBtn');
const explanationTitle = document.getElementById('explanationTitle');
const explanationText = document.getElementById('explanationText');

// ==================== TEXTO DEL CUENTO ====================
const storyText = `Una bella mañana de abril, en una callecita lateral del elegante barrio de Harajuku en Tokio, me crucé con la chica 100% perfecta.

A decir verdad, no era tan guapa. No sobresalía de ninguna manera. Su ropa no era nada especial. En la nuca su cabello tenía las marcas de recién haber despertado. Tampoco era joven –debía andar alrededor de los treinta, ni si quiera cerca de lo que comúnmente se considera una "chica". Aún así, a quince metros sé que ella es la chica 100% perfecta para mí. Desde el momento que la vi algo retumbó en mi pecho y mi boca quedó seca como un desierto. Quizá tú tienes tu propio tipo de chica favorita: digamos, las de tobillos delgados, o grandes ojos, o delicados dedos, o sin tener una buena razón te enloquecen las chicas que se toman su tiempo en terminar su merienda. Yo tengo mis propias preferencias, por supuesto. A veces en un restaurante me descubro mirando a la chica de la mesa de al lado porque me gusta la forma de su nariz.

Pero nadie puede asegurar que su chica 100% perfecta corresponde a un tipo preconcebido. Por mucho que me gusten las narices, no puedo recordar la forma de la de ella –ni siquiera si tenía una. Todo lo que puedo recordar de forma segura es que no era una gran belleza. Extraño.

–Ayer me crucé en la calle con la chica 100% perfecta –le digo a alguien.

–¿Sí? –dice él– ¿Estaba guapa?

–No realmente.

–De tu tipo entonces.

–No lo sé. Me parece que no puedo recordar nada de ella, la forma de sus ojos o el tamaño de su pecho.

–Raro.

–Sí. Raro.

–Bueno, como sea –me dice ya aburrido–, ¿qué hiciste? ¿Le hablaste? ¿La seguiste?

–Nah, sólo me crucé con ella en la calle.

Ella caminaba de este a oeste y yo de oeste a este. Era una bella mañana de abril.

Ojalá hubiera hablado con ella. Media hora sería suficiente: sólo para preguntarle acerca de ella misma, contarle algo acerca de mí, y –lo que realmente me gustaría hacer– explicarle las complejidades del destino que nos llevaron a cruzarnos uno con el otro en esa calle en Harajuku en una bella mañana de abril de 1981. Algo que seguro nos llenaría de tibios secretos, como un antiguo reloj construido cuando la paz reinaba en el mundo. Después de hablar, almorzaríamos en algún lugar, quizá veríamos una película de Woody Allen, entrar en el bar de un hotel para tomar unos cócteles. Con un poco de suerte, terminaríamos en la cama.

La posibilidad toca en la puerta de mi corazón.

Ahora la distancia entre nosotros es de apenas 15 metros.

¿Cómo acercarme? ¿Qué debería decirle?

–Buenos días, señorita, ¿podría compartir conmigo media hora para conversar?

Ridículo. Sonaría como un vendedor de seguros.

–Discúlpeme, ¿sabría usted si hay en el barrio alguna lavandería 24 horas?

No, simplemente ridículo. No cargo nada que lavar, ¿quién me creería en una línea como esa?

Quizá simplemente sirva la verdad: Buenos días, tú eres la chica 100% perfecta para mí.

No, no se lo creería. Aunque lo dijera es posible que no quisiera hablar conmigo. Perdóname, podría decir, es posible que yo sea la chica 100% perfecta para ti, pero tú no eres el chico 100% perfecto para mí. Podría suceder, y de encontrarme en esa situación me rompería en mil pedazos, jamás me recuperaría del golpe, tengo treinta y dos años, y de eso se trata madurar.

Pasamos frente a una florería. Un tibio airecito toca mi piel. La acera está húmeda y percibo el olor de las rosas. No puedo hablar con ella. Ella trae un suéter blanco y en su mano derecha estruja un sobre blanco con una sola estampilla. Así que ella le ha escrito una carta a alguien, a juzgar por su mirada adormecida quizá pasó toda la noche escribiendo. El sobre puede guardar todos sus secretos.

Doy algunas zancadas y giro: ella se pierde en la multitud. Ahora, por supuesto, sé exactamente qué tendría que haberle dicho. Tendría que haber sido un largo discurso, pienso, demasiado tarde como para decirlo ahora. Se me ocurren las ideas cuando ya no son prácticas.

Bueno, no importa, hubiera empezado "Érase una vez" y terminado con "Una historia triste, ¿no crees?"

Érase una vez un muchacho y una muchacha. El muchacho tenía dieciocho y la muchacha dieciséis. Él no era notablemente apuesto y ella no era especialmente bella. Eran solamente un ordinario muchacho solitario y una ordinaria muchacha solitaria, como todos los demás. Pero ellos creían con todo su corazón que en algún lugar del mundo vivía el muchacho 100% perfecto y la muchacha 100% perfecta para ellos. Sí, creían en el milagro. Y ese milagro sucedió.

Un día se encontraron en una esquina de la calle.

–Esto es maravilloso –dijo él–. Te he estado buscando toda mi vida. Puede que no creas esto, pero eres la chica 100% perfecta para mí.

–Y tú –ella le respondió– eres el chico 100% perfecto para mí, exactamente como te he imaginado en cada detalle. Es como un sueño.

Se sentaron en la banca de un parque, se tomaron de las manos y contaron sus historias hora tras hora. Ya no estaban solos. Qué cosa maravillosa encontrar y ser encontrado por tu otro 100% perfecto. Un milagro, un milagro cósmico.

Sin embargo, mientras se sentaron y hablaron una pequeña, pequeñísima astilla de duda echó raíces en sus corazones:

¿estaba bien si los sueños de uno se cumplen tan fácilmente?

Y así, tras una pausa en su conversación, el chico le dijo a la chica: Vamos a probarnos, sólo una vez. Si realmente somos los amantes 100% perfectos, entonces alguna vez en algún lugar, nos volveremos a encontrar sin duda alguna y cuando eso suceda y sepamos que somos los 100% perfectos, nos casaremos ahí y entonces, ¿cómo ves?

–Sí –ella dijo– eso es exactamente lo que debemos hacer. Y así partieron, ella al este y él hacia el oeste.

Sin embargo, la prueba en que estuvieron de acuerdo era absolutamente innecesaria, nunca debieron someterse a ella porque en verdad eran el amante 100% perfecto el uno para el otro y era un milagro que se hubieran conocido. Pero era imposible para ellos saberlo, jóvenes como eran. Las frías, indiferentes olas del destino procederían a agitarlos sin piedad. Un invierno, ambos, el chico y la chica se enfermaron de influenza, y tras pasar semanas entre la vida y la muerte, perdieron toda memoria de los años primeros. Cuando despertaron sus cabezas estaban vacías como la alcancía del joven D. H. Lawrence.

Eran dos jóvenes brillantes y determinados, a través de esfuerzos continuos pudieron adquirir de nuevo el conocimiento y la sensación que los calificaba para volver como miembros hechos y derechos de la sociedad. Bendito el cielo, se convirtieron en ciudadanos modelo, sabían transbordar de una línea del subterráneo a otra, eran capaces de enviar una carta de entrega especial en la oficina de correos. De hecho, incluso experimentaron otra vez el amor, a veces el 75% o aún el 85% del amor.

El tiempo pasó veloz y pronto el chico tuvo treinta y dos, la chica treinta.

Una bella mañana de abril, en búsqueda de una taza de café para empezar el día, el chico caminaba de este a oeste, mientras

que la chica lo hacía de oeste a este, ambos a lo largo de la callecita del barrio de Harajuku de Tokio. Pasaron uno al lado del otro justo en el centro de la calle. El débil destello de sus memorias perdidas brilló tenue y breve en sus corazones. Cada uno sintió retumbar su pecho. Y supieron:

Ella es la chica 100% perfecta para mí. Él es el chico 100% perfecto para mí.

Pero el resplandor de sus recuerdos era tan débil y sus pensamientos no tenían ya la claridad de hace catorce años. Sin una palabra, se pasaron de largo, uno al otro, desapareciendo en la multitud. Para siempre.

Una historia triste, ¿no crees?

Sí, eso es, eso es lo que tendría que haberle dicho.`;

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', async function() {
    try {
        console.log('🚀 Iniciando aplicación...');
        
        // Cargar configuración de frases
        await loadPhrasesConfig();
        
        // Cargar texto del cuento
        await loadStoryText();
        
        // Configurar event listeners
        setupEventListeners();
        
        // Configurar volumen inicial
        audioPlayer.volume = 0.7;
        updateVolumeDisplay(0.7);
        
        console.log('✅ Aplicación inicializada correctamente');
    } catch (error) {
        console.error('❌ Error al inicializar:', error);
        showErrorState('Error al cargar la aplicación: ' + error.message);
    }
});

// ==================== CARGA DE FRASES ====================
async function loadPhrasesConfig() {
    try {
        // Intentar cargar desde src/phrases.json
        const response = await fetch('src/phrases.json');
        if (response.ok) {
            const data = await response.json();
            phrasesData = data.frases || [];
            conjuntosData = data.conjuntos || {};
            console.log('✅ Configuración cargada desde src/:', phrasesData.length, 'frases y', Object.keys(conjuntosData).length, 'conjuntos');
            return;
        }
    } catch (error) {
        console.log('⚠️ No se encontró src/phrases.json, intentando phrases.json en raíz...');
    }

    try {
        // Intentar cargar desde phrases.json en raíz
        const response = await fetch('phrases.json');
        if (response.ok) {
            const data = await response.json();
            phrasesData = data.frases || [];
            conjuntosData = data.conjuntos || {};
            console.log('✅ Configuración cargada desde raíz:', phrasesData.length, 'frases y', Object.keys(conjuntosData).length, 'conjuntos');
            return;
        }
    } catch (error) {
        console.log('⚠️ No se encontró phrases.json, usando datos de ejemplo');
    }

    // Usar datos de ejemplo si no se encontró archivo
    const exampleData = {
        conjuntos: {
            "1": {
                nombre_del_conjunto: "1",
                song: "uwa_so_temperate.mp3",
                title: "Uwa!! So Temperate ♫",
                artist: "Toby Fox",
                spotify: "https://open.spotify.com/intl-es/track/3PV4bPPqezu18K45MIOrVY?si=7ac0606e62cd4e5f",
                color: "#FF6B6B",
                explicacion: "Elegí esta canción porque transmite calma, y sobre todo, duda, al igual que el personaje que no sabe cómo acercarse. La canción suena tranquila pero también tiene un toque emocional, como si algo importante estuviera por pasar, sin ser demasiado dramático. Acompaña bien ese momento de pensar mucho y sentir un poco de miedo antes de hablar. -Khel",
                explicacion_size: "50%"
            },
            "2": {
                nombre_del_conjunto: "2",
                song: "flashback.mp3",
                title: "Flashback (Excerpt)",
                artist: "Toby Fox",
                spotify: "https://open.spotify.com/intl-es/track/5hsRssY21u2RnOzAaRPRPE?si=e564e75483c14c98",
                color: "#fcfc5b",
                explicacion: "Escogí esta canción porque suena nostálgica y suave. Queda perfecto para el final del cuento, donde los personajes sienten algo en el corazón, pero ya es tarde. La canción transmite esa tristeza silenciosa de perder algo importante sin entender por qué, igual que ellos al cruzarse y seguir de largo.  -Khel",
                explicacion_size: "55%"
            },
            "3": {
                nombre_del_conjunto: "3",
                song: "my_feelings.mp3",
                title: "My Feelings",
                artist: "Dan Salvato",
                spotify: "https://open.spotify.com/intl-es/track/3lqCvGWCaUmpc37b0Gbxxi?si=714c80f2fb994735",
                color: "#f7a3cd",
                explicacion: "El y ella eran personas comunes pero al encontrarse sintieron que eran lo que el otro buscaba hablaron con nervios pero también con calma como si todo tuviera sentido y por eso pienso que My Feelings queda con esta escena porque suena como ese momento tranquilo y profundo en el que simplemente sentís que encontraste a la persona correcta. - Graciela",
                explicacion_size: "50%"
            },
            "4": {
                nombre_del_conjunto: "4",
                song: "duet.mp3",
                title: "Final Duet",
                artist: "Pedro Silva",
                spotify: "https://open.spotify.com/intl-es/track/5RzB3KcfvZgvsWcsETVsqG?si=1af62bf706f34bc7",
                color: "#6749e3",
                explicacion: "Elegiría 'Final Duet' porque logra encapsular la belleza de lo romántico y la profundidad de un sentimiento de tristeza sin necesidad de palabras. Es una canción hecha con un simple piano y violín que provocan un sentimiento de nostalgia , y eso la hace ideal para contar una historia de amor que termina con un final agridulce. - Luciana",
                explicacion_size: "65%" 
            }
        },
        frases: [
            {
                phrase: "Ahora la distancia entre nosotros es de apenas 15 metros.",
                conjunto: "1"
            },
            {
                phrase: "¿Cómo acercarme? ¿Qué debería decirle?",
                conjunto: "1"
            },
            {
                phrase: "–Buenos días, señorita, ¿podría compartir conmigo media hora para conversar?",
                conjunto: "1"
            },
            {
                phrase: "–Discúlpeme, ¿sabría usted si hay en el barrio alguna lavandería 24 horas?",
                conjunto: "1"
            },
            {
                phrase: "No, simplemente ridículo. No cargo nada que lavar, ¿quién me creería en una línea como esa?",
                conjunto: "1"
            },
            {
                phrase: "Quizá simplemente sirva la verdad: Buenos días, tú eres la chica 100% perfecta para mí.",
                conjunto: "1"
            },
            {
                phrase: "Ridículo. Sonaría como un vendedor de seguros.",
                conjunto: "1"
            },
            {
                phrase: "No, no se lo creería. Aunque lo dijera es posible que no quisiera hablar conmigo. Perdóname, podría decir, es posible que yo sea la chica 100% perfecta para ti, pero tú no eres el chico 100% perfecto para mí.",
                conjunto: "1"
            },
            {
                phrase: "Podría suceder, y de encontrarme en esa situación me rompería en mil pedazos, jamás me recuperaría del golpe, tengo treinta y dos años, y de eso se trata madurar.",
                conjunto: "1"
            },
            {
                phrase: "El débil destello de sus memorias perdidas brilló tenue y breve en sus corazones. Cada uno sintió retumbar su pecho. Y supieron:",
                conjunto: "2"
            },
            {
                phrase: "Ella es la chica 100% perfecta para mí. Él es el chico 100% perfecto para mí.",
                conjunto: "2"
            },
            {
                phrase: "Pero el resplandor de sus recuerdos era tan débil y sus pensamientos no tenían ya la claridad de hace catorce años. ",
                conjunto: "2"
            },
            {
                phrase: "Sin una palabra, se pasaron de largo, uno al otro, desapareciendo en la multitud. Para siempre.",
                conjunto: "2"
            },
            {
                phrase: "Érase una vez un muchacho y una muchacha. El muchacho tenía dieciocho y la muchacha dieciséis. Él no era notablemente apuesto y ella no era especialmente bella. Eran solamente un ordinario muchacho solitario y una ordinaria muchacha solitaria, como todos los demás. Pero ellos creían con todo su corazón que en algún lugar del mundo vivía el muchacho 100% perfecto y la muchacha 100% perfecta para ellos. Sí, creían en el milagro. Y ese milagro sucedió.",
                conjunto: "3"
            },
            {
                phrase: "Un día se encontraron en una esquina de la calle.",
                conjunto: "3"
            },
            {
                phrase: "–Esto es maravilloso –dijo él–. Te he estado buscando toda mi vida. Puede que no creas esto, pero eres la chica 100% perfecta para mí.",
                conjunto: "3"
            },
            {
                phrase: "–Y tú –ella le respondió– eres el chico 100% perfecto para mí, exactamente como te he imaginado en cada detalle. Es como un sueño.",
                conjunto: "3"
            },
            {
                phrase: "Se sentaron en la banca de un parque, se tomaron de las manos y contaron sus historias hora tras hora. Ya no estaban solos. Qué cosa maravillosa encontrar y ser encontrado por tu otro 100% perfecto. Un milagro, un milagro cósmico.",
                conjunto: "3"
            },
            {
                phrase: "¿estaba bien si los sueños de uno se cumplen tan fácilmente?",
                conjunto: "4"
            },
            {
                phrase: "Y así, tras una pausa en su conversación, el chico le dijo a la chica: Vamos a probarnos, sólo una vez. Si realmente somos los amantes 100% perfectos, entonces alguna vez en algún lugar, nos volveremos a encontrar sin duda alguna y cuando eso suceda y sepamos que somos los 100% perfectos, nos casaremos ahí y entonces, ¿cómo ves?",
                conjunto: "4"
            },
            {
                phrase: "–Sí –ella dijo– eso es exactamente lo que debemos hacer. Y así partieron, ella al este y él hacia el oeste.",
                conjunto: "4"
            },
            {
                phrase: "Sin embargo, la prueba en que estuvieron de acuerdo era absolutamente innecesaria, nunca debieron someterse a ella porque en verdad eran el amante 100% perfecto el uno para el otro y era un milagro que se hubieran conocido. Pero era imposible para ellos saberlo, jóvenes como eran. Las frías, indiferentes olas del destino procederían a agitarlos sin piedad. Un invierno, ambos, el chico y la chica se enfermaron de influenza, y tras pasar semanas entre la vida y la muerte, perdieron toda memoria de los años primeros. Cuando despertaron sus cabezas estaban vacías como la alcancía del joven D. H. Lawrence.",
                conjunto: "4"
            },
            {
                phrase: "Eran dos jóvenes brillantes y determinados, a través de esfuerzos continuos pudieron adquirir de nuevo el conocimiento y la sensación que los calificaba para volver como miembros hechos y derechos de la sociedad. Bendito el cielo, se convirtieron en ciudadanos modelo, sabían transbordar de una línea del subterráneo a otra, eran capaces de enviar una carta de entrega especial en la oficina de correos. De hecho, incluso experimentaron otra vez el amor, a veces el 75% o aún el 85% del amor.",
                conjunto: "4"
            },
            {
                phrase: "El tiempo pasó veloz y pronto el chico tuvo treinta y dos, la chica treinta.",
                conjunto: "4"
            },
            {
                phrase: "Una bella mañana de abril, en búsqueda de una taza de café para empezar el día, el chico caminaba de este a oeste, mientras",
                conjunto: "4"
            },
            {
                phrase: "que la chica lo hacía de oeste a este, ambos a lo largo de la callecita del barrio de Harajuku de Tokio. Pasaron uno al lado del otro justo en el centro de la calle.",
                conjunto: "4"
            }
        ]
    };

    phrasesData = exampleData.frases;
    conjuntosData = exampleData.conjuntos;

    console.log('✅ Usando datos de ejemplo:', phrasesData.length, 'frases y', Object.keys(conjuntosData).length, 'conjuntos');
}

// ==================== CARGA DEL TEXTO ====================
async function loadStoryText() {
    try {
        console.log('📄 Cargando texto del cuento...');
        
        // Simular un pequeño delay para mostrar el loading
        await new Promise(resolve => setTimeout(resolve, 800));
        
        textContent = storyText;
        
        // Ocultar loading y error, mostrar contenido
        loadingState.style.display = 'none';
        errorState.style.display = 'none';
        textContentDiv.style.display = 'block';
        
        // Convertir el texto en párrafos HTML
        const paragraphs = textContent.split('\n\n').filter(p => p.trim());
        const htmlContent = paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
        textContentDiv.innerHTML = htmlContent;
        
        // Procesar frases en el texto
        processPhrasesInText();
        
        console.log('✅ Texto cargado y procesado correctamente');
        
    } catch (error) {
        console.error('❌ Error al cargar texto:', error);
        showErrorState('Error al cargar el texto del cuento: ' + error.message);
    }
}

function showErrorState(message) {
    loadingState.style.display = 'none';
    textContentDiv.style.display = 'none';
    errorState.style.display = 'flex';
    
    const errorMessage = errorState.querySelector('p');
    if (errorMessage) {
        errorMessage.innerHTML = message;
    }
}

// ==================== PROCESAMIENTO DE FRASES EN TEXTO ====================
function processPhrasesInText() {
    if (!phrasesData || phrasesData.length === 0) {
        console.log('⚠️ No hay frases para procesar');
        return;
    }
    
    let htmlContent = textContentDiv.innerHTML;
    let phrasesFound = 0;
    
    console.log('🔍 Procesando frases en el documento...');
    
    phrasesData.forEach((phraseData, index) => {
        const phrase = phraseData.phrase;
        const conjuntoId = phraseData.conjunto;
        const conjunto = conjuntosData[conjuntoId];
        
        if (!conjunto) {
            console.warn(`⚠️ No se encontró conjunto "${conjuntoId}" para la frase: "${phrase.substring(0, 50)}..."`);
            return;
        }
        
        const regex = new RegExp(`(${escapeRegExp(phrase)})`, 'gi');
        
        const newContent = htmlContent.replace(regex, (match) => {
            phrasesFound++;
            console.log(`✅ Frase encontrada: "${match.substring(0, 50)}..." -> Conjunto: ${conjuntoId}`);
            return `<span class="highlighted-phrase" 
                        data-phrase-index="${index}"
                        data-conjunto="${conjuntoId}"
                        data-song="${conjunto.song}"
                        data-title="${conjunto.title}"
                        data-artist="${conjunto.artist || 'Artista desconocido'}"
                        data-phrase="${phraseData.phrase}"
                        data-spotify="${conjunto.spotify || ''}"
                        data-color="${conjunto.color || '#4ECDC4'}"
                        data-explicacion="${conjunto.explicacion || ''}"
                        data-explicacion-size="${conjunto.explicacion_size || '50%'}"
                        title="Haz clic para escuchar: ${conjunto.title}"
                        style="border-bottom: 2px solid ${conjunto.color}; background-color: ${conjunto.color}15;">
                        ${match}
                    </span>`;
        });
        
        if (newContent !== htmlContent) {
            htmlContent = newContent;
        }
    });
    
    textContentDiv.innerHTML = htmlContent;
    
    // Agregar event listeners a las frases resaltadas
    const highlightedPhrases = document.querySelectorAll('.highlighted-phrase');
    highlightedPhrases.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const conjuntoId = e.target.dataset.conjunto;
            const conjunto = conjuntosData[conjuntoId];
            
            if (conjunto) {
                const phraseData = {
                    phrase: e.target.dataset.phrase,
                    conjunto: conjuntoId,
                    song: conjunto.song,
                    title: conjunto.title,
                    artist: conjunto.artist,
                    spotify: conjunto.spotify,
                    color: conjunto.color,
                    explicacion: conjunto.explicacion,
                    explicacion_size: conjunto.explicacion_size
                };
                handlePhraseClick(phraseData);
            } else {
                console.error(`❌ No se encontró conjunto "${conjuntoId}"`);
                showError(`Error: No se encontró la configuración del conjunto "${conjuntoId}"`);
            }
        });
        
        // Agregar efecto hover con el color del conjunto
        const color = element.dataset.color;
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = `${color}25`;
            element.style.transform = 'scale(1.02)';
            element.style.transition = 'all 0.2s ease';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.backgroundColor = `${color}15`;
            element.style.transform = 'scale(1)';
        });
    });
    
    console.log(`✅ Procesamiento completado: ${phrasesFound} frases encontradas de ${phrasesData.length} configuradas`);
    
    if (phrasesFound === 0) {
        console.log('⚠️ No se encontraron frases en el documento. Verifica que las frases en el archivo JSON coincidan exactamente con el texto.');
    }
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Controles de música
    playBtn.addEventListener('click', togglePlayPause);
    closeBtn.addEventListener('click', closeMusicPanel);
    mobileOverlay.addEventListener('click', closeMusicPanel);
    
    // Click en álbum para abrir Spotify
    albumArt.addEventListener('click', openSpotifyLink);
    
    // Controles de progreso
    progressBar.addEventListener('click', handleProgressClick);
    progressBar.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', handleDragging);
    document.addEventListener('mouseup', stopDragging);
    
    // Controles de volumen
    volumeBar.addEventListener('click', handleVolumeClick);
    volumeBar.addEventListener('mousedown', startVolumeDragging);
    document.addEventListener('mousemove', handleVolumeDragging);
    document.addEventListener('mouseup', stopVolumeDragging);
    
    // Audio events
    audioPlayer.addEventListener('loadedmetadata', updateDuration);
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('ended', handleSongEnd);
    audioPlayer.addEventListener('error', handleAudioError);
    
    // Panel de créditos
    creditsToggle.addEventListener('click', toggleCreditsPanel);
    creditsCloseBtn.addEventListener('click', closeCreditsPanel);
    creditsOverlay.addEventListener('click', closeCreditsPanel);
    
    // Modal de explicación
    explanationBtn.addEventListener('click', openExplanationModal);
    explanationCloseBtn.addEventListener('click', closeExplanationModal);
    explanationModalOverlay.addEventListener('click', (e) => {
        if (e.target === explanationModalOverlay) {
            closeExplanationModal();
        }
    });
    
    // Botón retry
    if (retryLoadBtn) {
        retryLoadBtn.addEventListener('click', () => {
            location.reload();
        });
    }
    
    // Responsive
    window.addEventListener('resize', handleResize);
    
    // Prevenir scroll cuando se arrastra
    document.addEventListener('selectstart', (e) => {
        if (isDragging || isVolumeDragging) {
            e.preventDefault();
        }
    });
    
    // Cerrar modal con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && explanationModalOverlay.classList.contains('active')) {
            closeExplanationModal();
        }
    });
}

// ==================== MODAL DE EXPLICACIÓN ====================
function openExplanationModal() {
    if (!currentSongData || !currentSongData.explicacion) {
        showError('No hay explicación disponible para esta canción');
        return;
    }
    
    // Actualizar contenido del modal
    explanationTitle.textContent = `Explicación: ${currentSongData.title}`;
    explanationText.textContent = currentSongData.explicacion;
    
    // Aplicar tamaño personalizado si está definido
    if (currentSongData.explicacion_size) {
        explanationModal.style.maxWidth = currentSongData.explicacion_size;
    } else {
        explanationModal.style.maxWidth = '800px';
    }
    
    // Mostrar modal con animación
    explanationModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    console.log('📖 Modal de explicación abierto para:', currentSongData.title);
}

function closeExplanationModal() {
    explanationModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Resetear tamaño
    explanationModal.style.maxWidth = '800px';
    
    console.log('📖 Modal de explicación cerrado');
}

function updateExplanationButton() {
    if (currentSongData && currentSongData.explicacion) {
        explanationBtn.disabled = false;
        explanationBtn.style.opacity = '1';
        explanationBtn.title = `Ver explicación de: ${currentSongData.title}`;
    } else {
        explanationBtn.disabled = true;
        explanationBtn.style.opacity = '0.5';
        explanationBtn.title = 'No hay explicación disponible';
    }
}

// ==================== PANEL DE CRÉDITOS ====================
function toggleCreditsPanel() {
    if (creditsPanel.classList.contains('open')) {
        closeCreditsPanel();
    } else {
        openCreditsPanel();
    }
}

function openCreditsPanel() {
    creditsPanel.classList.add('open');
    creditsToggle.classList.add('open');
    creditsOverlay.classList.add('active');
    console.log('📋 Panel de créditos abierto');
}

function closeCreditsPanel() {
    creditsPanel.classList.remove('open');
    creditsToggle.classList.remove('open');
    creditsOverlay.classList.remove('active');
    console.log('📋 Panel de créditos cerrado');
}

// ==================== MANEJO DE FRASES ====================
async function handlePhraseClick(phraseData) {
    console.log('🎵 Frase clickeada:', phraseData.phrase.substring(0, 50) + '...', '| Conjunto:', phraseData.conjunto);
    
    // Si es la misma canción que está sonando, cerrar panel
    if (currentSongData && currentSongData.song === phraseData.song && musicPanel.classList.contains('open')) {
        closeMusicPanel();
        return;
    }
    
    // Detener canción actual si existe
    if (audioPlayer && !audioPlayer.paused) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
    
    // Actualizar datos de canción actual
    currentSongData = phraseData;
    
    // Actualizar interfaz
    updateSongInfo(phraseData);
    updateExplanationButton();
    
    // Cargar nueva canción
    try {
        // Intentar diferentes rutas para las canciones
        const possiblePaths = [
            `src/songs/${phraseData.song}`,
            `songs/${phraseData.song}`,
            `src/${phraseData.song}`,
            phraseData.song
        ];
        
        let songLoaded = false;
        for (const path of possiblePaths) {
            try {
                audioPlayer.src = path;
                await new Promise((resolve, reject) => {
                    audioPlayer.addEventListener('loadeddata', resolve, { once: true });
                    audioPlayer.addEventListener('error', reject, { once: true });
                    audioPlayer.load();
                });
                songLoaded = true;
                console.log(`✅ Canción cargada desde: ${path}`);
                break;
            } catch (error) {
                console.log(`⚠️ No se pudo cargar desde: ${path}`);
            }
        }
        
        if (!songLoaded) {
            throw new Error(`No se encontró la canción en ninguna ruta`);
        }
        
        // Abrir panel
        openMusicPanel();
        
        // Marcar frase como activa
        markPhraseAsActive(phraseData);
        
    } catch (error) {
        console.error('❌ Error al cargar canción:', error);
        showError(`No se pudo cargar la canción: ${phraseData.song}\n\nAsegúrate de que existe en la carpeta src/songs/`);
    }
}

function updateSongInfo(phraseData) {
    songTitle.textContent = phraseData.title || 'Canción sin título';
    songArtist.textContent = phraseData.artist || 'Artista desconocido';
    
    // Actualizar color del panel de música si es posible
    if (phraseData.color && musicPanel) {
        musicPanel.style.setProperty('--accent-color', phraseData.color);
    }
    
    // Cargar imagen del álbum
    const imageName = phraseData.song.replace('.mp3', '.jpg').replace('.wav', '.jpg').replace('.m4a', '.jpg');
    const possibleImagePaths = [
        `src/images/${imageName}`,
        `src/imgs/${imageName}`,
        `images/${imageName}`,
        `imgs/${imageName}`,
        `src/${imageName}`
    ];
    
    let imageLoaded = false;
    
    const tryLoadImage = (index) => {
        if (index >= possibleImagePaths.length) {
            // No se encontró imagen, mostrar placeholder
            albumImage.classList.remove('loaded');
            const placeholder = document.querySelector('.album-placeholder');
            if (placeholder) {
                placeholder.style.display = 'flex';
                // Cambiar color del placeholder según el conjunto
                if (phraseData.color) {
                    placeholder.style.backgroundColor = `${phraseData.color}20`;
                    placeholder.style.color = phraseData.color;
                }
            }
            console.log('⚠️ No se encontró imagen para:', imageName);
            return;
        }
        
        const tempImg = new Image();
        tempImg.onload = () => {
            albumImage.src = possibleImagePaths[index];
            albumImage.classList.add('loaded');
            const placeholder = document.querySelector('.album-placeholder');
            if (placeholder) {
                placeholder.style.display = 'none';
            }
            imageLoaded = true;
            console.log(`✅ Imagen cargada desde: ${possibleImagePaths[index]}`);
        };
        tempImg.onerror = () => {
            tryLoadImage(index + 1);
        };
        tempImg.src = possibleImagePaths[index];
    };
    
    tryLoadImage(0);
}

function markPhraseAsActive(phraseData) {
    // Remover clase active de todas las frases
    document.querySelectorAll('.highlighted-phrase').forEach(phrase => {
        phrase.classList.remove('active');
    });
    
    // Agregar clase active a las frases del conjunto actual
    const currentPhrases = document.querySelectorAll(`[data-conjunto="${phraseData.conjunto}"]`);
    currentPhrases.forEach(phrase => {
        phrase.classList.add('active');
        // Efecto visual más intenso para frases activas
        const color = phrase.dataset.color;
        phrase.style.backgroundColor = `${color}35`;
        phrase.style.fontWeight = 'bold';
        phrase.style.boxShadow = `0 2px 8px ${color}40`;
    });
    
    console.log(`✅ Frases del conjunto "${phraseData.conjunto}" marcadas como activas (${currentPhrases.length} frases)`);
}

// ==================== SPOTIFY INTEGRATION ====================
function openSpotifyLink() {
    if (currentSongData && currentSongData.spotify) {
        window.open(currentSongData.spotify, '_blank');
        console.log('🎵 Abriendo Spotify:', currentSongData.spotify);
    } else {
        console.log('⚠️ No hay enlace de Spotify para esta canción');
        showError('No hay enlace de Spotify disponible para esta canción');
    }
}

// ==================== PANEL DE MÚSICA ====================
function openMusicPanel() {
    musicPanel.classList.add('open');
    mainContent.classList.add('shifted');
    
    // En móvil, mostrar overlay
    if (window.innerWidth <= 768) {
        mobileOverlay.classList.add('active');
    }
    
    console.log('🎵 Panel de música abierto');
}

function closeMusicPanel() {
    musicPanel.classList.remove('open');
    mainContent.classList.remove('shifted');
    mobileOverlay.classList.remove('active');
    
    // Pausar música
    if (audioPlayer && !audioPlayer.paused) {
        audioPlayer.pause();
        updatePlayButton(false);
    }
    
    // Remover clase active de frases y restablecer estilos
    document.querySelectorAll('.highlighted-phrase').forEach(phrase => {
        phrase.classList.remove('active');
        const color = phrase.dataset.color;
        phrase.style.backgroundColor = `${color}15`;
        phrase.style.fontWeight = 'normal';
        phrase.style.boxShadow = 'none';
    });
    
    currentSongData = null;
    
    // Resetear interfaz
    resetSongInfo();
    updateExplanationButton();
    
    console.log('🎵 Panel de música cerrado');
}

function resetSongInfo() {
    songTitle.textContent = 'Selecciona una frase';
    songArtist.textContent = 'Artista desconocido';
    albumImage.classList.remove('loaded');
    albumImage.src = '';
    
    const placeholder = document.querySelector('.album-placeholder');
    if (placeholder) {
        placeholder.style.display = 'flex';
        placeholder.style.backgroundColor = '';
        placeholder.style.color = '';
    }
    
    // Resetear progreso
    progressFill.style.width = '0%';
    progressHandle.style.left = '0%';
    currentTimeSpan.textContent = '0:00';
    durationSpan.textContent = '0:00';
    
    // Resetear color del panel
    if (musicPanel) {
        musicPanel.style.removeProperty('--accent-color');
    }
}

// ==================== CONTROLES DE AUDIO ====================
function togglePlayPause() {
    if (!audioPlayer.src) {
        showError('No se ha cargado ninguna canción');
        return;
    }
    
    if (audioPlayer.paused) {
        audioPlayer.play()
            .then(() => {
                updatePlayButton(true);
                console.log('▶️ Reproduciendo:', currentSongData?.title);
            })
            .catch(error => {
                console.error('❌ Error al reproducir:', error);
                showError('Error al reproducir la canción: ' + error.message);
            });
    } else {
        audioPlayer.pause();
        updatePlayButton(false);
        console.log('⏸️ Pausado');
    }
}

function updatePlayButton(playing) {
    if (playing) {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
}

function updateDuration() {
    const duration = audioPlayer.duration;
    if (isFinite(duration)) {
        durationSpan.textContent = formatTime(duration);
        console.log('⏱️ Duración actualizada:', formatTime(duration));
    }
}

function updateProgress() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    
    if (isFinite(duration) && duration > 0) {
        const progress = (currentTime / duration) * 100;
        progressFill.style.width = `${progress}%`;
        progressHandle.style.left = `${progress}%`;
        currentTimeSpan.textContent = formatTime(currentTime);
    }
}

function handleProgressClick(e) {
    if (!audioPlayer.src || !isFinite(audioPlayer.duration)) return;
    
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const progress = Math.max(0, Math.min(clickX / rect.width, 1));
    const newTime = progress * audioPlayer.duration;
    
    audioPlayer.currentTime = newTime;
    console.log('⏭️ Progreso cambiado a:', formatTime(newTime));
}

function startDragging(e) {
    if (!audioPlayer.src || !isFinite(audioPlayer.duration)) return;
    isDragging = true;
    e.preventDefault();
}

function handleDragging(e) {
    if (!isDragging || !audioPlayer.src) return;
    
    const rect = progressBar.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const progress = clickX / rect.width;
    const newTime = progress * audioPlayer.duration;
    
    audioPlayer.currentTime = newTime;
}

function stopDragging() {
    isDragging = false;
}

// ==================== CONTROLES DE VOLUMEN ====================
function handleVolumeClick(e) {
    const rect = volumeBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const volume = Math.max(0, Math.min(clickX / rect.width, 1));
    
    audioPlayer.volume = volume;
    updateVolumeDisplay(volume);
    console.log('🔊 Volumen cambiado a:', Math.round(volume * 100) + '%');
}

function startVolumeDragging(e) {
    isVolumeDragging = true;
    e.preventDefault();
}

function handleVolumeDragging(e) {
    if (!isVolumeDragging) return;
    
    const rect = volumeBar.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const volume = clickX / rect.width;
    
    audioPlayer.volume = volume;
    updateVolumeDisplay(volume);
}

function stopVolumeDragging() {
    isVolumeDragging = false;
}

function updateVolumeDisplay(volume) {
    const percentage = volume * 100;
    volumeFill.style.width = `${percentage}%`;
    volumeHandle.style.left = `${percentage}%`;
    
    // Actualizar icono de volumen
    const volumeIconSvg = volumeIcon.querySelector('svg') || volumeIcon;
    if (volume === 0) {
        volumeIconSvg.innerHTML = `
            <polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
        `;
    } else if (volume < 0.5) {
        volumeIconSvg.innerHTML = `
            <polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        `;
    } else {
        volumeIconSvg.innerHTML = `
            <polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        `;
    }
}

function handleSongEnd() {
    updatePlayButton(false);
    audioPlayer.currentTime = 0;
    console.log('🔚 Canción terminada');
}

function handleAudioError(e) {
    console.error('❌ Error de audio:', e);
    showError('Error al cargar el archivo de audio. Verifica que el archivo existe y está en el formato correcto.');
    updatePlayButton(false);
}

// ==================== UTILIDADES ====================
function formatTime(seconds) {
    if (!isFinite(seconds)) return '0:00';
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function showError(message) {
    console.error('💥 Error:', message);
    alert(message);
}

function handleResize() {
    // Cerrar paneles en móvil si es necesario
    if (window.innerWidth <= 768) {
        if (musicPanel.classList.contains('open')) {
            mobileOverlay.classList.add('active');
        }
    } else {
        mobileOverlay.classList.remove('active');
    }
}

// ==================== DEBUG Y TESTING ====================
window.DEBUG = {
    loadTestPhrase: () => {
        const testPhrase = {
            phrase: "Frase de prueba",
            conjunto: "1",
            song: "test.mp3",
            title: "Canción de Prueba",
            artist: "Artista de Prueba",
            spotify: "https://open.spotify.com/track/example",
            color: "#FF0000",
            explicacion: "Esta es una explicación de prueba para la funcionalidad del modal.",
            explicacion_size: "60%"
        };
        handlePhraseClick(testPhrase);
        console.log('🧪 Frase de prueba cargada');
    },
    
    logCurrentState: () => {
        console.log('🔍 Estado actual:', {
            phrasesCount: phrasesData.length,
            conjuntosCount: Object.keys(conjuntosData).length,
            isPanelOpen: musicPanel.classList.contains('open'),
            currentSong: currentSongData,
            isPlaying: audioPlayer && !audioPlayer.paused,
            volume: audioPlayer ? audioPlayer.volume : 0,
            highlightedPhrasesCount: document.querySelectorAll('.highlighted-phrase').length,
            textLoaded: textContent.length > 0,
            conjuntos: conjuntosData,
            isExplanationModalOpen: explanationModalOverlay.classList.contains('active')
        });
    },
    
    testAllPhrases: () => {
        const phrases = document.querySelectorAll('.highlighted-phrase');
        console.log(`🧪 Frases encontradas: ${phrases.length}`);
        phrases.forEach((phrase, index) => {
            const conjunto = phrase.dataset.conjunto;
            const conjuntoData = conjuntosData[conjunto];
            console.log(`${index + 1}. "${phrase.textContent.substring(0, 50)}..." -> Conjunto: ${conjunto} (${conjuntoData?.title || 'No encontrado'})`);
        });
    },
    
    testConjuntos: () => {
        console.log('🎵 Conjuntos disponibles:');
        Object.keys(conjuntosData).forEach(key => {
            const conjunto = conjuntosData[key];
            console.log(`• ${key}: "${conjunto.title}" - ${conjunto.artist} (${conjunto.color}) - Explicación: ${conjunto.explicacion ? 'Sí' : 'No'}`);
        });
    },
    
    simulateClick: (index = 0) => {
        const phrases = document.querySelectorAll('.highlighted-phrase');
        if (phrases[index]) {
            phrases[index].click();
            const conjunto = phrases[index].dataset.conjunto;
            console.log(`🧪 Simulando click en frase ${index + 1}: "${phrases[index].textContent.substring(0, 50)}..." (Conjunto: ${conjunto})`);
        } else {
            console.log(`❌ No existe la frase con índice ${index}`);
        }
    },
    
    showTextContent: () => {
        console.log('📄 Contenido del texto cargado:', textContent.substring(0, 500) + '...');
    },
    
    showPhrasesByConjunto: (conjuntoId) => {
        const phrases = phrasesData.filter(p => p.conjunto === conjuntoId);
        console.log(`📝 Frases del conjunto "${conjuntoId}":`, phrases);
    },
    
    openTestExplanation: () => {
        if (currentSongData) {
            openExplanationModal();
            console.log('🧪 Modal de explicación abierto para prueba');
        } else {
            console.log('❌ No hay canción cargada para probar la explicación');
        }
    },
    
    reloadDocument: () => {
        location.reload();
    }
};

// Mostrar funciones de debug en consola
console.log(`
🔧 DEBUG FUNCTIONS AVAILABLE:
• DEBUG.testAllPhrases() - Ver todas las frases encontradas
• DEBUG.testConjuntos() - Ver todos los conjuntos disponibles
• DEBUG.simulateClick(index) - Simular click en una frase
• DEBUG.logCurrentState() - Ver el estado actual
• DEBUG.showTextContent() - Ver contenido del texto
• DEBUG.showPhrasesByConjunto(id) - Ver frases de un conjunto específico
• DEBUG.openTestExplanation() - Abrir modal de explicación
• DEBUG.reloadDocument() - Recargar documento

Ejemplos: 
• DEBUG.simulateClick(0) - hacer click en la primera frase
• DEBUG.showPhrasesByConjunto("1") - ver frases del conjunto 1
• DEBUG.openTestExplanation() - probar modal de explicación
`);